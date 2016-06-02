define('liquid-fire/is-browser', ['exports'], function (exports) {
  'use strict';

  exports['default'] = isBrowser;

  function isBrowser() {
    return typeof window !== 'undefined' && window && typeof document !== 'undefined' && document;
  }
});