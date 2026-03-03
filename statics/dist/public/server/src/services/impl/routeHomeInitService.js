"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initService = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _remove = _interopRequireDefault(require("lodash/remove"));
var _initService = require("../initService");
var _defaultValues = require("../../constants/defaultValues");
var _defaultState = require("../../constants/defaultState");
var _specificSiteHelper = _interopRequireDefault(require("../../helpers/specificSiteHelper"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InitServiceImpl = /*#__PURE__*/function () {
  function InitServiceImpl() {
    (0, _classCallCheck2["default"])(this, InitServiceImpl);
  }
  return (0, _createClass2["default"])(InitServiceImpl, [{
    key: "_getLocale",
    value: function _getLocale(req) {
      return req.config && req.config.portal && req.config.portal.locale || _defaultValues.DEFAULT_LOCALE;
    }
  }, {
    key: "_getSearchMenuItems",
    value: function _getSearchMenuItems(req) {
      var searchMenuItems = req.data && req.data.searchMenuItems || [];
      return searchMenuItems;
    }
  }, {
    key: "_getMenuState",
    value: function _getMenuState(req) {
      var menu = req.data && req.data.menuItems || [];
      var portal = req.config.portal;

      // Certains site n'ont pas de projet, dans ce cas il ne faut donc pas afficher l'item "Projets"
      if (!_specificSiteHelper["default"].isSiteWithProject(portal)) {
        (0, _remove["default"])(menu, function (item) {
          return item.id === "PROJECTS";
        });
      }

      // Ajout de la propritée isLoading pour initialiser les menuItems
      menu = menu.map(function (menu) {
        return _objectSpread(_objectSpread({}, menu), {}, {
          isLoading: false
        });
      });
      return menu;
    }
  }, {
    key: "getInitStateData",
    value: function getInitStateData(req) {
      var state = {
        Application: req.state || {},
        Menu: _defaultState.DEFAULT_MENU_STATE
      };
      state.Application.localeProp = this._getLocale(req);
      state.Menu.menuItems = this._getMenuState(req);
      state.Application.searchMenuItems = this._getSearchMenuItems(req);
      return state;
    }
  }, {
    key: "getInitData",
    value: function getInitData(req) {
      return req.data || {};
    }
  }, {
    key: "getConfig",
    value: function getConfig(req) {
      return req.config || {};
    }
  }]);
}();
var initService = exports.initService = new InitServiceImpl();