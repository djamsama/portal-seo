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
var _searchStorageService = require("../../../../services/search/searchStorageService.js");
var _contextComponent = require("../../../contextComponent");
var _globalHelper = require("../../../../helpers/globalHelper");
var _searchResults = _interopRequireDefault(require("./components/searchResults"));
var _specificSiteHelper = _interopRequireDefault(require("../../../../helpers/specificSiteHelper"));
var _autocomplete = require("./styles/autocomplete");
var _withGoogleAnalytics = require("../../../../hoc/withGoogleAnalytics");
var _constants = require("../../../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable no-plusplus */ // $FlowFixMe
var companySearchTypeLabel = "company";
var kwrefSearchTypeLabel = "kwref";
/**
 * Composant autocomplete genrique.
 */
var Autocomplete = /*#__PURE__*/function (_ContextComponent) {
  function Autocomplete(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, Autocomplete);
    _this = _callSuper(this, Autocomplete, [props, context]);
    _this.getLastSearch = _this.getLastSearch.bind(_this);
    _this.runSearch = _this.runSearch.bind(_this);
    _this.deleteRecent = _this.deleteRecent.bind(_this);
    _this.getItems = _this.getItems.bind(_this);
    var lastSearchObject = {
      recordedLastSearch: [],
      nbLastSearch: 0,
      recordedSearchArray: []
    };
    if (false) {
      lastSearchObject = _this.getLastSearch();
    }
    _this.state = {
      nbLastSearch: lastSearchObject.nbLastSearch,
      lastSearch: lastSearchObject.recordedSearchArray
    };
    return _this;
  }
  (0, _inherits2["default"])(Autocomplete, _ContextComponent);
  return (0, _createClass2["default"])(Autocomplete, [{
    key: "runSearch",
    value: function runSearch(event, item) {
      var isCallByRecentSearchButton = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props = this.props,
        googleAnalytics = _this$props.googleAnalytics,
        clickCallback = _this$props.clickCallback,
        searchMode = _this$props.searchMode;
      var config = this.context.config;
      var locale = config && config.portal && config.portal.locale ? config.portal.locale : "en";
      var searchTerm = item.label;
      searchTerm = searchTerm.replace(/<[^>]+>/g, "");
      var virtualSearchUrl = "search.php?type=".concat(searchMode, "&q=").concat(searchTerm);
      googleAnalytics.pageview(virtualSearchUrl);
      if (!isCallByRecentSearchButton) {
        var recordedSearch = (0, _searchStorageService.getFromStorage)(_constants.LOCAL_STORAGE_RECENT_SEARCH_KEY, locale);
        var newLabel = _globalHelper.GlobalHelper.removeHtml(item.label);
        var nbLastSearch = this.state.nbLastSearch;
        var lastSearch = this.state.lastSearch;
        if (!recordedSearch[newLabel]) {
          nbLastSearch += 1;
          recordedSearch[newLabel] = {
            item: item,
            sanityzedLabel: newLabel,
            url: virtualSearchUrl
          };
          lastSearch[newLabel] = recordedSearch[newLabel];
          (0, _searchStorageService.saveInStorage)(_constants.LOCAL_STORAGE_RECENT_SEARCH_KEY, locale, recordedSearch, config && config.recentSuggestMaxResult ? config.recentSuggestMaxResult : null);
        }
        this.setState({
          nbLastSearch: nbLastSearch,
          lastSearch: lastSearch
        });
      }
      var searchLabel = item.label;
      if (item.type === companySearchTypeLabel) {
        searchLabel += "|";
        searchLabel += item.suggestionId;
      }
      clickCallback(event, searchLabel);
    }
  }, {
    key: "getLastSearch",
    value: function getLastSearch() {
      var _this2 = this;
      if (!false) {
        return {
          recordedLastSearch: [],
          nbLastSearch: 0,
          recordedSearchArray: []
        };
      }
      var config = this.context.config;
      var locale = config && config.portal && config.portal.locale ? config.portal.locale : "en";
      var recordedSearch = (0, _searchStorageService.getFromStorage)(_constants.LOCAL_STORAGE_RECENT_SEARCH_KEY, locale);
      if (recordedSearch && recordedSearch.isFilled) {
        delete recordedSearch.isFilled;
        var recordedSearchArray = [];
        var recordedSearchFormated = Object.entries(recordedSearch).map(function (item) {
          var _veStyles$colors;
          if (!item || !item[1] || !item[1].item || !item[1].sanityzedLabel) {
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
          }
          var currentItem = item[1].item;
          var sanityzedLabel = item[1].sanityzedLabel;
          recordedSearchArray[sanityzedLabel] = /*#__PURE__*/_react["default"].createElement(_autocomplete.AutocompleteItem, {
            key: currentItem.label,
            onClick: function onClick(e) {
              return _this2.runSearch(e, currentItem, true);
            },
            value: currentItem.label
          }, /*#__PURE__*/_react["default"].createElement(_autocomplete.AutocompleteItemLinkInline, null, /*#__PURE__*/_react["default"].createElement(_autocomplete.AutocompleteItemSpan, {
            noBold: true
          }, sanityzedLabel)), /*#__PURE__*/_react["default"].createElement(_autocomplete.IconLeft, null, /*#__PURE__*/_react["default"].createElement(_veDesignSystem.Icon, {
            name: "clock",
            iconSize: 10,
            iconColor: _veDesignSystem.styles === null || _veDesignSystem.styles === void 0 || (_veStyles$colors = _veDesignSystem.styles.colors) === null || _veStyles$colors === void 0 || (_veStyles$colors = _veStyles$colors.monochrome) === null || _veStyles$colors === void 0 ? void 0 : _veStyles$colors.grayDark
          })));
          return recordedSearchArray[sanityzedLabel];
        });
        return {
          recordedLastSearch: recordedSearchFormated,
          nbLastSearch: recordedSearchFormated.length,
          recordedSearchArray: recordedSearchArray
        };
      }
      return {
        recordedLastSearch: [],
        nbLastSearch: 0,
        recordedSearchArray: []
      };
    }
  }, {
    key: "deleteRecent",
    value: function deleteRecent() {
      var config = this.context.config;
      var locale = config && config.portal && config.portal.locale ? config.portal.locale : _constants.DEFAULT_LOCALE;
      (0, _searchStorageService.deleteFromStorage)(_constants.LOCAL_STORAGE_RECENT_SEARCH_KEY, locale);
      if (this.state.nbLastSearch > 0) {
        this.setState({
          nbLastSearch: 0,
          lastSearch: []
        });
      }
    }
  }, {
    key: "searchByCategorySubmit",
    value: function searchByCategorySubmit(event, category) {
      this.props.searchBoxSubmit(event, category);
    }
  }, {
    key: "getItems",
    value: function getItems(items) {
      var itemsToDisplay = [];
      var lastSearch = this.state.lastSearch;
      var initData = this.context.initData;
      var maxResult = initData && initData.searchMaxResult ? initData.searchMaxResult : 12;
      var stopTo = maxResult - this.state.nbLastSearch;
      var kwrefSuggestions = items.filter(function (_ref) {
        var type = _ref.type;
        return type === kwrefSearchTypeLabel;
      });
      for (var i = 0; i < kwrefSuggestions.length; i++) {
        var label = _globalHelper.GlobalHelper.removeHtml(kwrefSuggestions[i].label);
        if (!lastSearch[label]) {
          itemsToDisplay.push(kwrefSuggestions[i]);
        } else {
          stopTo += 1;
        }
        if (i >= stopTo) {
          break;
        }
      }
      return itemsToDisplay;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props2 = this.props,
        items = _this$props2.items,
        showAutocomplete = _this$props2.showAutocomplete,
        searchText = _this$props2.searchText,
        frequentlySearchedItems = _this$props2.frequentlySearchedItems,
        isActiveMobileSearch = _this$props2.isActiveMobileSearch;
      var initData = this.context.initData;
      var portal = this.context.config.portal;
      var isExtendedLanguage = _specificSiteHelper["default"].getExtendedLanguageFromStore(this.context.store);
      var recentSearchLabel = initData ? initData.recentSearchLabel : "";
      var isMobile = this.context && this.context.config ? this.context.config.isMobile : false;
      var recentSearchDeleteLabel = initData ? initData.recentSearchDeleteLabel : "";
      var recentsSearch = this.getLastSearch().recordedLastSearch;
      var itemsToDisplay = items ? this.getItems(items) : [];
      var kwrefs = [];
      var companies = [];
      var nbDivToDisplay = 1;
      if (items !== undefined) {
        kwrefs = itemsToDisplay.filter(function (_ref2) {
          var type = _ref2.type;
          return type === kwrefSearchTypeLabel;
        });
        companies = items.filter(function (_ref3) {
          var type = _ref3.type;
          return type === companySearchTypeLabel;
        });
        if (kwrefs.length > 0) {
          nbDivToDisplay += 1;
        }
        if (companies.length > 0) {
          nbDivToDisplay += 1;
        }
      }
      if (this.state.nbLastSearch > 0) {
        nbDivToDisplay += 1;
      }
      var showColLeft = this.state.nbLastSearch > 0 || itemsToDisplay && itemsToDisplay.length !== 0 || frequentlySearchedItems && frequentlySearchedItems.length !== 0;
      var showColRight = items !== undefined;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_autocomplete.AutoCompleteWrapper, {
        showAutocomplete: showAutocomplete || isActiveMobileSearch && isMobile,
        "data-cy": "autocomplete"
      }, /*#__PURE__*/_react["default"].createElement(_autocomplete.SearchContainer, {
        showTwoCols: showColLeft && showColRight
      }, showColLeft && /*#__PURE__*/_react["default"].createElement(_autocomplete.ColLeft, {
        fullWidth: items === undefined
      }, this.state.nbLastSearch > 0 && /*#__PURE__*/_react["default"].createElement(_autocomplete.LastSearchContainer, {
        "data-cy": "autocompleteLastSearch"
      }, /*#__PURE__*/_react["default"].createElement(_autocomplete.Title, {
        noDecoration: true
      }, recentSearchLabel, /*#__PURE__*/_react["default"].createElement(_autocomplete.DeleteTitle, {
        onClick: this.deleteRecent
      }, recentSearchDeleteLabel)), /*#__PURE__*/_react["default"].createElement(_autocomplete.AutocompleteListBorderBottom, {
        "data-cy": "autocompleteLastSearchList"
      }, recentsSearch)), (itemsToDisplay && itemsToDisplay.length !== 0 || frequentlySearchedItems && frequentlySearchedItems.length !== 0) && /*#__PURE__*/_react["default"].createElement(_autocomplete.AutocompleteContainer, {
        "data-cy": "autocompleteSearch"
      }, itemsToDisplay && itemsToDisplay.length !== 0 && /*#__PURE__*/_react["default"].createElement(_searchResults["default"], {
        items: itemsToDisplay,
        idTitle: "fo_header_search_title_kwref",
        runSearch: this.runSearch
      }), itemsToDisplay.length === 0 && /*#__PURE__*/_react["default"].createElement(_searchResults["default"], {
        items: frequentlySearchedItems,
        idTitle: "fo_header_search_title_kwref_mostConsulted",
        runSearch: this.runSearch,
        noBold: true
      }))), showColRight && /*#__PURE__*/_react["default"].createElement(_autocomplete.ColRight, {
        fullWidth: itemsToDisplay.length === 0 && !(this.state.nbLastSearch > 0)
      }, /*#__PURE__*/_react["default"].createElement(_autocomplete.CategorySearchContainer, {
        "data-cy": "autocompleteSearchOther"
      }, /*#__PURE__*/_react["default"].createElement(_autocomplete.CategorySearchLinkContainer, null, /*#__PURE__*/_react["default"].createElement(_autocomplete.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_header_search_title_kwref_otherContent"
      })), /*#__PURE__*/_react["default"].createElement(_autocomplete.CategorySearchLink, {
        as: "a",
        href: "#",
        onClick: function onClick(e) {
          return _this3.searchByCategorySubmit(e, "catalogs");
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_header_search_autocomplete_catalog_link",
        values: {
          "0": "\"".concat(searchText, "\"")
        }
      })), _specificSiteHelper["default"].isSiteWithProject(portal) && !isExtendedLanguage && /*#__PURE__*/_react["default"].createElement(_autocomplete.CategorySearchLink, {
        as: "a",
        href: "#",
        onClick: function onClick(e) {
          return _this3.searchByCategorySubmit(e, "projects");
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_header_search_autocomplete_project_link",
        values: {
          "0": "\"".concat(searchText, "\"")
        }
      })), !isExtendedLanguage && /*#__PURE__*/_react["default"].createElement(_autocomplete.CategorySearchLink, {
        as: "a",
        href: "#",
        onClick: function onClick(e) {
          return _this3.searchByCategorySubmit(e, "trends");
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_header_search_autocomplete_news_trends_link",
        values: {
          "0": "\"".concat(searchText, "\"")
        }
      })))), companies.length > 0 && /*#__PURE__*/_react["default"].createElement(_autocomplete.BrandSearchContainer, {
        "data-cy": "autocompleteBrandSearch",
        nbDivToDisplay: nbDivToDisplay
      }, /*#__PURE__*/_react["default"].createElement(_autocomplete.Title, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "fo_header_search_title_kwref_brands",
        values: {
          "0": "\"".concat(searchText, "\"")
        }
      })), /*#__PURE__*/_react["default"].createElement(_autocomplete.BrandList, {
        "data-cy": "autocompleteBrandList"
      }, companies.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_autocomplete.BrandItem, {
          key: item.suggestionId
        }, /*#__PURE__*/_react["default"].createElement(_autocomplete.BrandItemLink, {
          onClick: function onClick(e) {
            return _this3.runSearch(e, item);
          },
          value: _globalHelper.GlobalHelper.removeHtml(item.label)
        }, /*#__PURE__*/_react["default"].createElement(_autocomplete.BrandLogo, {
          src: item.suggestionLogoUrl,
          alt: "".concat(_globalHelper.GlobalHelper.removeHtml(item.label), " - logo")
        })));
      })))))));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)((0, _reactIntl.injectIntl)(Autocomplete));