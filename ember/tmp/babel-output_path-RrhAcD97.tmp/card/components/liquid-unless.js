define('card/components/liquid-unless', ['exports', 'card/components/liquid-if'], function (exports, _cardComponentsLiquidIf) {
  exports['default'] = _cardComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });
});