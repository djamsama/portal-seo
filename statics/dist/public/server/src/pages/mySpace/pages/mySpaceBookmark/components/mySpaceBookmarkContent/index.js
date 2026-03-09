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
var _Fade = _interopRequireDefault(require("react-reveal/Fade"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _veDesignSystem = require("ve-design-system");
var _reactIntl = require("react-intl");
var _reactTransitionGroup = require("react-transition-group");
var _collapseVe = _interopRequireDefault(require("../../../../../../components/collapse/collapseVe"));
var _boxItemHeader = _interopRequireDefault(require("../../../../components/boxItemHeader"));
var _itemMySpace = _interopRequireDefault(require("../../../../components/itemMySpace"));
var _itemActions = _interopRequireDefault(require("./components/itemActions"));
var _contextComponent = require("../../../../../../components/contextComponent");
var _globalHelper = require("../../../../../../helpers/globalHelper");
var _mySpace = require("../../../../styles/mySpace");
var _mySpaceBookmarkContent = require("./styles/mySpaceBookmarkContent");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Affichage des favoris
 *
 *
 */
var MySpaceBookmarkContent = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceBookmarkContent(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceBookmarkContent);
    _this = _callSuper(this, MySpaceBookmarkContent, [props, context]);
    _this.baseUrl = context.config.portal.baseUrl;
    _this.locale = context.config.portal.locale;
    _this.toggle = _this.toggle.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.childrenEditionFolderFunctions = _this.childrenEditionFolderFunctions.bind(_this);
    _this.populateVisible = _this.populateVisible.bind(_this);
    _this.showActions = _this.showActions.bind(_this);
    _this.hideActions = _this.hideActions.bind(_this);
    _this.openedActions = _this.openedActions.bind(_this);
    _this.folders = null;
    _this._springConfig = {
      stiffness: 180,
      damping: 35
    };
    _this.state = {
      isActionOpened: false,
      showActions: false,
      visibles: _this.context.initData && _this.context.initData.folders && _this.context.initData.folders.length > 0 ? _this.populateVisible(_this.context.initData.folders) : []
    };
    return _this;
  }

  /**
   *  Initialisation des folders ouverts ou fermes
   *
   * @param {Array<Folder>} folders les dossiers contenant les favoris
   */
  (0, _inherits2["default"])(MySpaceBookmarkContent, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceBookmarkContent, [{
    key: "populateVisible",
    value: function populateVisible(folders) {
      // A l'initialisation seul le dossier "Mes Favoris à classer" est ouvert ...
      var visibles = folders.filter(function (folder) {
        return folder.bookmarks && folder.bookmarks.length > 0;
      }).map(function (folder) {
        return folder.defaultFolder;
      }); // ... quand folder.defaultFolder est true s'il contient des boorkmark
      return visibles;
    }

    /**
     *  Ouverture, fermuture des dossiers
     *
     * @param {number} indice
     */
  }, {
    key: "toggle",
    value: function toggle(indice) {
      var visibles = this.state.visibles;
      if (visibles[indice] === undefined) {
        visibles.push(false);
      }
      visibles[indice] = !visibles[indice];
      this.setState({
        visibles: visibles
      });
    }

    /**
     * Sauvegarde d'un bookmark
     *
     * @param {number} id
     * @param {number} label
     */
  }, {
    key: "save",
    value: function save(id, label) {
      this.props.onBookmarkUpdate(this.locale, this.baseUrl, id, label);
    }

    /**
     *  Fonctions d'edition d'un dossier
     *
     */
  }, {
    key: "childrenEditionFolderFunctions",
    value: function childrenEditionFolderFunctions() {
      var _this2 = this;
      return {
        // ouvrir / fermer
        toggleOpenFolder: function toggleOpenFolder(indice) {
          _this2.toggle(indice);
        },
        // suppression
        trash: function trash() {
          var _this2$props;
          for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }
          return (_this2$props = _this2.props).onFolderDelete.apply(_this2$props, [_this2.locale, _this2.baseUrl].concat(rest));
        },
        // Renommage
        inputEditChange: function inputEditChange($element) {
          _this2.save(Number($element.currentTarget.id), $element.currentTarget.value);
        }
      };
    }

    /**
     * Affichage des boutons actions sur les favoris (deplacer, supprimer)
     */
  }, {
    key: "showActions",
    value: function showActions() {
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      if (!isMobile) {
        this.setState({
          showActions: true
        });
      }
    }

    /**
     * Suppression des boutons actions sur les favoris (deplacer, supprimer)
     * @param {CustomMouseEvent} event
     */
  }, {
    key: "hideActions",
    value: function hideActions(event) {
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      if (isMobile ||
      // c'est un mobile on ne cache pas les boutons
      this.state.isActionOpened ||
      // une action est en cours on ne cache pas les boutons
      event.relatedTarget && event.relatedTarget.className && event.relatedTarget.className.indexOf("divItemActions") >= 0) {
        return;
      }
      this.setState({
        showActions: false
      });
    }

    /**
     *  Pour ne pas supprimer les boutons d'actions
     *  sur le mouseOut alors que des popins sont ouvertes
     *
     * @param {boolean} open
     */
  }, {
    key: "openedActions",
    value: function openedActions(open) {
      if (open !== this.state.isActionOpened) {
        this.setState({
          isActionOpened: open
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // On récupère les données des dossiers
      if (!this.folders) {
        this.folders = this.props.onLoadFolder(this.context);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      this.folders = this.props.bookmark.folders; // On recupère les folders qu'on a rempli via reduxs
      this.products = this.props.bookmark.products;
      var intl = this.props.intl;
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      if (this.folders === undefined) {
        return /*#__PURE__*/_react["default"].createElement("div", null);
      }
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.TransitionGroup, null, this.folders.map(function (folder, index) {
        var bookmarks = folder.bookmarks !== undefined ? folder.bookmarks : [];
        var indexParent = index;
        var currentFolder = folder;
        return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
          key: "css".concat(folder.id),
          unmountOnExit: true
        }, /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItem, {
          key: "bookmarkedFolder".concat(folder.id)
        }, /*#__PURE__*/_react["default"].createElement(_boxItemHeader["default"], {
          titleId: "foj_myspace_bookmark_to_sort",
          label: folder.label && folder.label !== "" ? folder.label : null,
          itemNumber: bookmarks.length,
          indice: indexParent,
          toggle: _this3.toggle,
          actions: {
            edit: !folder.defaultFolder,
            trash: !folder.defaultFolder,
            open: _this3.state.visibles[indexParent]
          },
          visible: _this3.state.visibles[indexParent],
          handles: _this3.childrenEditionFolderFunctions(),
          puceType: folder.defaultFolder ? "start" : "folder",
          folder: folder
        }), /*#__PURE__*/_react["default"].createElement(_collapseVe["default"], {
          isOpened: _this3.state.visibles[indexParent] !== undefined ? _this3.state.visibles[indexParent] : false,
          springConfig: _this3._springConfig,
          style: {
            width: "auto"
          }
        }, /*#__PURE__*/_react["default"].createElement(_mySpace.BoxItemContent, null, /*#__PURE__*/_react["default"].createElement(_mySpaceBookmarkContent.TransitionGroupWrapper, {
          className: "transition-group-flex"
        }, bookmarks.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_Fade["default"], {
            key: "bookmarkedFolderItem".concat(currentFolder.id).concat(item.id),
            right: true,
            opposite: true,
            unmountOnExit: true
          }, /*#__PURE__*/_react["default"].createElement(_mySpace.EventsDiv, {
            onMouseOut: function onMouseOut(e) {
              return _this3.hideActions(e);
            },
            onBlur: function onBlur(e) {
              return _this3.hideActions(e);
            },
            onMouseOver: _this3.showActions,
            onFocus: _this3.showActions,
            className: "fade-card"
          }, /*#__PURE__*/_react["default"].createElement(_itemMySpace["default"], {
            item: item,
            folder: currentFolder,
            showComments: true,
            products: _this3.products
          }, (_this3.state.showActions || isMobile) && /*#__PURE__*/_react["default"].createElement(_itemActions["default"], {
            eventClassName: "divItemActions",
            id: "divItemActions".concat(currentFolder.id).concat(item.id),
            key: "divItemActions".concat(currentFolder.id).concat(item.id),
            folder: currentFolder,
            item: item,
            onBookmarkMoveFormSubmit: function onBookmarkMoveFormSubmit() {
              var _this3$props;
              for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
              }
              return (_this3$props = _this3.props).onBookmarkMoveFormSubmit.apply(_this3$props, [_this3.locale, _this3.baseUrl].concat(rest));
            },
            onBookmarkTrashFormSubmit: function onBookmarkTrashFormSubmit() {
              var _this3$props2;
              for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
              }
              return (_this3$props2 = _this3.props).onBookmarkTrashFormSubmit.apply(_this3$props2, [_this3.locale, _this3.baseUrl].concat(rest));
            },
            openedActions: _this3.openedActions
          })), _this3.products && undefined === _this3.products.find(function (product) {
            return product.id === item.entityId.toString();
          }) && item.entityType === "PRODUCT" && /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
            contained: true,
            outlined: true,
            size: "small",
            type: "submit",
            themeColor: "dark",
            endIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
              name: "columns"
            }),
            onClick: function onClick() {
              return _this3.props.onAddProductToGrabber(item.entityId.toString(), item.productDTO.imageUrl, item.productDTO.name, intl);
            }
          }, intl.formatMessage({
            id: "foj_comparator_product_add"
          })), _this3.products && undefined !== _this3.products.find(function (product) {
            return product.id === item.entityId.toString();
          }) && item.entityType === "PRODUCT" && /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
            contained: true,
            type: "submit",
            size: "small",
            themeColor: "dark",
            endIcon: /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
              name: "columns"
            }),
            onClick: function onClick() {
              return _this3.props.onRemoveProductToGrabber(item.entityId.toString());
            }
          }, intl.formatMessage({
            id: "foj_comparator_product_remove"
          }))));
        })))), _this3.folders && _this3.folders.length === 1 && bookmarks.length === 0 && /*#__PURE__*/_react["default"].createElement(_mySpaceBookmarkContent.EmptyItemText, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_myspace_bookmark_no_items"
        }))));
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceBookmarkContent);
/* eslint react/forbid-prop-types: 0 */
MySpaceBookmarkContent.propTypes = {
  /**
   *   redux suppression de dossier
   */
  onFolderDelete: _propTypes["default"].func,
  /**
   *  redux maj d'un bookmark
   */
  onBookmarkUpdate: _propTypes["default"].func,
  /**
   *  Favoris from redux
   */
  bookmark: _propTypes["default"].object,
  /**
   *  redux maj recuperation des data
   */
  onLoadFolder: _propTypes["default"].func,
  /**
   *  redux ajout produit au grabber
   */
  onAddProductToGrabber: _propTypes["default"].func,
  /**
   *  redux suppression produit au grabber
   */
  onRemoveProductToGrabber: _propTypes["default"].func
};