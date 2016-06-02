define("liquid-fire/version-warnings", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  function emberVersion() {
    var m = /^(\d+)\.(\d+)/.exec(_ember["default"].VERSION);
    if (!m) {
      return [0, 0];
    }
    return [parseInt(m[1]), parseInt(m[2])];
  }

  exports["default"] = function (args) {

    if (_ember["default"].compare(args.minEmberVersion, emberVersion()) === 1) {
      _ember["default"].warn("This version of liquid fire requires Ember " + args.minEmberVersion.join('.') + " or newer");
    }

    if (!_ember["default"].$.Velocity) {
      _ember["default"].warn("Velocity.js is missing");
    } else {
      var version = _ember["default"].$.Velocity.version;
      if (_ember["default"].compare(args.minVelocityVersion, [version.major, version.minor, version.patch]) === 1) {
        _ember["default"].warn("You should probably upgrade Velocity.js, recommended minimum is " + args.minVelocityVersion.join('.'));
      }
    }
  };
});