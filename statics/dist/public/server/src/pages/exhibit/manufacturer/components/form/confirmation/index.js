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
var _semanticUiReact = require("semantic-ui-react");
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _confirmation = require("./styles/confirmation");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
// $FlowFixMe
var Confirmation = /*#__PURE__*/function (_ContextComponent) {
  function Confirmation(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, Confirmation);
    _this = _callSuper(this, Confirmation, [props, state]);
    _this.state = {
      openState: true
    };
    _this.handleClose = _this.handleClose.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Confirmation, _ContextComponent);
  return (0, _createClass2["default"])(Confirmation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        openState: true
      });
    }

    /**
     * Fermeture de la modale
     * @param {*} event
     */
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        openState: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var open = this.props.open;
      var openState = this.state.openState;
      var _this$context$initDat = this.context.initData,
        siteName = _this$context$initDat.siteName,
        globalLinksHome = _this$context$initDat.globalLinksHome;
      return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.TransitionablePortal, {
        open: open,
        transition: {
          animation: "fade down",
          duration: 500
        }
      }, /*#__PURE__*/_react["default"].createElement(_confirmation.StyledModal, {
        open: open && openState,
        onClose: this.handleClose,
        closeIcon: true,
        closeOnDimmerClick: false,
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement(_confirmation.ModalContent, null, /*#__PURE__*/_react["default"].createElement(_confirmation.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_popup_text",
        values: {
          "0": siteName
        }
      })), /*#__PURE__*/_react["default"].createElement(_confirmation.ButtonWrapper, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        as: "a",
        href: globalLinksHome,
        size: "medium"
      }, /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_popup_button"
      })))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Confirmation;