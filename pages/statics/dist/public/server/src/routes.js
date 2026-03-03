"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _homeContainer = _interopRequireDefault(require("./pages/home/containers/homeContainer"));
var _manufacturer = _interopRequireDefault(require("./pages/exhibit/manufacturer"));
var _routeHomeInitService = require("./services/impl/routeHomeInitService");
var _notFoundPage = _interopRequireDefault(require("./components/notFoundPage"));
var _mySpaceRequest = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceRequest"));
var _mySpaceRFQDetail = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceRFQDetail"));
var _mySpaceRequestDetail = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceRequestDetail"));
var _index = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceBookmark/index"));
var _index2 = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceAccount/index"));
var _index3 = _interopRequireDefault(require("./pages/products/pages/productsComparison/index"));
var _index4 = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceQuotationValidation/index"));
var _request = _interopRequireDefault(require("./pages/request/containers/request"));
var _requestFormReducer = require("./pages/request/reducers/requestFormReducer");
var _index5 = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceSubscription/index"));
var _index6 = _interopRequireDefault(require("./pages/stand/pages/standProduct/index"));
var _index7 = _interopRequireDefault(require("./pages/catalog/pages/standCatalog/index"));
var _standProductReducer = require("./pages/stand/reducers/standProductReducer");
var _standCatalogReducer = require("./pages/catalog/reducers/standCatalogReducer");
var _mySpaceSurveyRequestSatisfaction = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceSurveyRequestSatisfaction"));
var _containers = _interopRequireDefault(require("./pages/mySpace/pages/mySpaceSurveySatisfactionThanks/containers"));
var _index8 = _interopRequireDefault(require("./pages/cgu/index"));
var _index9 = _interopRequireDefault(require("./pages/privacy/index"));
var _index0 = _interopRequireDefault(require("./pages/mailing/subscribe/index"));
var _index1 = _interopRequireDefault(require("./pages/mailing/unsubscribe/index"));
var _index10 = _interopRequireDefault(require("./pages/buyingGuide/index"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable no-prototype-builtins */ /* eslint-disable react/jsx-filename-extension */ /* eslint-disable react/jsx-props-no-spreading */ /* eslint-disable react/display-name */
function bootstrapStateData(req, routeStateKey, routeState) {
  var commonState = _routeHomeInitService.initService.getInitStateData(req);
  var commonData = _routeHomeInitService.initService.getInitData(req);
  var routeStateTemp = {};
  Object.keys(routeState).forEach(function (key) {
    if (routeState.hasOwnProperty(key)) {
      if (req.state && req.state.hasOwnProperty(key)) {
        routeStateTemp[key] = req.state[key];
      } else if (commonData.hasOwnProperty(key)) {
        routeStateTemp[key] = req.data[key];
      }
    }
  });
  return _objectSpread(_objectSpread({}, commonState), {}, (0, _defineProperty2["default"])({}, routeStateKey, routeStateTemp));
}
var routes = [{
  path: "/notFound",
  component: _notFoundPage["default"],
  loadStateData: function loadStateData() {},
  loadData: function loadData() {},
  loadConfig: function loadConfig() {}
}, {
  /* myspace account */
  path: "/:lang?/myspace/secure/account",
  exact: true,
  component: _index2["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* myspace request */
  path: "/:lang?/myspace/secure/request",
  exact: true,
  component: _mySpaceRequest["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* myspace request detail */
  path: "/:lang?/myspace/secure/request-detail/:tokenId.html",
  exact: false,
  component: _mySpaceRequestDetail["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* myspace rfq detail */
  path: "/:lang?/myspace/secure/rfq/:tokenId.html",
  exact: false,
  component: _mySpaceRFQDetail["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* myspace bookmark */
  path: "/:lang?/myspace/secure/bookmark",
  exact: true,
  component: _index["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* myspace subscription */
  path: "/:lang?/myspace/secure/subscription",
  exact: true,
  component: _index5["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* request form */
  path: "/:lang?/request/form.html",
  exact: false,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_request["default"], props);
  },
  loadStateData: function loadStateData(req) {
    return bootstrapStateData(req, _requestFormReducer.RequestFormReducerName, _requestFormReducer.RequestFormState);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* request form */
  path: "/:lang?/request/forward/:stepName/:stepId.html",
  exact: false,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_request["default"], props);
  },
  loadStateData: function loadStateData(req) {
    return bootstrapStateData(req, _requestFormReducer.RequestFormReducerName, _requestFormReducer.RequestFormState);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* recommendation form */
  path: "/:lang?/request/recommendations.html",
  exact: true,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_request["default"], props);
  },
  loadStateData: function loadStateData(req) {
    return bootstrapStateData(req, _requestFormReducer.RequestFormReducerName, _requestFormReducer.RequestFormState);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* products comparaison */
  path: "/:lang?/compare.html",
  exact: true,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_index3["default"], (0, _extends2["default"])({}, props, {
      hasNoGrabber: true,
      hasFixedHeader: true
    }));
  },
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* CGU Page */
  path: "/:lang?/cgu.html",
  exact: true,
  component: _index8["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* Privacy Page */
  path: "/:lang?/privacy.html",
  exact: true,
  component: _index9["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* subscribe mailing Page */
  path: "/:lang?/mailing/subscribe.html",
  exact: true,
  component: _index0["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* unsubscribe mailing Page */
  path: "/:lang?/mailing/unsubscribe.html",
  exact: true,
  component: _index1["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* buying guide Page */
  path: "/guide/:kwrefLabel-:kwrefId.html",
  exact: true,
  component: _index10["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* myspace quotation */
  path: "/:lang?/myspace/secure/:context?-quotation/validation/:quoteId/:step.html",
  exact: true,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_index4["default"], props);
  },
  // QuotationValidationStepOne,
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* survey-request */
  path: "/:lang?/myspace/secure/survey-:leadContext",
  exact: true,
  component: _mySpaceSurveyRequestSatisfaction["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* survey-request */
  path: "/:lang?/myspace/secure/thanks-:visitorContacted",
  exact: true,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_containers["default"], props);
  },
  loadStateData: function loadStateData(req) {
    return bootstrapStateData(req, _requestFormReducer.RequestFormReducerName, _requestFormReducer.RequestFormState);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* products */
  path: "/:lang?/prod/:company/product-:companyId-:productId.html",
  exact: true,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_index6["default"], (0, _extends2["default"])({}, props, {
      showRelatedLinks: true
    }));
  },
  loadStateData: function loadStateData(req) {
    return bootstrapStateData(req, _standProductReducer.StandProductReducerName, _standProductReducer.StandProductState);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* Home */
  path: "/:lang?/([a-z]{2;2}/)?",
  exact: true,
  component: _homeContainer["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* Manufacturer access */
  path: "/:lang?/exhibit_on_:siteLabel/subscription",
  exact: true,
  component: _manufacturer["default"],
  loadStateData: function loadStateData(req) {
    return _routeHomeInitService.initService.getInitStateData(req);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}, {
  /* Catalogues */
  path: "/:pdf?/:pdf?/:companyName/:cat/:companyId-:pdfId.html",
  // Comme on ne recupere pas la langue avec l'url on double pdf (language etendu fr/pdf => :pdf = "pdf")
  exact: true,
  render: function render(props) {
    return /*#__PURE__*/_react["default"].createElement(_index7["default"], (0, _extends2["default"])({}, props, {
      showRelatedLinks: true
    }));
  },
  loadStateData: function loadStateData(req) {
    return bootstrapStateData(req, _standCatalogReducer.StandCatalogReducerName, _standCatalogReducer.StandCatalogState);
  },
  loadData: function loadData(req) {
    return _routeHomeInitService.initService.getInitData(req);
  },
  loadConfig: function loadConfig(req) {
    return _routeHomeInitService.initService.getConfig(req);
  }
}];
var _default = exports["default"] = routes;