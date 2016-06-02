define('card/transitions/card-flip', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = cardFlip;

  function cardFlip() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var direction = 1;
    if (opts.direction === 'left') {
      direction = -1;
    }
    (0, _liquidFire.stop)(this.oldElement);
    // if (this.oldElement.closest('main')) {
    //   this.oldElement.closest('main').css('transform-origin', '50% 150%');
    // }
    // if (this.newElement.closest('main')) {
    //   this.newElement.closest('main').css('transform-origin', '50% 150%');
    // }

    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { translateZ: 1200, rotateY: 180 * direction + 'deg' }, opts), (0, _liquidFire.animate)(this.newElement, { translateZ: [0, 1200], rotateY: ['0deg', -180 * direction + 'deg'] }, opts)]);
  }
});