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
var _contextComponent = require("../../../../../../../../../../components/contextComponent");
var _modalContent = require("../../../../../../../../components/modalMySpace/modalContent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/* eslint react/forbid-prop-types: 0 */
/**
 * Contenu de la modale classer/ déplacer un favori
 */
var MySpacePopupMoveContent = /*#__PURE__*/function (_ContextComponent) {
  function MySpacePopupMoveContent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpacePopupMoveContent);
    _this = _callSuper(this, MySpacePopupMoveContent, [props, context]);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.moveObject = {
      bookmarkId: _this.props.item.id,
      srcFolderId: _this.props.folder.id,
      folderIds: [],
      newFolder: false,
      label: ""
    };
    return _this;
  }

  /**
   * Changement d'état d'un input
   * @param {*} event
   */
  (0, _inherits2["default"])(MySpacePopupMoveContent, _ContextComponent);
  return (0, _createClass2["default"])(MySpacePopupMoveContent, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var folderIds = this.moveObject.folderIds;
      // $FlowFixMe
      if (target.type === "checkbox") {
        // $FlowFixMe
        if (target.checked) {
          // $FlowFixMe
          folderIds.push(target.value);
        } else {
          folderIds.splice(folderIds.indexOf(target.value), 1);
        }
        this.moveObject.folderIds = folderIds;
      } else {
        // $FlowFixMe
        this.moveObject.newFolder = target.value !== "";
        this.moveObject.label = target.value;
      }
    }

    /**
     * envoie du form
     * @param {*} event
     */
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      if (this.moveObject.newFolder || this.moveObject.folderIds.length > 0) {
        this.props.onBookmarkMoveFormSubmit(this.moveObject); // Redux
        this.props.closeMovePopup();
        this.props.openedActions(false);
      }
    }

    /**
     * Construction des lignes de dossier vers qui déplacer les bookmarks
     * @param {*} folder
     */
  }, {
    key: "renderLi",
    value: function renderLi(folder) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: "folderToMove".concat(folder.id)
      }, /*#__PURE__*/_react["default"].createElement(_modalContent.InputCheckboxElement, {
        className: "type-checkbox",
        type: "checkbox",
        value: folder.id,
        onChange: this.handleInputChange
      }), folder.label);
    }
  }, {
    key: "render",
    value: function render() {
      var _folders$filter,
        _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        currentFolder = _this$props.folder,
        currentItem = _this$props.item;
      var folders = this.context.initData.folders;
      return /*#__PURE__*/_react["default"].createElement(_modalContent.ModalDivFolder, {
        className: "moveFolderTitle "
      }, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/_react["default"].createElement(_modalContent.ModalDivContent, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_modalContent.PSmall, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_bookmark_action_move_long"
      }), " :"), /*#__PURE__*/_react["default"].createElement("ul", null, folders === null || folders === void 0 || (_folders$filter = folders.filter(function (folder) {
        var _folder$bookmarks;
        return (folder === null || folder === void 0 || (_folder$bookmarks = folder.bookmarks) === null || _folder$bookmarks === void 0 ? void 0 : _folder$bookmarks.filter(function (item) {
          return item.id == currentItem.id;
        }).length) === 0 &&
        // les dossiers ne contenant pas le bookmark qu'on veut déplacer.
        currentFolder.id != folder.id &&
        // On enleve le dossier courant.
        !folder.defaultFolder;
      } // On enleve le dossier "favori a classer".
      )) === null || _folders$filter === void 0 ? void 0 : _folders$filter.map(function (filteredFolder) {
        return (
          // On boucle sur le tableau de resultat en creant les li
          _this2.renderLi(filteredFolder)
        );
      }), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement(_modalContent.InputTextElement, {
        type: "text",
        placeholder: intl.formatMessage({
          id: "foj_myspace_bookmark_new_folder"
        }),
        onChange: this.handleInputChange
      }))), /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
        contained: true,
        size: "small",
        type: "submit",
        themeColor: "dark"
      }, intl.formatMessage({
        id: currentFolder.defaultFolder ? "foj_myspace_bookmark_action_move" : "fo_myspace_notice_classifyBookmarkButton"
      }))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpacePopupMoveContent);
MySpacePopupMoveContent.propTypes = {
  /**
   *  folder d'origine du bookmark à déplacer
   *
   */
  folder: _propTypes["default"].object.isRequired,
  /**
   *   item à déplcaer
   */
  item: _propTypes["default"].object.isRequired,
  /**
   *  redux deplacement d'un favori
   */
  onBookmarkMoveFormSubmit: _propTypes["default"].func,
  /**
   *  Fermeture de la popup
   */
  closeMovePopup: _propTypes["default"].func
};