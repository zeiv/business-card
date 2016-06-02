define('liquid-fire/modal', ['exports', 'ember', 'ember-getowner-polyfill'], function (exports, _ember, _emberGetownerPolyfill) {
  'use strict';

  var get = _ember['default'].get;

  exports['default'] = _ember['default'].Object.extend({

    enabled: _ember['default'].computed('modals.activeRouteNames', function () {
      return get(this, 'modals.activeRouteNames').indexOf(get(this, 'route')) >= 0;
    }),

    controller: _ember['default'].computed('enabled', function () {
      if (!get(this, 'enabled')) {
        return;
      }
      var owner = (0, _emberGetownerPolyfill['default'])(this);
      var name = get(this, 'options.controller') || get(this, 'route');
      return owner.lookup('controller:' + name);
    }),

    update: _ember['default'].observer('controller', _ember['default'].on('init', function () {
      var _this = this;

      var context = this.makeContext();
      var activeContexts = get(this, 'modals.modalContexts');
      var matchingContext = activeContexts.find(function (c) {
        return get(c, 'modal') === _this;
      });

      if (context) {
        if (matchingContext) {
          activeContexts.replace(activeContexts.indexOf(matchingContext), 1, [context]);
        } else {
          activeContexts.pushObject(context);
        }
      } else {
        if (matchingContext) {
          activeContexts.removeObject(matchingContext);
        }
      }
    })),

    makeContext: function makeContext() {
      var params,
          controller = get(this, 'controller');

      if (!controller) {
        return;
      }

      params = currentParams(controller, get(this, 'options.withParams'));
      if (params) {
        return _ember['default'].Object.create({
          modal: this,
          source: controller,
          name: get(this, 'name'),
          options: get(this, 'options'),
          params: params
        });
      }
    }

  });

  function currentParams(controller, paramMap) {
    var params = {};
    var proto = controller.constructor.proto();
    var foundNonDefault = false;
    var to, from, value, defaultValue;

    for (from in paramMap) {
      to = paramMap[from];
      value = controller.get(from);
      params[to] = value;
      defaultValue = proto[from];
      if (defaultValue instanceof _ember['default'].ComputedProperty) {
        defaultValue = undefined;
      }
      if (value !== defaultValue) {
        foundNonDefault = true;
      }
    }

    if (foundNonDefault) {
      return params;
    }
  }
});