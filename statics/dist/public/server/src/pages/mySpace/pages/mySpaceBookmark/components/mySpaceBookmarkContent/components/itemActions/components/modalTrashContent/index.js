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
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _modalContent = require("../../../../../../../../components/modalMySpace/modalContent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/* eslint react/forbid-prop-types: 0 */
/**
 * Contenu de la modale "supprimer un favori"
 */
var MySpaceTrashContent = /*#__PURE__*/function (_React$Component) {
  function MySpaceTrashContent(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceTrashContent);
    _this = _callSuper(this, MySpaceTrashContent, [props]);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.trashObject = {
      bookmarkId: _this.props.item.id,
      folderId: _this.props.folder.id
    };
    return _this;
  }
  (0, _inherits2["default"])(MySpaceTrashContent, _React$Component);
  return (0, _createClass2["default"])(MySpaceTrashContent, [{
    key: "handleSubmit",
    value:
    /**
     * Envoi du formulaire
     * @param {*} event
     */
    function handleSubmit(event) {
      event.preventDefault();
      this.props.onBookmarkTrashFormSubmit(this.trashObject.folderId, this.trashObject.bookmarkId);
      this.handleClose();
    }

    /**
     * Fermeture de la modale
     * @param {*} event
     */
  }, {
    key: "handleClose",
    value: function handleClose(event) {
      if (event) {
        event.preventDefault();
      }
      this.props.closeTrashModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTrashDivContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.HeaderModal, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_bookmark_popinsTrashBookmarkTitle"
      }), /*#__PURE__*/_react["default"].createElement(_modalContent.CloseGray, {
        onClick: this.handleClose
      })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_modalContent.PTrashText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_bookmark_popinsTrashBookmarkMsg"
      })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalActions, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        type: "submit",
        themeColor: "dark"
      }, intl.formatMessage({
        id: "fo_myspace_bookmark_popinsTrashFolderLabelOk"
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        outlined: true,
        themeColor: "dark",
        onClick: function onClick(event) {
          return _this2.handleClose(event);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_bookmark_popinsTrashFolderLabelCancel"
      }))))))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceTrashContent);
MySpaceTrashContent.propTypes = {
  /**
   *  folder du bookmark à supprimer
   *
   */
  folder: _propTypes["default"].object.isRequired,
  /**
   *   item à supprimer
   */
  item: _propTypes["default"].object.isRequired,
  /**
   *  redux suppression d'un favori
   */
  onBookmarkTrashFormSubmit: _propTypes["default"].func.isRequired,
  /**
   *  Fermeture de la popup
   */
  closeTrashModal: _propTypes["default"].func.isRequired
};