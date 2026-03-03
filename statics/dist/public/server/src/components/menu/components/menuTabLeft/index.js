"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _reactReveal = require("react-reveal");
var _globalHelper = require("../../../../helpers/globalHelper");
var _contextComponent = require("../../../contextComponent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-plusplus */
var defaultText = "";
var UneDiv = function UneDiv(props) {
  var children = props;
  return /*#__PURE__*/_react["default"].createElement("div", null, children);
};
var MenuTabularOnLeft = exports["default"] = /*#__PURE__*/function (_ContextComponent) {
  function MenuTabularOnLeft(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MenuTabularOnLeft);
    _this = _callSuper(this, MenuTabularOnLeft, [props]);
    _this.handleItemClick = _this.handleItemClick.bind(_this);
    _this.isActive = _this.isActive.bind(_this);
    _this.firstActive = _this.firstActive.bind(_this);
    _this.nameToTest = "";
    var activeIndex = _this.firstActive();
    var activeItem = "";
    var activeContractorId = 0;
    if (_this.props.tabs && _this.props.tabs.length > 0) {
      activeItem = _this.props.tabs[activeIndex].name;
      if (_this.props.tabs[activeIndex].item && _this.props.tabs[activeIndex].item.rfqContractorId) {
        activeContractorId = _this.props.tabs[activeIndex].item.rfqContractorId;
      }
    }
    var segmentText = _this.props.tabs && _this.props.tabs.length > 0 ? _this.props.tabs[activeIndex].description : "";
    _this.state = {
      activeItem: activeItem,
      activeContractorId: activeContractorId,
      segmentText: segmentText
    };
    return _this;
  }
  (0, _inherits2["default"])(MenuTabularOnLeft, _ContextComponent);
  return (0, _createClass2["default"])(MenuTabularOnLeft, [{
    key: "firstActive",
    value: function firstActive() {
      var theLength = this.props.tabs ? this.props.tabs.length : 0;
      for (var i = 0; i < theLength; i++) {
        if (this.props.tabs[i].selected === true) {
          this.nameToTest = this.props.tabs[i].name;
          return i;
        }
      }
      this.nameToTest = this.props.tabs[0].name;
      return 0;
    }
  }, {
    key: "isActive",
    value: function isActive(tab) {
      var contractorId = tab.item && tab.item.rfqContractorId ? tab.item.rfqContractorId : 0;
      var isActive = this.state.activeContractorId !== 0 ? contractorId === this.state.activeContractorId : tab.name === this.state.activeItem;
      return isActive;
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(e, tab) {
      var text = defaultText;
      var activeContractorId = 0;
      if (tab && tab.description) {
        text = tab.description;
        if (tab.item && tab.item.rfqContractorId) {
          activeContractorId = tab.item.rfqContractorId;
        }
      }
      this.setState({
        activeItem: tab.name,
        segmentText: text,
        activeContractorId: activeContractorId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var effectComps = {
        Fade: _reactReveal.Fade,
        Flip: _reactReveal.Flip,
        Rotate: _reactReveal.Rotate,
        Zoom: _reactReveal.Zoom,
        Bounce: _reactReveal.Bounce,
        Slide: _reactReveal.Slide,
        Roll: _reactReveal.Roll,
        LightSpeed: _reactReveal.LightSpeed
      };
      var effect = this.props.effect;
      var EffectComp = effect && typeof effectComps[effect] !== "undefined" ? effectComps[effect] : UneDiv;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          boxSizing: "border-box"
        }
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        width: 4
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu, {
        vertical: true,
        fluid: true,
        tabular: true
      }, this.props.tabs.map(function (tab) {
        var isActive = _this2.isActive(tab);
        var tabContent = typeof tab.comp === "string" || typeof tab.comp === "undefined" ? tab.comp : /*#__PURE__*/_react["default"].createElement(tab.comp, {
          key: tab.item ? "menuTabLeft".concat(tab.item.rfqContractorId) : _globalHelper.GlobalHelper.generateKey("menuTabLeft".concat(tab.name)),
          active: isActive,
          item: tab.item,
          tag: tab.tag
        });
        var customStyle = isActive ? {
          padding: "1px"
        } : {};
        var menuItemKey = "menuItem".concat(tab.name);
        if (tab.item && tab.item.rfqContractorId) {
          menuItemKey += tab.item.rfqContractorId.toString();
        }
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Menu.Item, {
          key: menuItemKey,
          name: tab.name,
          active: isActive,
          onClick: function onClick(e) {
            return _this2.handleItemClick(e, tab);
          },
          style: customStyle
        }, tabContent);
      })), !_globalHelper.GlobalHelper.isMobileDevice() && /*#__PURE__*/_react["default"].createElement("div", null, " ", this.props.legend)), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Grid.Column, {
        stretched: true,
        width: 12
      }, /*#__PURE__*/_react["default"].createElement(EffectComp, {
        right: true,
        big: true,
        spy: this.state.segmentText
      }, this.state.segmentText))));
    }
  }]);
}(_contextComponent.ContextComponent); // MenuTabularOnLeft.propTypes = {
//   tabs: PropTypes.arrayOf(PropTypes.element)
// };
// $FlowFixMe
// MenuTabularOnLeft.defaultProps = { tabs: [] };