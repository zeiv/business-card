export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.5.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 0
        }
      },
      "moduleName": "card/templates/contact.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createTextNode("Send Message");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createElementMorph(element0);
      morphs[2] = dom.createMorphAt(element0,1,1);
      morphs[3] = dom.createMorphAt(element0,3,3);
      morphs[4] = dom.createMorphAt(element0,5,5);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","home-button",["loc",[null,[1,0],[1,15]]]],
      ["element","action",["sendMessage"],["on","submit"],["loc",[null,[2,6],[2,42]]]],
      ["inline","textarea",[],["type","text","value",["subexpr","@mut",[["get","message",["loc",[null,[3,31],[3,38]]]]],[],[]],"placeholder","Message"],["loc",[null,[3,2],[3,62]]]],
      ["inline","input",[],["type","email","value",["subexpr","@mut",[["get","fromAddress",["loc",[null,[4,29],[4,40]]]]],[],[]],"placeholder","Your Email"],["loc",[null,[4,2],[4,67]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","fromName",["loc",[null,[5,16],[5,24]]]]],[],[]],"placeholder","Your Name"],["loc",[null,[5,2],[5,50]]]]
    ],
    locals: [],
    templates: []
  };
}()));