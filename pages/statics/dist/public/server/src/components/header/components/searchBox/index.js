"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HeaderSearchBox = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _find = _interopRequireDefault(require("lodash/find"));
var _remove = _interopRequireDefault(require("lodash/remove"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _contextComponent = require("../../../contextComponent");
var _searchBoxContainer = _interopRequireDefault(require("../../../../containers/searchBox/searchBoxContainer"));
var _searchBoxHelper = require("../../../../helpers/searchBoxHelper");
var _specificSiteHelper = _interopRequireDefault(require("../../../../helpers/specificSiteHelper"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/forbid-prop-types */
// Partie de la searchBox specifique au header
var HeaderSearchBox = exports.HeaderSearchBox = /*#__PURE__*/function (_ContextComponent) {
  function HeaderSearchBox(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, HeaderSearchBox);
    _this = _callSuper(this, HeaderSearchBox, [props, context]);
    _this.showMenu = _this.showMenu.bind(_this);
    _this.hideMenu = _this.hideMenu.bind(_this);
    _this.changeSearchMode = _this.changeSearchMode.bind(_this);
    _this.state = {
      showMenu: false,
      searchValue: "",
      showAutocomplete: false
    };
    return _this;
  }

  /**
   * Mode de la recherche.
   * @param {*} mode
   */
  (0, _inherits2["default"])(HeaderSearchBox, _ContextComponent);
  return (0, _createClass2["default"])(HeaderSearchBox, [{
    key: "changeSearchMode",
    value: function changeSearchMode(mode) {
      var _this2 = this;
      this.setState({
        showMenu: false
      }, function () {
        return _this2.props.onChangeSearchMode(mode);
      });
    }

    /**
     * Affiche le menu de selection du type de recherche.
     */
  }, {
    key: "showMenu",
    value: function showMenu() {
      this.setState({
        showMenu: true
      });
      this.setState({
        showAutocomplete: false
      });
    }

    /**
     * Cache le menu de selection de la recherche.
     * @param {*} ev
     * @param {*} element
     */
  }, {
    key: "hideMenu",
    value: function hideMenu(ev, element) {
      if (_searchBoxHelper.SearchBoxHelperInstance.isOut(ev, element)) {
        this.setState({
          showMenu: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        searchMenuItems = _this$props.searchMenuItems,
        onHideAutocomplete = _this$props.onHideAutocomplete,
        isStickyHeader = _this$props.isStickyHeader,
        isMobileSearch = _this$props.isMobileSearch,
        isActiveMobileSearch = _this$props.isActiveMobileSearch;
      var portal = this.context.config.portal;
      var searchMode = (0, _find["default"])(searchMenuItems, function (item) {
        return item.selected;
      });
      var isExtendedLanguage = this.context.store.Application.extendedLanguage;
      if (typeof searchMode === "undefined") {
        searchMode = {
          placeHolderLabelKey: "",
          menuLabelKey: "",
          selected: true,
          mode: ""
        };
      }

      // Certains site n'ont pas de projet , dans ce cas il ne faut donc pas afficher l'item "Projets"
      if (!_specificSiteHelper["default"].isSiteWithProject(portal)) {
        (0, _remove["default"])(searchMenuItems, function (item) {
          return item.mode === "projects";
        });
      }
      // pour les langues entedues il n'y a pas de projet et de trends
      if (isExtendedLanguage) {
        (0, _remove["default"])(searchMenuItems, function (item) {
          return item.mode === "projects";
        });
        (0, _remove["default"])(searchMenuItems, function (item) {
          return item.mode === "trends";
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_searchBoxContainer["default"], {
        isMobileSearch: isMobileSearch,
        isHeader: true,
        isStickyHeader: isStickyHeader,
        onChangeSearchMode: function onChangeSearchMode(mode) {
          return _this3.props.onChangeSearchMode(mode);
        },
        onSearchBoxSubmit: function onSearchBoxSubmit(text, type, context) {
          return _this3.props.onSearchBoxSubmit(text, type, context);
        },
        onSearchTextChange: function onSearchTextChange(text, type, context) {
          return _this3.props.onSearchTextChange(text, type, context);
        },
        onHideAutocomplete: onHideAutocomplete,
        onLoadSearchBox: function onLoadSearchBox(context) {
          return _this3.props.onLoadSearchBox(context);
        },
        searchMode: searchMode.mode,
        isActiveMobileSearch: isActiveMobileSearch
      });
    }
  }]);
}(_contextComponent.ContextComponent);
HeaderSearchBox.propTypes = {
  onChangeSearchMode: _propTypes["default"].func.isRequired,
  searchMenuItems: _propTypes["default"].array
};
HeaderSearchBox.defaultProps = {
  severalSearchMode: true
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(HeaderSearchBox);