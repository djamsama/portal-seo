"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisitorAccountFormHelper = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var VisitorAccountFormHelper = exports.VisitorAccountFormHelper = /*#__PURE__*/function () {
  function VisitorAccountFormHelper() {
    (0, _classCallCheck2["default"])(this, VisitorAccountFormHelper);
  }
  return (0, _createClass2["default"])(VisitorAccountFormHelper, null, [{
    key: "extractPlacesData",
    value: function extractPlacesData(gmaps) {
      var data = {
        countryName: null,
        shortCountryName: null,
        city: null,
        administrativeArea: null,
        streetNumber: null,
        route: null,
        postalCode: null,
        sublocality: null
      };
      for (var i in gmaps.address_components) {
        for (var type in gmaps.address_components[i].types) {
          var currentType = gmaps.address_components[i].types[type];
          if (currentType === "country") {
            data.countryName = gmaps.address_components[i].long_name;
            data.shortCountryName = gmaps.address_components[i].short_name;
            continue;
          } else if (currentType === "locality") {
            data.city = gmaps.address_components[i].long_name;
            continue;
          } else if (currentType === "administrative_area_level_1") {
            data.administrativeArea = gmaps.address_components[i].short_name;
            continue;
          } else if (currentType === "street_number") {
            data.streetNumber = gmaps.address_components[i].short_name;
            continue;
          } else if (currentType === "route") {
            data.route = gmaps.address_components[i].short_name;
            continue;
          } else if (currentType === "postal_code") {
            data.postalCode = gmaps.address_components[i].short_name;
            continue;
          } else if (currentType === "sublocality") {
            data.sublocality = gmaps.address_components[i].long_name;
            continue;
          }
        }
      }
      return data;
    }
  }]);
}();