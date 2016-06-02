define('card/tests/test-helper', ['exports', 'card/tests/helpers/resolver', 'ember-qunit'], function (exports, _cardTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_cardTestsHelpersResolver['default']);
});