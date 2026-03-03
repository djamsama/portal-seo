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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
var _mySpaceLinkContainer = _interopRequireDefault(require("../../../../containers/header/mySpaceLinkContainer"));
var _link = require("../../../link");
var _logo = _interopRequireDefault(require("../logo"));
var _searchBox = _interopRequireDefault(require("../searchBox"));
var _row = _interopRequireDefault(require("../../../styles/row"));
var _adblockPixel = _interopRequireDefault(require("../../../adblockPixel"));
var _dropDownCurrencyContainer = _interopRequireDefault(require("../../../../containers/header/dropDownCurrencyContainer"));
var _dropDownCountry = require("../dropDownCountry");
var _menuHeaderContainer = _interopRequireDefault(require("../../../../containers/menu/menuHeaderContainer"));
var _contextComponent = require("../../../contextComponent");
var _banners = _interopRequireDefault(require("../../../banners"));
var _desktopHeader = require("./styles/desktopHeader");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Composant header.
 */
var DesktopHeaderComponent = /*#__PURE__*/function (_ContextComponent) {
  function DesktopHeaderComponent(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, DesktopHeaderComponent);
    _this = _callSuper(this, DesktopHeaderComponent, [props, state]);
    _this["float"] = _this["float"].bind(_this);
    _this.unFloat = _this.unFloat.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.state = {
      floating: false
    };
    return _this;
  }
  (0, _inherits2["default"])(DesktopHeaderComponent, _ContextComponent);
  return (0, _createClass2["default"])(DesktopHeaderComponent, [{
    key: "float",
    value: function _float() {
      this.setState({
        floating: true
      });
    }
  }, {
    key: "unFloat",
    value: function unFloat() {
      this.setState({
        floating: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (window.scrollY !== 0) {
        if (this.state.floating === false) {
          this["float"]();
        }
      } else if (this.state.floating !== false) {
        this.unFloat();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        searchMenuItems = _this$props.searchMenuItems,
        severalSearchMode = _this$props.severalSearchMode,
        fixed = _this$props.fixed,
        bannerEnabled = _this$props.bannerEnabled;
      var _this$context = this.context,
        initData = _this$context.initData,
        config = _this$context.config;
      return /*#__PURE__*/_react["default"].createElement(_desktopHeader.DesktopHeader, {
        "data-cy": "headerDesktop"
      }, /*#__PURE__*/_react["default"].createElement(_adblockPixel["default"], null), /*#__PURE__*/_react["default"].createElement(_desktopHeader.HeaderTop, null, /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_desktopHeader.HeaderNavTop, null, /*#__PURE__*/_react["default"].createElement(_desktopHeader.Corner, null), /*#__PURE__*/_react["default"].createElement(_link.ResponsiveVeLink, {
        component: _desktopHeader.Exhibit,
        className: "exhibit right",
        to: initData.headerLinksNavcontactUs,
        style: {
          marginLeft: "50px"
        },
        encrypt: true,
        dataCy: "headerExhibitLink"
      }, intl.formatMessage({
        id: "Fo_Layout_Header_Contact_Us"
      })), /*#__PURE__*/_react["default"].createElement(_dropDownCurrencyContainer["default"], null), /*#__PURE__*/_react["default"].createElement(_mySpaceLinkContainer["default"], {
        asIcon: false,
        mobileDisplay: false
      }), /*#__PURE__*/_react["default"].createElement(_dropDownCountry.DropDownCountry, {
        selected: this.props.locale
      })))), /*#__PURE__*/_react["default"].createElement(_desktopHeader.HeaderNav, {
        "float": this.state.floating,
        fixed: fixed
      }, /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_logo["default"], {
        floating: this.state.floating
      }), /*#__PURE__*/_react["default"].createElement(_searchBox["default"], {
        searchMenuItems: searchMenuItems,
        onChangeSearchMode: function onChangeSearchMode(mode) {
          return _this2.props.onChangeSearchMode(mode);
        },
        severalSearchMode: severalSearchMode,
        isStickyHeader: this.state.floating
      }), /*#__PURE__*/_react["default"].createElement(_menuHeaderContainer["default"], null))), bannerEnabled === true && /*#__PURE__*/_react["default"].createElement(_banners["default"], {
        route: config.route
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
DesktopHeaderComponent.propTypes = {
  /**
   * Permet de rendre le header fixe
   *
   */
  "float": _propTypes["default"].func,
  /**
   * Permet de rendre le header non fixe
   *
   */
  unFloat: _propTypes["default"].func
};
DesktopHeaderComponent.defaultProps = {
  bannerEnabled: true
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(DesktopHeaderComponent);