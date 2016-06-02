var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

export { constraintKeys };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import Ember from "ember";
import constrainables from "./constrainables";

// Every rule constraint has a target and either `keys` or
// `predicate`. key-based constraints are cheaper because we can check
// them with O(1) lookups, whereas predicates must be searched O(n).

var Constraint = (function () {
  function Constraint(target, matcher) {
    _classCallCheck(this, Constraint);

    // targets are the properties of a transition that we can
    // constrain
    this.target = target;
    if (arguments.length === 1) {
      return;
    }
    if (matcher instanceof RegExp) {
      this.predicate = function (value) {
        return matcher.test(value);
      };
    } else if (typeof matcher === 'function') {
      this.predicate = matcher;
    } else if (typeof matcher === 'boolean') {
      this.predicate = function (value) {
        return matcher ? value : !value;
      };
    } else {
      this.keys = constraintKeys(matcher);
    }
  }

  _createClass(Constraint, [{
    key: "invert",
    value: function invert() {
      if (!constrainables[this.target].reversesTo) {
        return this;
      }
      var inverse = new this.constructor(constrainables[this.target].reversesTo);
      inverse.predicate = this.predicate;
      inverse.keys = this.keys;
      return inverse;
    }
  }]);

  return Constraint;
})();

export default Constraint;

var EMPTY = '__liquid_fire_EMPTY__';
export { EMPTY };
var ANY = '__liquid_fire_ANY__';

export { ANY };

function constraintKeys(matcher) {
  if (typeof matcher === 'undefined' || matcher === null) {
    matcher = [EMPTY];
  } else if (!Ember.isArray(matcher)) {
    matcher = [matcher];
  }
  return Ember.A(matcher).map(function (elt) {
    if (typeof elt === 'string') {
      return elt;
    } else {
      return Ember.guidFor(elt);
    }
  });
}