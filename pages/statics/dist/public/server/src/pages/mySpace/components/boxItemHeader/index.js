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
var _loading = _interopRequireDefault(require("../../../../components/loading"));
var _modalDeleteFolder = _interopRequireDefault(require("./components/modalDeleteFolder"));
var _boxItemHeader = require("./styles/boxItemHeader");
var _mySpace = require("../../styles/mySpace");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/sort-comp */
/* eslint react/require-default-props: 0 */
var BoxItemHeader = /*#__PURE__*/function (_React$Component) {
  function BoxItemHeader(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, BoxItemHeader);
    _this = _callSuper(this, BoxItemHeader, [props, state]);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleCloseTrashModal = _this.handleCloseTrashModal.bind(_this);
    _this.label = props.label;
    _this.openModalTrashFolder = false;
    _this.components = {
      list: _boxItemHeader.PuceIconList,
      admin: _boxItemHeader.PuceIconAdminBig,
      folder: _boxItemHeader.PuceIconFolder,
      start: _boxItemHeader.PuceIconStart,
      none: _boxItemHeader.NoPuceIcon
    };
    _this.state = {
      edition: false,
      openDeleteFolder: false
    };
    return _this;
  }
  (0, _inherits2["default"])(BoxItemHeader, _React$Component);
  return (0, _createClass2["default"])(BoxItemHeader, [{
    key: "handleEdit",
    value:
    /**
     * Edition du titre d'un dossier
     *
     */
    function handleEdit() {
      var actions = this.props.actions;
      var edition = this.state.edition;
      if (actions.edit) {
        this.setState({
          edition: !edition
        });
      }
    }

    /**
     * Recuperation de l'evenement clavier pour fermer l'edition apres le click de 'enter'
     *
     */
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      var actions = this.props.actions;
      var edition = this.state.edition;
      if (actions.edit && e.key === "Enter") {
        this.setState({
          edition: !edition
        });
      }
    }

    /**
     * Sauvegarde du titre d'un dossier a chaque changement
     *
     * @param {*} $element
     */
  }, {
    key: "handleChange",
    value: function handleChange($element) {
      var handles = this.props.handles;
      this.label = $element.currentTarget.value;
      handles.inputEditChange($element);
    }

    /**
     *  Affichage de la modale pour la suppression des favoris
     */
  }, {
    key: "handleShowTrashModal",
    value: function handleShowTrashModal() {
      this.setState({
        openDeleteFolder: true
      });
    }

    /**
     *  Fermeture de la modale pour le partage des favoris
     */
  }, {
    key: "handleCloseTrashModal",
    value: function handleCloseTrashModal() {
      this.setState({
        openDeleteFolder: false
      });
    }

    /**
     * Gestion de l'evenement blur
     */
    // eslint-disable-next-line consistent-return
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var actions = this.props.actions;
      if (actions.edit) {
        this.setState({
          edition: false
        });
        // eslint-disable-next-line func-names
        return function () {
          return true;
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        edition = _this$state.edition,
        openDeleteFolder = _this$state.openDeleteFolder;
      var _this$props = this.props,
        itemNumber = _this$props.itemNumber,
        folder = _this$props.folder,
        intl = _this$props.intl,
        titleId = _this$props.titleId,
        titleLabel = _this$props.titleLabel,
        puceType = _this$props.puceType,
        actions = _this$props.actions,
        handles = _this$props.handles,
        indice = _this$props.indice,
        bookmarkItems = _this$props.bookmarkItems;
      this.folder = folder;
      var PuceTagName = this.components[puceType || "admin"];
      return /*#__PURE__*/_react["default"].createElement(_boxItemHeader.BoxHeader, null, /*#__PURE__*/_react["default"].createElement(PuceTagName, null), /*#__PURE__*/_react["default"].createElement("h2", null, (!actions && titleId || folder && folder.defaultFolder) && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: titleId
      }), titleLabel, edition === false && this.label && /*#__PURE__*/_react["default"].createElement("span", {
        onDoubleClick: function onDoubleClick() {
          return _this2.handleEdit();
        }
      }, this.label), edition && /*#__PURE__*/_react["default"].createElement(_boxItemHeader.InputEdit, {
        ref: function ref($input) {
          return _this2.textInput = $input;
        },
        id: folder.id,
        type: "text",
        defaultValue: this.label,
        onBlur: function onBlur() {
          return _this2.handleBlur();
        },
        onChange: function onChange($e) {
          return _this2.handleChange($e);
        },
        onKeyPress: this.handleKeyPress,
        maxLength: "128"
      })), actions && folder && folder.shared && /*#__PURE__*/_react["default"].createElement(_mySpace.SmallItalicSpan, null, "\xA0(", /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: bookmarkItems || "foj_myspace_bookmark_shared"
      }), ")"), actions && actions.trash && folder && /*#__PURE__*/_react["default"].createElement(_modalDeleteFolder["default"], {
        open: openDeleteFolder,
        folder: folder,
        handleCloseTrashModal: this.handleCloseTrashModal,
        handles: handles
      }), itemNumber != null && itemNumber !== -1 && /*#__PURE__*/_react["default"].createElement(_boxItemHeader.ItemNumber, null, itemNumber, " ", itemNumber > 1 ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_bookmark_items"
      }) : /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_myspace_bookmark_item_singular"
      })), itemNumber === -1 && /*#__PURE__*/_react["default"].createElement(_boxItemHeader.ItemNumber, null, /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: true,
        spinnerSize: 10
      })), actions && /*#__PURE__*/_react["default"].createElement(_mySpace.ActionUlMyspace, null, actions.edit && /*#__PURE__*/_react["default"].createElement(_mySpace.ActionLiEditMyspace, {
        onClick: function onClick() {
          return _this2.handleEdit();
        },
        title: intl.formatMessage({
          id: "foj_myspace_bookmark_action_rename"
        })
      }), actions.trash && /*#__PURE__*/_react["default"].createElement(_mySpace.ActionLiTrashMyspace, {
        onClick: function onClick() {
          return _this2.handleShowTrashModal();
        },
        title: intl.formatMessage({
          id: "foj_myspace_bookmark_action_delete"
        })
      }), actions.open && /*#__PURE__*/_react["default"].createElement(_mySpace.ActionLiOpenMyspace, {
        onClick: function onClick() {
          return handles.toggleOpenFolder(indice);
        },
        title: intl.formatMessage({
          id: "foj_myspace_common_open_close"
        })
      }), !actions.open && /*#__PURE__*/_react["default"].createElement(_mySpace.ActionLiCloseMyspace, {
        onClick: function onClick() {
          return handles.toggleOpenFolder(indice);
        }
      })));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(BoxItemHeader);
BoxItemHeader.propTypes = {
  // $FlowFixMe
  titleId: _propTypes["default"].string,
  // $FlowFixMe
  titleLabel: _propTypes["default"].string,
  itemNumber: _propTypes["default"].number,
  // $FlowFixMe
  bookmarkItems: _propTypes["default"].string,
  // $FlowFixMe
  label: _propTypes["default"].string,
  handles: _propTypes["default"].shape({
    toggleOpenFolder: _propTypes["default"].func,
    trash: _propTypes["default"].func,
    inputEditChange: _propTypes["default"].func
  }),
  actions: _propTypes["default"].shape({
    edit: _propTypes["default"].bool,
    trash: _propTypes["default"].bool,
    open: _propTypes["default"].bool
  }),
  indice: _propTypes["default"].number,
  edit: _propTypes["default"].bool
};