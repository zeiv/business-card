define("liquid-fire/index", ["exports", "liquid-fire/transition-map", "liquid-fire/animate", "liquid-fire/promise", "liquid-fire/mutation-observer", "liquid-fire/version-warnings", "liquid-fire/velocity-ext"], function (exports, _liquidFireTransitionMap, _liquidFireAnimate, _liquidFirePromise, _liquidFireMutationObserver, _liquidFireVersionWarnings, _liquidFireVelocityExt) {
  "use strict";

  (0, _liquidFireVersionWarnings["default"])({
    minEmberVersion: [1, 11],
    minVelocityVersion: [0, 11, 8]
  });

  exports.TransitionMap = _liquidFireTransitionMap["default"];
  exports.animate = _liquidFireAnimate.animate;
  exports.stop = _liquidFireAnimate.stop;
  exports.isAnimating = _liquidFireAnimate.isAnimating;
  exports.timeSpent = _liquidFireAnimate.timeSpent;
  exports.timeRemaining = _liquidFireAnimate.timeRemaining;
  exports.finish = _liquidFireAnimate.finish;
  exports.Promise = _liquidFirePromise["default"];
  exports.MutationObserver = _liquidFireMutationObserver["default"];
});