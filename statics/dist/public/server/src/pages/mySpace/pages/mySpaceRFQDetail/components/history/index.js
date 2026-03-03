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
var _menuTabLeft = _interopRequireDefault(require("../../../../../../components/menu/components/menuTabLeft"));
var _messageReadContainer = _interopRequireDefault(require("../../../../containers/messageReadContainer"));
var _conversation = _interopRequireDefault(require("../../../../../../components/messages/conversation"));
var _globalHelper = require("../../../../../../helpers/globalHelper");
var _constants = require("../../../../../../commons/constants");
var _legend = _interopRequireDefault(require("../legend"));
var _mySpaceRFQDetailHistory = require("./styles/mySpaceRFQDetailHistory");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // = pages/mySpace/pages/mySpaceRFQDetail/components/history/components/myspaceTab
var customStyle = {
  width: "500px"
};
/**
 * Composant gérant l'affichage du tableau des conversation
 */
var History = /*#__PURE__*/function (_React$Component) {
  function History(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, History);
    _this = _callSuper(this, History, [props]);
    _this.getRfq = _this.getRfq.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(History, _React$Component);
  return (0, _createClass2["default"])(History, [{
    key: "getRfq",
    value: function getRfq() {
      var _this2 = this;
      var rendersRfq = [];
      var supplierHistory = this.props.rfq.supplierHistory;
      var labelStatus = {
        NO_MESSAGE: "",
        NEW_MESSAGE: /*#__PURE__*/_react["default"].createElement(_mySpaceRFQDetailHistory.Success, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_rfqDetail_tab_history_StatusMessage"
        })),
        NEW_QUOTE: /*#__PURE__*/_react["default"].createElement(_mySpaceRFQDetailHistory.Success, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_rfqDetail_tab_history_statusQuote"
        })),
        CLOSED: /*#__PURE__*/_react["default"].createElement(_mySpaceRFQDetailHistory.LeftOver, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_rfqDetail_tab_history_statusClosed"
        }))
      };
      supplierHistory.map(function (current) {
        current.message = {
          // Pour pouvoir appeler le service qui marque mes messages lus
          rfqId: _this2.props.rfq.rfqId,
          rfqContractorId: current.rfqContractorId
        };
        rendersRfq.push({
          id: _this2.props.rfq.rfqId,
          name: current.companyName,
          comp: _messageReadContainer["default"],
          // l'onglet sera un composant Tab
          tag: current.dealer ? "market" : "factory",
          // Pour l'affichage de l'icone de l'onglet
          selected: current.selected,
          // Pour quand on vient des mails: selectionne la conversation voulu
          item: {
            // Pour l'affichage du onglets
            name: current.companyName,
            logo: current.logoUrl,
            statut: {
              labelStatut: labelStatus[current.status]
            },
            // Status de la rfq
            newStatut: {
              statut: labelStatus.NEW_MESSAGE
            },
            // Pour faire le tester pour l'affichage du statu 'NEW_MESSAGE'
            disable: current.status == _constants.RFQ_STATUS.CLOSED,
            rfqContractorId: current.rfqContractorId,
            rating: current.notation
          },
          // Affichage du contenu associé à l'onglet
          description: /*#__PURE__*/_react["default"].createElement(_conversation["default"], {
            key: _globalHelper.GlobalHelper.generateKey("rfq"),
            conversation: current,
            disable: current.status == _constants.RFQ_STATUS.CLOSED,
            customStyle: customStyle,
            visitorLanguage: _this2.props.rfq.visitorLanguage,
            leadContext: "rfq"
          })
        });
      });
      return rendersRfq;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_menuTabLeft["default"], {
        effect: "Roll",
        tabs: this.getRfq(),
        legend: /*#__PURE__*/_react["default"].createElement(_legend["default"], null)
      });
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = History;