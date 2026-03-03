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
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _modal = _interopRequireDefault(require("../../../../../../components/modal"));
var _modalContent = require("../../../modalMySpace/modalContent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Contenu de la modale de suppression d'un dossier de favori
 */
var ModalDeleteFolder = /*#__PURE__*/function (_React$Component) {
  function ModalDeleteFolder(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ModalDeleteFolder);
    _this = _callSuper(this, ModalDeleteFolder, [props]);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.trashObject = {
      folderId: _this.props.folder.id
    };
    return _this;
  }
  (0, _inherits2["default"])(ModalDeleteFolder, _React$Component);
  return (0, _createClass2["default"])(ModalDeleteFolder, [{
    key: "handleSubmit",
    value:
    /**
     * Envoi du formulaire
     * @param {*} event
     */
    function handleSubmit(event) {
      event.preventDefault();
      this.props.handles.trash(this.props.folder); // lance onFolderDelete du bookmarkContainer (redux)
      this.handleClose(event);
    }

    /**
     * Fermeture de la modale
     * @param {*} event
     */
  }, {
    key: "handleClose",
    value: function handleClose() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (event) {
        event.preventDefault();
      }
      this.props.handleCloseTrashModal();
    }
  }, {
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement(_modal["default"], {
        open: this.props.open
      }, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTrashDivContent, null, /*#__PURE__*/_react["default"].createElement(_modalContent.HeaderModal, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_bookmark_popinsTrashFolderTitle"
      }), /*#__PURE__*/_react["default"].createElement(_modalContent.CloseGray, {
        onClick: this.handleClose
      })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalTextContent, null, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_modalContent.PTrashText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_bookmark_popinsTrashFolderMsg"
      })), /*#__PURE__*/_react["default"].createElement(_modalContent.ModalActions, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        type: "submit",
        themeColor: "dark"
      }, intl.formatMessage({
        id: "fo_myspace_bookmark_popinsTrashFolderLabelOk"
      })), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        outlined: true,
        onClick: this.handleClose,
        themeColor: "dark"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_myspace_bookmark_popinsTrashFolderLabelCancel"
      }))))))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ModalDeleteFolder);
/* eslint react/forbid-prop-types: 0 */
ModalDeleteFolder.propTypes = {
  /**
   *  CallBack pour fermer la popup up
   */
  handleCloseTrashModal: _propTypes["default"].func.isRequired,
  /**
   *  object contenant les fonctions d'edition des favoris
   */
  handles: _propTypes["default"].object.isRequired,
  /**
   * current folder
   */
  folder: _propTypes["default"].object.isRequired,
  /**
   * Est ce la modale doit etre ouverte
   */
  open: _propTypes["default"].bool.isRequired
};