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
var _contextComponent = require("../contextComponent");
var _autocomplete = _interopRequireDefault(require("./components/autocomplete"));
var _defaultValues = require("../../constants/defaultValues");
var _withGoogleAnalytics = require("../../hoc/withGoogleAnalytics");
var _barrelHelper = require("../../helpers/barrelHelper");
var _searchBox = require("./styles/searchBox");
var _constants = require("../../commons/constants");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // Styles
/**
 * Composant searchbox generique avec autocomplete.
 */
var SearchBox = /*#__PURE__*/function (_ContextComponent) {
  function SearchBox(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, SearchBox);
    _this = _callSuper(this, SearchBox, [props, context]);
    _this.searchTextChange = _this.searchTextChange.bind(_this);
    _this.searchTextClick = _this.searchTextClick.bind(_this);
    _this.searchBoxSubmit = _this.searchBoxSubmit.bind(_this);
    _this.autoCompletionClick = _this.autoCompletionClick.bind(_this);
    _this.resetAutoCompleteResult = _this.resetAutoCompleteResult.bind(_this);
    _this.dimmerClick = _this.dimmerClick.bind(_this);
    _this.clickSubmit = _this.clickSubmit.bind(_this);
    _this.state = {
      searchValue: "",
      autoCompleteclicked: true,
      showAutocomplete: false,
      clickOutside: false,
      searchMode: props.searchMode
    };
    return _this;
  }
  (0, _inherits2["default"])(SearchBox, _ContextComponent);
  return (0, _createClass2["default"])(SearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Chargement des recherches frequentes.
      this.props.onLoadSearchBox(this.context);
    }
  }, {
    key: "dimmerClick",
    value: function dimmerClick() {
      this.setState({
        clickOutside: true
      });
    }
  }, {
    key: "searchTextChange",
    value: function searchTextChange(event) {
      this.setState({
        searchValue: event.target.value
      });
      if (event.target.value && event.target.value.trim() !== "" && event.target.value.length >= _defaultValues.DEFAULT_AUTOCOMPLETE_NB_CHARACTER_TO_SUBMIT) {
        this.props.onSearchTextChange(event.target.value, this.props.searchMode, this.context);
        this.setState({
          showAutocomplete: true,
          clickOutside: false
        });
      }
    }
  }, {
    key: "searchTextClick",
    value: function searchTextClick() {
      this.setState({
        showAutocomplete: true,
        clickOutside: false
      });
    }
  }, {
    key: "searchBoxSubmit",
    value: function searchBoxSubmit(event) {
      var _this2 = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.SEARCH_MODE_DEFAULT;
      var searchValue = this.state.searchValue;
      var googleAnalytics = this.props.googleAnalytics;
      event.preventDefault();
      try {
        /* analytic */
        var searchTerm = searchValue;
        searchTerm = searchTerm.replace(/<[^>]+>/g, "");
        var virtualSearchUrl = "search.php?type=".concat(type, "&q=").concat(searchTerm);
        if (searchTerm !== "") {
          googleAnalytics.pageview(virtualSearchUrl);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn("ga no send");
      }
      if (searchValue && searchValue.trim() !== "") {
        var isDobr = (0, _barrelHelper.isDbr)(searchValue);
        if (!isDobr) {
          this.props.onSearchBoxSubmit(searchValue, type, this.context);
        } else {
          (0, _barrelHelper.dbr)();
          setTimeout(function () {
            _this2.props.onSearchBoxSubmit(searchValue, type, _this2.context);
          }, 4000);
        }
      }
    }
  }, {
    key: "resetAutoCompleteResult",
    value: function resetAutoCompleteResult(event) {
      event.preventDefault();
      this.props.onHideAutocomplete();
    }
  }, {
    key: "autoCompletionClick",
    value: function autoCompletionClick(event, val) {
      var _this3 = this;
      var type = this.props.searchMode ? this.props.searchMode : _constants.SEARCH_MODE_DEFAULT;
      event.preventDefault();
      this.setState({
        searchValue: val.replace(/<\/?[^>]+(>|$)/g, ""),
        autoCompleteclicked: true,
        showAutocomplete: false,
        clickOutside: false
      }, function () {
        return _this3.props.onSearchBoxSubmit(_this3.state.searchValue, type, _this3.context);
      });
    }
  }, {
    key: "clickSubmit",
    value: function clickSubmit(event) {
      // Au click sur la loupe de la search.
      if (this.state.showAutocomplete === false || this.state.clickOutside === true) {
        this.setState({
          showAutocomplete: true,
          clickOutside: false
        });
      }
      this.searchBoxSubmit(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props = this.props,
        autocompleteItems = _this$props.autocompleteItems,
        frequentlySearchedItems = _this$props.frequentlySearchedItems,
        isActiveMobileSearch = _this$props.isActiveMobileSearch;

      // Placeholder de l'input.
      var placeHolder = this.context.initData.initialSearchBarPlaceHolder;
      var cyId = this.props.isHeader ? "header_search" : "search";
      if (this.props.isMobileSearch) {
        cyId += "_mobile";
      }
      return /*#__PURE__*/_react["default"].createElement(_searchBox.WrapperSearchBox, {
        isStickyHeader: this.props.isStickyHeader,
        isHeader: this.props.isHeader,
        isMobileSearch: this.props.isMobileSearch,
        ref: function ref(elem) {
          return _this4.searchSelected = elem;
        },
        className: "search-Box",
        dataCy: cyId
      }, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.searchBoxSubmit,
        autoComplete: "off"
      }, /*#__PURE__*/_react["default"].createElement(_searchBox.InputGroupSearchBox, {
        isMobileSearch: this.props.isMobileSearch
      }, /*#__PURE__*/_react["default"].createElement(_searchBox.InputSearchBox, {
        type: "text",
        onChange: this.searchTextChange,
        onFocus: this.searchTextChange,
        onClick: this.searchTextClick,
        name: "searchTerms",
        value: this.state.searchValue,
        placeholder: placeHolder,
        autoComplete: "off",
        role: "textbox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true",
        isHeader: this.props.isHeader,
        showAutocomplete: this.state.showAutocomplete && !this.state.clickOutside
      }), /*#__PURE__*/_react["default"].createElement(_searchBox.FaSearchMobile, null), /*#__PURE__*/_react["default"].createElement(_searchBox.Dimmer, {
        showAutocomplete: this.state.showAutocomplete && !this.state.clickOutside,
        onClick: function onClick() {
          return _this4.dimmerClick();
        }
      }), /*#__PURE__*/_react["default"].createElement(_searchBox.SearchButtons, {
        className: "input-group-item header-search-buttons"
      }, /*#__PURE__*/_react["default"].createElement(_searchBox.ButtonSubmitSearchBox, {
        isHeader: this.props.isHeader,
        type: "submit",
        onClick: function onClick(e) {
          return _this4.clickSubmit(e);
        }
      }, /*#__PURE__*/_react["default"].createElement(_searchBox.FaSearchSearchBox, null)))), /*#__PURE__*/_react["default"].createElement(_autocomplete["default"], {
        items: this.state.searchValue.length < _defaultValues.DEFAULT_AUTOCOMPLETE_NB_CHARACTER_TO_SUBMIT ? undefined : autocompleteItems,
        clickCallback: this.autoCompletionClick,
        showAutocomplete: this.state.showAutocomplete && !this.state.clickOutside,
        inputSearchFromParent: this.searchSelected,
        searchMode: _constants.SEARCH_MODE_DEFAULT,
        searchText: this.state.searchValue,
        searchBoxSubmit: this.searchBoxSubmit,
        isActiveMobileSearch: isActiveMobileSearch,
        frequentlySearchedItems: !this.state.searchValue || this.state.searchValue.length < _defaultValues.DEFAULT_AUTOCOMPLETE_NB_CHARACTER_TO_SUBMIT ? frequentlySearchedItems : undefined
      })));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _withGoogleAnalytics.withGoogleAnalytics)(SearchBox);