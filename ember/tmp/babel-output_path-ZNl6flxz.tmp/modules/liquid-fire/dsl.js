var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { setDefaults } from "./animate";
import Rule from "./rule";
import Constraint from "./constraint";
import Action from "./action";

var DSL = (function () {
  function DSL(map) {
    _classCallCheck(this, DSL);

    this.map = map;
  }

  _createClass(DSL, [{
    key: "setDefault",
    value: function setDefault(props) {
      setDefaults(props);
    }
  }, {
    key: "transition",
    value: function transition() {
      var rule = new Rule();
      var parts = Array.prototype.slice.apply(arguments).reduce(function (a, b) {
        return a.concat(b);
      }, []);

      for (var i = 0; i < parts.length; i++) {
        rule.add(parts[i]);
      }

      this.map.addRule(rule);
    }
  }, {
    key: "fromRoute",
    value: function fromRoute(routeName) {
      return [new Constraint('oldRoute', routeName)];
    }
  }, {
    key: "toRoute",
    value: function toRoute(routeName) {
      return [new Constraint('newRoute', routeName)];
    }
  }, {
    key: "withinRoute",
    value: function withinRoute(routeName) {
      return this.fromRoute(routeName).concat(this.toRoute(routeName));
    }
  }, {
    key: "fromValue",
    value: function fromValue(matcher) {
      return [new Constraint('oldValue', matcher)];
    }
  }, {
    key: "toValue",
    value: function toValue(matcher) {
      return [new Constraint('newValue', matcher)];
    }
  }, {
    key: "betweenValues",
    value: function betweenValues(matcher) {
      return this.fromValue(matcher).concat(this.toValue(matcher));
    }
  }, {
    key: "fromModel",
    value: function fromModel(matcher) {
      return [new Constraint('oldModel', matcher)];
    }
  }, {
    key: "toModel",
    value: function toModel(matcher) {
      return [new Constraint('newModel', matcher)];
    }
  }, {
    key: "betweenModels",
    value: function betweenModels(matcher) {
      return this.fromModel(matcher).concat(this.toModel(matcher));
    }
  }, {
    key: "hasClass",
    value: function hasClass(name) {
      return new Constraint('parentElementClass', name);
    }
  }, {
    key: "matchSelector",
    value: function matchSelector(selector) {
      return new Constraint('parentElement', function (elt) {
        return elt.is(selector);
      });
    }
  }, {
    key: "childOf",
    value: function childOf(selector) {
      return this.matchSelector(selector + ' > *');
    }
  }, {
    key: "use",
    value: function use(nameOrHandler) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return new Action(nameOrHandler, args);
    }
  }, {
    key: "reverse",
    value: function reverse(nameOrHandler) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return new Action(nameOrHandler, args, { reversed: true });
    }
  }, {
    key: "useAndReverse",
    value: function useAndReverse(nameOrHandler) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return [this.use.apply(this, [nameOrHandler].concat(args)), this.reverse.apply(this, [nameOrHandler].concat(args))];
    }
  }, {
    key: "onInitialRender",
    value: function onInitialRender() {
      return new Constraint('firstTime', 'yes');
    }
  }, {
    key: "includingInitialRender",
    value: function includingInitialRender() {
      return new Constraint('firstTime', ['yes', 'no']);
    }
  }, {
    key: "inHelper",
    value: function inHelper() {
      for (var _len4 = arguments.length, names = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        names[_key4] = arguments[_key4];
      }

      return new Constraint('helperName', names);
    }
  }, {
    key: "outletName",
    value: function outletName() {
      for (var _len5 = arguments.length, names = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        names[_key5] = arguments[_key5];
      }

      return new Constraint('outletName', names);
    }
  }, {
    key: "toModal",
    value: function toModal(matcher) {
      return new Constraint('newModalComponent', matcher);
    }
  }, {
    key: "fromModal",
    value: function fromModal(matcher) {
      return new Constraint('oldModalComponent', matcher);
    }
  }, {
    key: "media",
    value: function media(query) {
      return new Constraint('media', function () {
        return window.matchMedia(query).matches;
      });
    }
  }, {
    key: "debug",
    value: function debug() {
      return 'debug';
    }
  }]);

  return DSL;
})();

export default DSL;