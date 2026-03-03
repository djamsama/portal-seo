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
var _requestService = _interopRequireDefault(require("./requestService"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SearchBoxAjaxService = /*#__PURE__*/function (_RequestService) {
  function SearchBoxAjaxService(context) {
    (0, _classCallCheck2["default"])(this, SearchBoxAjaxService);
    if (!context) {
      throw new Error("Cannot do the request without context");
    }
    // java nous envoie les urls searchUrl et autoCompleteUrl avec la locale,
    // on ne doit donc pas utiliser le baseUrl => isUseDomainInsteadOfBaseUrl: true
    return _callSuper(this, SearchBoxAjaxService, [{
      isUseDomainInsteadOfBaseUrl: true
    }]);
  }
  (0, _inherits2["default"])(SearchBoxAjaxService, _RequestService);
  return (0, _createClass2["default"])(SearchBoxAjaxService, [{
    key: "search",
    value: function search(text, type, context) {
      if (!context || !context.initData || !context.initData.searchUrl) {
        throw new Error("Cannot do the request without context");
      }
      this.setParams({
        searchTerms: text,
        searchType: type
      });
      return this.get(context.initData.searchUrl);
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(text, type, context) {
      if (!context || !context.initData || !context.initData.searchUrl) {
        throw new Error("Cannot do the request without context");
      }
      var maxResponse = context && context.initData ? context.initData.searchMaxResult : 12;
      var maxCompanyResponse = context && context.initData ? context.initData.searchCompanyMaxResult : 12;
      this.setParams({
        term: text,
        nbResponse: maxResponse,
        nbCompanyResponse: maxCompanyResponse
      });
      return this.get(context.initData.autoCompleteUrl);
    }
  }, {
    key: "getFrequentSearchByCountry",
    value: function getFrequentSearchByCountry(context) {
      if (!context || !context.initData || !context.initData.frequentlySearchedUrl) {
        throw new Error("Cannot do the request without context");
      }
      return this.get(context.initData.frequentlySearchedUrl);
    }
  }]);
}(_requestService["default"]);
var _default = exports["default"] = SearchBoxAjaxService;