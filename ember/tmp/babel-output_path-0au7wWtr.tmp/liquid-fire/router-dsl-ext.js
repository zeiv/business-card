define('liquid-fire/router-dsl-ext', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var Router = _ember['default'].Router;
  var proto = _ember['default'].RouterDSL.prototype;

  var currentMap = null;

  proto.modal = function (componentName, opts) {

    _ember['default'].assert('modal("' + componentName + '",...) needs a `withParams` argument', opts && opts.withParams);

    opts = _ember['default'].copy(opts);

    opts.withParams = expandParamOptions(opts.withParams);
    opts.otherParams = expandParamOptions(opts.otherParams);

    if (typeof opts.dismissWithOutsideClick === 'undefined') {
      opts.dismissWithOutsideClick = true;
    }

    if (typeof opts.dismissWithEscape === 'undefined') {
      opts.dismissWithEscape = true;
    }

    currentMap.push({
      route: this.parent,
      name: componentName,
      options: opts
    });
  };

  // 1.10 and above
  Router.reopen({
    _initRouterJs: function _initRouterJs() {
      currentMap = [];
      this._super.apply(this, arguments);
      this.router.modals = currentMap;
    }
  });

  // 1.9 and below
  var origMap = Router.map;
  Router.reopenClass({
    map: function map() {
      currentMap = [];
      var output = origMap.apply(this, arguments);
      if (this.router) {
        this.router.modals = currentMap;
      }
      return output;
    }
  });

  // takes string, array of strings, object, or array of objects and strings
  // and turns them into one object to map withParams/otherParams from context to modal
  //
  // "foo"                   => { foo: "foo" }
  // ["foo"]                 => { foo: "foo" }
  // { foo: "bar" }          => { foo: "bar" }
  // ["foo", { bar: "baz" }] => { foo: "foo", bar: "baz" }
  //
  function expandParamOptions(options) {
    if (!options) {
      return {};
    }

    if (!_ember['default'].isArray(options)) {
      options = [options];
    }

    var params = {};
    var option, i, key;

    for (i = 0; i < options.length; i++) {
      option = options[i];
      if (typeof option === "object") {
        for (key in option) {
          params[key] = option[key];
        }
      } else {
        params[option] = option;
      }
    }

    return params;
  }
});