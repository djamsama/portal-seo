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
var _reactIntl = require("react-intl");
var _veDesignSystem = require("ve-design-system");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../../../components/formattedHTMLMessage"));
var _contextComponent = require("../../../../../components/contextComponent");
var _picture = _interopRequireDefault(require("../../../../../components/picture"));
var _mission = require("./styles/mission");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // $FlowFixMe
var Mission = /*#__PURE__*/function (_ContextComponent) {
  function Mission() {
    (0, _classCallCheck2["default"])(this, Mission);
    return _callSuper(this, Mission, arguments);
  }
  (0, _inherits2["default"])(Mission, _ContextComponent);
  return (0, _createClass2["default"])(Mission, [{
    key: "render",
    value: function render() {
      var LinksHowToSource = this.context.initData.LinksHowToSource;
      return /*#__PURE__*/_react["default"].createElement(_mission.ExhibitMissionSection, null, /*#__PURE__*/_react["default"].createElement(_mission.ExhibitMissionWrapper, null, /*#__PURE__*/_react["default"].createElement(_mission.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_fa_block_ourMission_title"
      })), /*#__PURE__*/_react["default"].createElement(_mission.SubTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_fa_block_ourMission_subtitle"
      })), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
        id: "fo_fa_block_ourMission_text"
      }), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        as: "a",
        href: LinksHowToSource,
        "data-cy": "LinksHowToSource"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_fa_block_ourMission_button",
        values: {
          "0": this.context.config.portal.siteLabel
        }
      }))), /*#__PURE__*/_react["default"].createElement(_picture["default"], {
        sources: [{
          srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/exhibit/fa-team-bkg.webp")
        }, {
          srcset: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/exhibit/fa-team-bkg.jpg")
        }],
        src: "".concat("https://img.virtual-expo.com", "/media/ps/images/common/exhibit/fa-team-bkg.jpg"),
        lazy: true
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = Mission;