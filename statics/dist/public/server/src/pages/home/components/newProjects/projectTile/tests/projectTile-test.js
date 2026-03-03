"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reduxThunk = require("redux-thunk");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _index = _interopRequireDefault(require("../index"));
var _tile = _interopRequireDefault(require("../../../../../../components/tile/tile"));
var _initiateState = require("../../../../../../initiateState");
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
var store = mockStore(_initiateState.InitiateState);
var link = "link";
var item = {
  id: 159410,
  name: "un nom",
  entityType: "PROJECT",
  entityId: 2003900,
  comments: "un com ",
  companyId: 53709,
  date: null,
  requestTypes: null,
  requestTokenId: null,
  requestUrl: null,
  productDTO: {
    imageUrl: "http://img.archiexpo.fr/images_ae/photo-m/53709-13106454.jpg",
    linkUrl: "http://www.archiexpo.fr/prod/nordlux/product-53709-2003900.html",
    company: null,
    newProduct: false,
    innovation: null,
    productPrice: null,
    hasVideo: null,
    shortName: "lampe de table",
    brand: "ALTON ",
    name: "lampe de table / contemporaine / en laiton brossé / en verre opalescent",
    id: 2003900
  },
  pdfDTO: null,
  pdfDetailsDTO: null,
  projectDTO: null
};
test("projectTile", function () {
  // eslint-disable-next-line no-undef
  var projectTile = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    item: item,
    link: link
  })));
  expect(projectTile.find(_tile["default"]).exists()).toEqual(true);
});