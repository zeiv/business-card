define("card/transitions/to-up", ["exports", "card/transitions/move-over"], function (exports, _cardTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _cardTransitionsMoveOver["default"].call(this, 'y', -1, opts);
  };
});