import { stop, animate, Promise } from "liquid-fire";

export default function cardFlip(opts={}) {
  var direction = 1;
  if (opts.direction === 'left') {
    direction = -1;
  }
  stop(this.oldElement);
  // if (this.oldElement.closest('main')) {
  //   this.oldElement.closest('main').css('transform-origin', '50% 150%');
  // }
  // if (this.newElement.closest('main')) {
  //   this.newElement.closest('main').css('transform-origin', '50% 150%');
  // }

  return Promise.all([
    animate(this.oldElement, { translateZ: 1200, rotateY: 180*direction + 'deg' }, opts),
    animate(this.newElement, { translateZ: [0, 1200], rotateY: ['0deg', -180*direction + 'deg'] }, opts)
  ]);
}
