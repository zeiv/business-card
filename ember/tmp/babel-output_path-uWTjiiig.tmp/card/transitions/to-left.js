define("card/transitions/to-left", ["exports", "card/transitions/move-over"], function (exports, _cardTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _cardTransitionsMoveOver["default"].call(this, 'x', -1, opts);
  };
});