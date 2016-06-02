define("liquid-fire/growable", ["exports", "ember", "liquid-fire/promise"], function (exports, _ember, _liquidFirePromise) {
  "use strict";

  var capitalize = _ember["default"].String.capitalize;

  exports["default"] = _ember["default"].Mixin.create({
    growDuration: 250,
    growPixelsPerSecond: 200,
    growEasing: 'slide',

    transitionMap: _ember["default"].inject.service('liquid-fire-transitions'),

    animateGrowth: function animateGrowth(elt, have, want) {
      var _this = this;

      this.get('transitionMap').incrementRunningTransitions();
      return _liquidFirePromise["default"].all([this._adaptDimension(elt, 'width', have, want), this._adaptDimension(elt, 'height', have, want)]).then(function () {
        _this.get('transitionMap').decrementRunningTransitions();
      });
    },

    _adaptDimension: function _adaptDimension(elt, dimension, have, want) {
      if (have[dimension] === want[dimension]) {
        return _liquidFirePromise["default"].resolve();
      }
      var target = {};
      target['outer' + capitalize(dimension)] = [want[dimension], have[dimension]];
      return _ember["default"].$.Velocity(elt[0], target, {
        duration: this._durationFor(have[dimension], want[dimension]),
        queue: false,
        easing: this.get('growEasing') || this.constructor.prototype.growEasing
      });
    },

    _durationFor: function _durationFor(before, after) {
      return Math.min(this.get('growDuration') || this.constructor.prototype.growDuration, 1000 * Math.abs(before - after) / (this.get('growPixelsPerSecond') || this.constructor.prototype.growPixelsPerSecond));
    }

  });
});