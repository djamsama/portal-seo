"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _tab = _interopRequireDefault(require("../../../../../../../../components/menu/components/tab"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/require-default-props */
/**
 * Composant gérant les tabs du menu des conversations rfq.
 */
var MySpaceTab = /*#__PURE__*/function (_React$Component) {
  function MySpaceTab(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceTab);
    _this = _callSuper(this, MySpaceTab, [props, state]);
    _this.handleRemoveUnreadMessage = _this.handleRemoveUnreadMessage.bind(_this);
    _this.isRemoveStatus = _this.isRemoveStatus.bind(_this);
    _this.state = {
      removeStatut: false
    };
    return _this;
  }
  (0, _inherits2["default"])(MySpaceTab, _React$Component);
  return (0, _createClass2["default"])(MySpaceTab, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.removeStatut && this.props.active && this.props.item && this.props.item.statut && this.props.item.newStatut && this.props.item.statut.labelStatut == this.props.item.newStatut.statut) {
        var that = this;
        setTimeout(function () {
          that.props.onMarkAsReadMessages(that.props.item.rfqContractorId);
        }, 5000);
      }
    }
  }, {
    key: "handleRemoveUnreadMessage",
    value: function handleRemoveUnreadMessage() {
      if (this.props.item && this.props.item.statut && this.props.item.newStatut && this.props.item.statut.labelStatut == this.props.item.newStatut.statut) {
        this.props.onMarkAsReadMessages(this.props.item.rfqContractorId);
      }
    }
  }, {
    key: "isRemoveStatus",
    value: function isRemoveStatus() {
      if (this.state.removeStatut) {
        return true;
      }
      if (this.props.item && this.props.item.rfqContractorId && this.props.messageRedux && this.props.messageRedux.isSuccess && this.props.messageRedux.rfqContractorId === this.props.item.rfqContractorId && this.props.item.statut.labelStatut == this.props.item.newStatut.statut) {
        this.setState({
          removeStatut: true
        });
        return true;
      }
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: this.handleRemoveUnreadMessage
      }, /*#__PURE__*/_react["default"].createElement(_tab["default"], (0, _extends2["default"])({}, this.props, {
        doNotShowStatus: this.isRemoveStatus()
      }), this.props.children));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = MySpaceTab;