"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _contextComponent = require("../../../../../contextComponent");
var _search = require("./styles/search");
var _searchBox = _interopRequireDefault(require("../../../searchBox"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Barre de recherche - version mobile. */
var Search = /*#__PURE__*/function (_ContextComponent) {
  function Search(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, Search);
    _this = _callSuper(this, Search, [props, state]);
    _this.tempOverflow = false;
    _this.state = {
      active: false
    };
    _this.visibility = _this.visibility.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Search, _ContextComponent);
  return (0, _createClass2["default"])(Search, [{
    key: "visibility",
    value: function visibility() {
      var active = this.state.active;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;
      if (isMobile) {
        if (this.tempOverflow === false) {
          this.tempOverflow = document.body.style.overflowY;
        }
        if (!active) {
          document.body.style.overflowY = "hidden";
        } else {
          document.body.style.overflowY = this.tempOverflow;
        }
      }
      this.setState({
        active: !active
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var active = this.state.active;
      var _this$props = this.props,
        searchMenuItems = _this$props.searchMenuItems,
        _onChangeSearchMode = _this$props.onChangeSearchMode,
        onSearchTextChange = _this$props.onSearchTextChange;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_search.SearchLinkWrapper, {
        onClick: this.visibility,
        collapsed: !active
      }, /*#__PURE__*/_react["default"].createElement(_search.SearchLink, null)), /*#__PURE__*/_react["default"].createElement(_search.SearchWrapper, {
        collapsed: !active
      }, /*#__PURE__*/_react["default"].createElement(_search.SearchSection, null, /*#__PURE__*/_react["default"].createElement(_search.SearchInputWrapper, null, /*#__PURE__*/_react["default"].createElement(_searchBox["default"], {
        isMobileSearch: true,
        isHeader: true,
        onSearchTextChange: onSearchTextChange,
        searchMenuItems: searchMenuItems,
        onChangeSearchMode: function onChangeSearchMode(mode) {
          return _onChangeSearchMode(mode);
        },
        severalSearchMode: false,
        isActiveMobileSearch: active
      }), /*#__PURE__*/_react["default"].createElement(_search.SearchClose, {
        onClick: function onClick() {
          return _this2.visibility(false);
        }
      })))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Search;
Search.defaultProps = {};