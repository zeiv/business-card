define("liquid-fire/promise", ["exports", "ember"], function (exports, _ember) {
  // Ember is already polyfilling Promise as needed, so just use that.
  "use strict";

  exports["default"] = _ember["default"].RSVP.Promise;
});