define("liquid-fire/modals", ["exports", "ember", "ember-getowner-polyfill", "liquid-fire/modal"], function (exports, _ember, _emberGetownerPolyfill, _liquidFireModal) {
  "use strict";

  exports["default"] = _ember["default"].Service.extend({
    routing: _ember["default"].inject.service('-routing'),

    setup: _ember["default"].on('init', function () {

      this.set('modalContexts', _ember["default"].A());
      this.set('modals', _ember["default"].A());

      var owner = (0, _emberGetownerPolyfill["default"])(this);
      var modalConfigs = owner.lookup('router:main').router.modals;
      if (modalConfigs && modalConfigs.length > 0) {
        var self = this;
        modalConfigs.forEach(function (m) {
          self.registerModal(m);
        });
      }
    }),

    registerModal: function registerModal(config) {
      var ext = {
        modals: this
      };

      for (var param in config.options.withParams) {
        ext[param + "Observer"] = observerForParam(param);
      }

      var owner = (0, _emberGetownerPolyfill["default"])(this);
      if (_ember["default"].setOwner) {
        _ember["default"].setOwner(ext, owner);
      } else {
        ext.container = this.container;
      }

      var ExtendedModal = _liquidFireModal["default"].extend(ext);

      if (_ember["default"].setOwner) {
        var serviceContext = this;

        Object.defineProperty(ExtendedModal.prototype, 'container', {
          configurable: true,
          enumerable: false,
          get: function get() {
            _ember["default"].deprecate('Using the injected `container` is deprecated. Please use the `getOwner` helper instead to access the owner of this object.', false, { id: 'ember-application.injected-container', until: '3.0.0' });

            return serviceContext.container;
          }
        });
      }

      this.get('modals').pushObject(_liquidFireModal["default"].extend(ext).create(config));
    },

    activeRouteNames: _ember["default"].computed('routing.currentRouteName', function () {
      // We need this to force the right observers to all be in place
      // for invalidation, even though we aren't use it directly.
      this.get('routing.currentRouteName');

      var owner = (0, _emberGetownerPolyfill["default"])(this);
      var infos = owner.lookup('router:main').router.currentHandlerInfos;
      if (infos) {
        return infos.map(function (h) {
          return h.name;
        });
      } else {
        return [];
      }
    })

  });

  function observerForParam(param) {
    return _ember["default"].observer('controller.' + param, function () {
      this.update();
    });
  }
});