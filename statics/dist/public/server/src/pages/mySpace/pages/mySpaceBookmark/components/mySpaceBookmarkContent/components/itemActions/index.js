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
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _mySpace = require("../../../../../../styles/mySpace");
var _popup = _interopRequireDefault(require("../../../../../../../../components/popup"));
var _modal = _interopRequireDefault(require("../../../../../../../../components/modal"));
var _popupMoveContent = _interopRequireDefault(require("./components/popupMoveContent"));
var _modalTrashContent = _interopRequireDefault(require("./components/modalTrashContent"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/destructuring-assignment */
var MOVE_POPUP = {
  current: "movePopup",
  other: "trashModal"
};
var TRASH_MODAL = {
  current: "trashModal",
  other: "movePopup"
};

/* eslint react/forbid-prop-types: 0 */
/**
 *  Les boutons actions des favoris (classer supprimer)
 */
var ItemActions = /*#__PURE__*/function (_React$Component) {
  function ItemActions(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, ItemActions);
    _this = _callSuper(this, ItemActions, [props, state]);
    _this.toggleModalOrPopup = _this.toggleModalOrPopup.bind(_this);
    _this.closeMovePopup = _this.closeMovePopup.bind(_this);
    _this.closeTrashModal = _this.closeTrashModal.bind(_this);
    _this.dynamicPropsOpenMovePopup = false;
    _this.state = {
      movePopup: false,
      trashModal: false
    };
    return _this;
  }

  /**
   * Fermture de la popup "deplacer/classer un favori"
   */
  (0, _inherits2["default"])(ItemActions, _React$Component);
  return (0, _createClass2["default"])(ItemActions, [{
    key: "closeMovePopup",
    value: function closeMovePopup() {
      this.setState({
        movePopup: false
      });
      this.dynamicPropsOpenMovePopup = true;
      this.props.openedActions(false);
    }

    /**
     * Fermture de la modale "supprimer un favori"
     */
  }, {
    key: "closeTrashModal",
    value: function closeTrashModal() {
      this.setState({
        trashModal: false
      });
      this.props.openedActions(false);
    }

    /**
     * toogle des modale/popup
     */
  }, {
    key: "toggleModalOrPopup",
    value: function toggleModalOrPopup(who) {
      var obj = {};
      var open = !this.state[who.current];
      obj[who.current] = open;
      this.setState(obj);
      // eslint-disable-next-line no-bitwise
      this.props.openedActions(open | this.state[who.other]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        item = _this$props.item,
        folder = _this$props.folder,
        intl = _this$props.intl;
      var dynamicPropsOpen = this.dynamicPropsOpenMovePopup ? {
        open: false
      } : {};
      return /*#__PURE__*/_react["default"].createElement(_mySpace.ActionDivMyspace, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_popup["default"], (0, _extends2["default"])({
        position: "bottom center"
      }, dynamicPropsOpen, {
        trigger: /*#__PURE__*/_react["default"].createElement(_mySpace.ActionDivIconFolderWhite, {
          alt: intl.formatMessage({
            id: "foj_myspace_bookmark_action_move"
          }),
          title: intl.formatMessage({
            id: "foj_myspace_bookmark_action_move"
          }),
          onClick: function onClick() {
            _this2.dynamicPropsOpenMovePopup = false;
            _this2.toggleModalOrPopup(MOVE_POPUP);
          },
          className: this.props.eventClassName
        }),
        contentstyle: {
          width: "auto",
          padding: "18px",
          background: "rgb(255, 255, 255)",
          border: "1px solid rgb(187, 187, 187)"
        },
        id: item.id,
        name: item.productDTO ? item.productDTO.shortName : ""
      }), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_popupMoveContent["default"], {
        item: item,
        folder: folder,
        onBookmarkMoveFormSubmit: this.props.onBookmarkMoveFormSubmit,
        closeMovePopup: this.closeMovePopup,
        openedActions: this.props.openedActions
      }))), /*#__PURE__*/_react["default"].createElement(_mySpace.ActionDivIconTrashWhiteMarginRight, {
        alt: intl.formatMessage({
          id: "foj_myspace_bookmark_action_delete"
        }),
        title: intl.formatMessage({
          id: "foj_myspace_bookmark_action_delete"
        }),
        onClick: function onClick() {
          return _this2.toggleModalOrPopup(TRASH_MODAL);
        },
        className: this.props.eventClassName
      }), /*#__PURE__*/_react["default"].createElement(_modal["default"], {
        open: this.state.trashModal
      }, /*#__PURE__*/_react["default"].createElement(_modalTrashContent["default"], {
        item: item,
        folder: folder,
        onBookmarkTrashFormSubmit: this.props.onBookmarkTrashFormSubmit,
        closeTrashModal: this.closeTrashModal,
        openedActions: this.props.openedActions
      }))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(ItemActions);
ItemActions.propTypes = {
  /**
   *  Redux deplacement d'un favori vers un autre dossier
   *
   */
  onBookmarkMoveFormSubmit: _propTypes["default"].func.isRequired,
  /**
   *  Redux suppression d'un favori
   *
   */
  onBookmarkTrashFormSubmit: _propTypes["default"].func.isRequired,
  /**
   *  Fonction callback pour ne pas supprimer les boutons d'actions
   *   sur le mouseOut alors que des popins sont ouvertes
   */
  openedActions: _propTypes["default"].func.isRequired,
  /**
   *  Classe a ajouter sur les boutons pour gerer le mouseOut les boutons d'actions
   */

  eventClassName: _propTypes["default"].string
};

// $FlowFixMe
ItemActions.defaultProps = {
  eventClassName: ""
};