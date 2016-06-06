import { stop, animate, Promise } from "liquid-fire";

export default function fadeChild(opts) {
  opts = opts || {};
  stop(this.oldElement);
  return Promise.all([
    animate(this.oldElement.find('.liquid-child')[0], { opacity: 0 }, opts),
    animate(this.newElement.find('.liquid-child')[0], { opacity: [ (opts.maxOpacity || 1), 0 ] }, opts)
  ]);
}
