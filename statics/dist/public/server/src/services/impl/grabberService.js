"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrabberService = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _reactReduxToastr = require("react-redux-toastr");
var _constants = require("../../commons/constants");
var GrabberService = exports.GrabberService = /*#__PURE__*/function () {
  function GrabberService() {
    (0, _classCallCheck2["default"])(this, GrabberService);
  }
  return (0, _createClass2["default"])(GrabberService, [{
    key: "loadProducts",
    value: /** Récupération des produits du localstorage. */
    function loadProducts() {
      var products = [];
      var lsGrabber = typeof localStorage !== "undefined" ? localStorage.getItem(_constants.LOCAL_STORAGE_GRABBER) : null;
      if (lsGrabber) {
        products = JSON.parse(lsGrabber);
      }
      return products;
    }

    /** Suppression de tous les produits. */
  }, {
    key: "deleteAllProducts",
    value: function deleteAllProducts() {
      localStorage.removeItem(_constants.LOCAL_STORAGE_GRABBER);
    }

    /** Suppression d'un produit à partir de son ID. */
  }, {
    key: "deleteProduct",
    value: function deleteProduct(productId) {
      var products = this.loadProducts();
      var filteredProducts = products.filter(function (p) {
        return p.id !== productId;
      });
      localStorage.setItem(_constants.LOCAL_STORAGE_GRABBER, JSON.stringify(filteredProducts));
      return filteredProducts;
    }

    /** Ajout d'un produit dans le localstorage. */
  }, {
    key: "addProduct",
    value: function addProduct(productId, productImg, productDef, intl) {
      var products = this.loadProducts();
      if (products.length < _constants.MAX_PRODUCTS_TO_COMPARE) {
        if (undefined === products.find(function (product) {
          return product.id === productId;
        })) {
          products.push({
            id: productId,
            img: productImg,
            def: productDef
          });
          localStorage.setItem(_constants.LOCAL_STORAGE_GRABBER, JSON.stringify(products));
        }
      } else {
        _reactReduxToastr.toastr.error(intl.formatMessage({
          id: "foj_comparator_grabber_full_title"
        }), intl.formatMessage({
          id: "foj_comparator_grabber_full_message"
        }));
      }
      return products;
    }
  }]);
}();