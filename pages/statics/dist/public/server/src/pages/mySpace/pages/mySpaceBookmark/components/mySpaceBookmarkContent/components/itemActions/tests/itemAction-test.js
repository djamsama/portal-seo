"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _testUtils = require("react-dom/test-utils");
var _index = _interopRequireDefault(require("../index"));
var _itemMySpace = _interopRequireDefault(require("../../../../../../../components/itemMySpace"));
var _modal = _interopRequireDefault(require("../../../../../../../../../components/modal"));
var _mySpace = require("../../../../../../../styles/mySpace");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
require("../../../../../../../../../../tools/utils-test/mockIntersectionObserver.js");
var item = {
  id: 159410,
  entityType: "PRODUCT",
  entityId: 2003900,
  comments: "un com ",
  companyId: 53709,
  date: null,
  requestTypes: null,
  requestTokenId: null,
  requestUrl: null,
  productDTO: {
    imageUrl: "http://img.archiexpo.fr/images_ae/photo-m/53709-13106454.jpg",
    linkUrl: "http://www.archiexpo.fr/prod/nordlux/product-53709-2003900.html",
    company: null,
    newProduct: false,
    innovation: null,
    productPrice: null,
    hasVideo: null,
    shortName: "lampe de table",
    brand: "ALTON ",
    name: "lampe de table / contemporaine / en laiton brossé / en verre opalescent",
    id: 2003900
  },
  pdfDTO: null,
  pdfDetailsDTO: null,
  projectDTO: null
};
var folder = {
  id: 1004490,
  bookmarks: [item],
  defaultFolder: false,
  label: "simpleFolder",
  owner: null,
  shared: false,
  sharedWith: false
};
var win = document.defaultView;
global.HTMLElement = win.HTMLElement;
var products = [{
  id: "1",
  img: "img.png",
  def: "def"
}];
test("itemAction", /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee() {
  var spyOpenedActions, itemAction;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.n) {
      case 0:
        spyOpenedActions = sinon.spy();
        itemAction = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_itemMySpace["default"], {
          item: item,
          folder: folder,
          showComments: false,
          products: products
        }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
          eventClassName: "divItemActions",
          id: "divItemActions".concat(folder.id).concat(item.id),
          key: "divItemActions".concat(folder.id).concat(item.id),
          folder: folder,
          item: item,
          onBookmarkMoveFormSubmit: function onBookmarkMoveFormSubmit() {
            return console.log("onBookmarkMoveFormSubmit");
          },
          onBookmarkTrashFormSubmit: function onBookmarkTrashFormSubmit() {
            return console.log("onBookmarkMoveFormSubmit");
          },
          openedActions: spyOpenedActions
        })));
        (0, _testUtils.act)(function () {
          itemAction.update();
          expect(itemAction.find(_modal["default"]).exists()).toEqual(true);
          expect(itemAction.find({
            title: "foj_myspace_bookmark_action_move"
          }).exists()).toEqual(true);
          itemAction.find({
            title: "foj_myspace_bookmark_action_move"
          }).first().simulate("click");
          itemAction.update();
          expect(spyOpenedActions.calledOnce).toBe(true);
          expect(itemAction.find(_mySpace.ActionDivIconTrashWhiteMarginRight).exists()).toEqual(true);
          itemAction.find(_mySpace.ActionDivIconTrashWhiteMarginRight).simulate("click");
        });
      case 1:
        return _context.a(2);
    }
  }, _callee);
})));