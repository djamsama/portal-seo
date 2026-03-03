"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _supplierRating = _interopRequireDefault(require("../../../../../../components/supplierDetails/components/supplierRating"));
var _supplierReactivity = _interopRequireDefault(require("../../../../../../components/supplierDetails/components/supplierReactivity"));
var _globalHelper = require("../../../../../../helpers/globalHelper");
var _constants = require("../../../../../../commons/constants");
var _contextComponent = require("../../../../../../components/contextComponent");
var _productOverview = _interopRequireDefault(require("./components/productOverview"));
var _loading = _interopRequireDefault(require("../../../../../../components/loading"));
var _prices = require("../../../../../../components/prices");
var _withTracking = require("../../../../../../hoc/withTracking");
var _breadcrumbs = _interopRequireDefault(require("../../../../../../components/breadcrumbs"));
var _comparator = require("./styles/comparator");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable array-callback-return */ /* eslint-disable class-methods-use-this */
var Comparator = /*#__PURE__*/function (_ContextComponent) {
  function Comparator(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Comparator);
    _this = _callSuper(this, Comparator, [props]);
    _this.state = {
      products: [],
      dragOver: null,
      sortedComparatorData: null,
      fullDescripton: false
    };
    _this.getProductsSpecifications = _this.getProductsSpecifications.bind(_this);
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleOnDrop = _this.handleOnDrop.bind(_this);
    _this.handleDragEnter = _this.handleDragEnter.bind(_this);
    _this.goBackHome = _this.goBackHome.bind(_this);
    _this.deleteProduct = _this.deleteProduct.bind(_this);
    _this.emptyComparator = _this.emptyComparator.bind(_this);
    _this.renderBreadcrumb = _this.renderBreadcrumb.bind(_this);
    _this.handleOnDragEnd = _this.handleOnDragEnd.bind(_this);
    _this.seeMore = _this.seeMore.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Comparator, _ContextComponent);
  return (0, _createClass2["default"])(Comparator, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      /* tracking */
      var language = this.context && this.context.config && this.context.config.portal && this.context.config.portal.language ? this.context.config.portal.language.toLowerCase() : "fr";
      var getViewedPageId = this.props.getViewedPageId;
      var pageTypeId = this.context && this.context.initData && this.context.initData.pageTypeId ? this.context.initData.pageTypeId : 0;
      if (pageTypeId) {
        getViewedPageId({
          pageTypeId: pageTypeId,
          elementList: []
        }, language);
      }
      /* /tracking */

      var lsGrabber = localStorage.getItem(_constants.LOCAL_STORAGE_GRABBER);
      if (!lsGrabber) {
        this.setState({
          products: []
        });
        this.props.setLoaded();
      } else {
        this.setState({
          products: {
            productIds: JSON.parse(lsGrabber)
          }
        }, function () {
          return _this2.getProductsSpecifications();
        });
      }
    }
  }, {
    key: "getProductsSpecifications",
    value: function getProductsSpecifications() {
      var getComparatorData = this.props.getComparatorData;
      var products = this.state.products;
      if (products.productIds !== undefined) {
        getComparatorData({
          productIds: products.productIds.map(function (element) {
            return element.id;
          })
        }, this.context);
      }
    }

    /** Redirection de l'utilisateur vers la home page. */
  }, {
    key: "goBackHome",
    value: function goBackHome() {
      var globalLinksHome = this.context.initData.globalLinksHome;
      document.location.href = "".concat(globalLinksHome);
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e) {
      var id = e.target.id;
      e.dataTransfer.setData("colIdx", id);
      e.dataTransfer.effectAllowed = "move";
    }
  }, {
    key: "handleDragOver",
    value: function handleDragOver(e) {
      e.preventDefault();
    }
  }, {
    key: "handleDragEnter",
    value: function handleDragEnter(e) {
      var id = e.target.id;
      this.setState({
        dragOver: id
      });
    }
  }, {
    key: "handleOnDrop",
    value: function handleOnDrop(e) {
      var id = e.target.id;
      var comparatorData = this.props.comparatorData;
      var sortedComparatorData = this.state.sortedComparatorData;
      var data = null;
      if (sortedComparatorData !== null) {
        data = sortedComparatorData;
      } else {
        data = comparatorData;
      }
      var droppedColIdx = id;
      var draggedColIdx = e.dataTransfer.getData("colIdx");
      var tempCols = (0, _toConsumableArray2["default"])(data);
      tempCols[draggedColIdx - 1] = data[droppedColIdx - 1];
      tempCols[droppedColIdx - 1] = data[draggedColIdx - 1];
      this.setState({
        sortedComparatorData: tempCols
      });
      this.setState({
        dragOver: null
      });
    }
  }, {
    key: "handleOnDragEnd",
    value: function handleOnDragEnd() {
      this.setState({
        dragOver: null
      });
    }
  }, {
    key: "deleteProduct",
    value: function deleteProduct(e) {
      var id = e.target.id;
      var index = e.target.dataset.index;
      var comparatorData = this.props.comparatorData;
      var sortedComparatorData = this.state.sortedComparatorData;
      var data = null;
      // On recupere les données du comparateur.
      if (sortedComparatorData !== null) {
        data = sortedComparatorData;
      } else {
        data = comparatorData;
      }
      var tempState = [];
      tempState = data;
      tempState.splice(index - 1, 1);
      this.setState({
        sortedComparatorData: tempState
      });
      this.props.deleteOne(id);
    }

    /** Suppression de tous les produits du comparateur. */
  }, {
    key: "emptyComparator",
    value: function emptyComparator() {
      // localStorage.removeItem(LOCAL_STORAGE_GRABBER);
      localStorage.setItem(_constants.LOCAL_STORAGE_GRABBER, []);
      this.setState({
        sortedComparatorData: []
      });
    }

    /** Affichage (resp. masquage) de l'intégralité de la description. */
  }, {
    key: "seeMore",
    value: function seeMore() {
      var fullDescripton = this.state.fullDescripton;
      this.setState({
        fullDescripton: !fullDescripton
      });
    }

    /**
     * Rendu du fil d'ariane ainsi que du bouton "Vider le comparateur".
     * @param {*} withEmptyButton Le bouton permettant de vider le comparateur doit-il être présent?
     */
  }, {
    key: "renderBreadcrumb",
    value: function renderBreadcrumb(withEmptyButton) {
      var globalLinksHome = this.context.initData.globalLinksHome;
      var breadCrumbList = [{
        anchor: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "fo_breadCrumb_home"
        }),
        link: globalLinksHome
      }, {
        anchor: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_comparator_breadcrumb"
        }),
        link: null
      }];
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_comparator.ComparatorHeader, null, /*#__PURE__*/_react["default"].createElement(_breadcrumbs["default"], {
        breadcrumbs: breadCrumbList
      })), /*#__PURE__*/_react["default"].createElement(_comparator.ComparatorTitle, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_title"
      }), withEmptyButton && /*#__PURE__*/_react["default"].createElement(_comparator.EmptyComparator, {
        onClick: this.emptyComparator
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
        name: "close"
      }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_reset"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        comparatorData = _this$props.comparatorData,
        loaded = _this$props.loaded,
        intl = _this$props.intl;
      var _this$state = this.state,
        sortedComparatorData = _this$state.sortedComparatorData,
        dragOver = _this$state.dragOver,
        fullDescripton = _this$state.fullDescripton;
      var emptyMessage = intl.formatMessage({
        id: "foj_comparator_empty_message"
      }, {
        "0": this.context.initData.initialSearchElementCount
      });
      var seeMoreMessage = intl.formatMessage({
        id: "foj_comparator_see_more"
      });
      var seeLessMessage = intl.formatMessage({
        id: "foj_comparator_see_less"
      });
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : _globalHelper.GlobalHelper.isMobileDevice();
      var data = null;
      if (sortedComparatorData !== null) {
        data = sortedComparatorData;
      } else {
        data = comparatorData;
      }
      var rows = {};
      var specRows = {};
      if (data !== null && data.length !== 0) {
        rows.header = {};
        rows.products = {};
        rows.description = {};
        rows.supplierName = {};
        rows.supplierLocalisation = {};
        rows.supplierRanking = {};
        rows.satisfactionCount = {};
        rows.reactivityInterval = {};
        rows.price = {};
        rows.productId = {};
        rows.productStandUrl = {};

        // Init Spec
        Object.keys(data[0].comparatorCharacteristicLineDTOs).map(function (key) {
          specRows[key] = {
            "0": data[0].comparatorCharacteristicLineDTOs[key].title
          };
        });
        data.map(function (entity, index) {
          // Header
          rows.header[index + 1] = index + 1;

          // produits
          rows.products[index + 1] = entity.comparatorProductLineDTO;

          // Caractéristiques
          Object.keys(entity.comparatorCharacteristicLineDTOs).map(function (key) {
            if (entity.comparatorCharacteristicLineDTOs[key].value != null) {
              // Feature
              specRows[key][index + 1] = entity.comparatorCharacteristicLineDTOs[key].value;
            } else {
              // Spec
              specRows[key][index + 1] = "";
              specRows[key][index + 1] += Object.keys(entity.comparatorCharacteristicLineDTOs[key].values).slice(0).reverse().map(function (spec) {
                if (spec === "NOMINAL" || spec === "MIN") {
                  return "".concat(entity.comparatorCharacteristicLineDTOs[key].values[spec]);
                }
                return "<br>".concat(entity.comparatorCharacteristicLineDTOs[key].values[spec]);
              });
            }
          });
          rows.description[index + 1] = entity.description;
          rows.supplierName[index + 1] = entity.supplierName;
          rows.supplierLocalisation[index + 1] = entity.supplierLocalisation;
          rows.supplierRanking[index + 1] = entity.supplierRanking;
          rows.satisfactionCount[index + 1] = entity.satisfactionCount;
          rows.reactivityInterval[index + 1] = entity.reactivityInterval;
          rows.price[index + 1] = entity.price;
          rows.productId[index + 1] = entity.productId;
          rows.productStandUrl[index + 1] = entity.productStandUrl;
        });
        rows.specRows = specRows;
      }
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !loaded && /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        active: true,
        spinnerSize: 50
      }), !isMobile && loaded === true && data !== null && data.length !== 0 && /*#__PURE__*/_react["default"].createElement(_comparator.ComparatorWrapper, null, this.renderBreadcrumb(true), /*#__PURE__*/_react["default"].createElement(_comparator.Scroller, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table, {
        className: "comparator-table",
        fixed: true,
        celled: true,
        textAlign: "center"
      }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Header, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
        className: "comparator-head"
      }), Object.keys(rows.header).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.HeaderCell, {
          draggable: true,
          onDragStart: _this3.handleDragStart,
          onDragOver: _this3.handleDragOver,
          onDrop: _this3.handleOnDrop,
          onDragEnter: _this3.handleDragEnter,
          onDragEnd: _this3.handleOnDragEnd,
          key: entity,
          id: entity,
          className: "comparator-head"
        }, dragOver === null && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
          className: "left",
          draggable: false
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "chevron left",
          size: "large"
        }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "chevron right",
          size: "large"
        })), /*#__PURE__*/_react["default"].createElement("span", {
          className: "right",
          draggable: false
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          draggable: false,
          id: rows.productId[entity],
          "data-index": entity,
          onClick: _this3.deleteProduct,
          name: "close",
          size: "large"
        }))));
      }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Body, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_product"
      })), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Object.keys(rows.products).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          verticalAlign: "top",
          textAlign: "center",
          key: entity,
          className: entity === dragOver ? "drag" : ""
        }, /*#__PURE__*/_react["default"].createElement(_productOverview["default"], {
          productId: rows.productId[entity],
          brand: rows.products[entity].brand,
          imageUrl: rows.products[entity].imageUrl,
          companyLogoUrl: rows.products[entity].companyLogoUrl,
          label: rows.products[entity].label
        }));
      }))), Object.keys(rows.specRows).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, {
          key: entity
        }, Object.keys(rows.specRows[entity]).map(function (key) {
          return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
            key: key,
            className: key === dragOver ? "drag" : ""
          }, /*#__PURE__*/_react["default"].createElement("div", {
            key: key,
            dangerouslySetInnerHTML: {
              __html: rows.specRows[entity][key]
            }
          }));
        }));
      }), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_description"
      })), Object.keys(rows.description).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          verticalAlign: "top",
          key: entity,
          className: entity === dragOver ? "drag" : ""
        }, rows.description[entity] != null && rows.description[entity] !== "" && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_comparator.DescriptionCell, {
          className: fullDescripton ? "" : "collapsed",
          dangerouslySetInnerHTML: {
            __html: rows.description[entity]
          }
        }), /*#__PURE__*/_react["default"].createElement(_comparator.SeeMore, {
          onClick: function onClick() {
            return _this3.seeMore();
          }
        }, fullDescripton ? seeLessMessage : seeMoreMessage)));
      })), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_dealer"
      })), Object.keys(rows.supplierName).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          key: entity,
          className: entity === dragOver ? "drag" : ""
        }, rows.supplierName[entity], /*#__PURE__*/_react["default"].createElement("br", null), rows.supplierLocalisation[entity]);
      })), !Object.values(rows.supplierRanking).every(function (x) {
        return x === null;
      }) && /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_notation"
      })), Object.keys(rows.supplierRanking).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          className: entity === dragOver ? "drag ranking" : "ranking",
          key: entity
        }, rows.supplierRanking[entity] != null && /*#__PURE__*/_react["default"].createElement(_supplierRating["default"], {
          supplier: {
            satisfactionCount: rows.satisfactionCount[entity],
            satisfactionRating: rows.supplierRanking[entity]
          },
          secondary: true,
          isReview: true
        }), rows.reactivityInterval && rows.reactivityInterval[entity] && /*#__PURE__*/_react["default"].createElement(_supplierReactivity["default"], {
          supplier: {
            reactivityInterval: rows.reactivityInterval[entity]
          },
          secondary: true
        }));
      })), !Object.values(rows.price).every(function (x) {
        return x === null;
      }) && /*#__PURE__*/_react["default"].createElement(_prices.BlockPrice, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_price"
      })), Object.keys(rows.price).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          key: entity,
          className: entity === dragOver ? "drag" : ""
        }, rows.price[entity] && /*#__PURE__*/_react["default"].createElement(_prices.Price, {
          price: rows.price[entity]
        }));
      }))), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Row, null, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, null), Object.keys(rows.productStandUrl).map(function (entity) {
        return /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Table.Cell, {
          key: entity,
          className: entity === dragOver ? "drag" : ""
        }, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Button, {
          contained: true,
          size: "small",
          href: rows.productStandUrl[entity]
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "foj_comparator_see_product"
        })));
      })))))), (isMobile || loaded === true && (data === null || data.length === 0)) && /*#__PURE__*/_react["default"].createElement(_comparator.EmptyWrapper, null, this.renderBreadcrumb(false), /*#__PURE__*/_react["default"].createElement("i", {
        className: "EmptyIcon",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "EmptyTitle"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_empty_title"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "EmptyText"
      }, emptyMessage), /*#__PURE__*/_react["default"].createElement(_comparator.CompareBtn, {
        onClick: this.goBackHome
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_comparator_empty_button"
      }))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)((0, _withTracking.WithTracking)(Comparator));