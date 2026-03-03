"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APPLICATION = void 0;
var APPLICATION = exports.APPLICATION = {
  PRODUCTS: {
    PARAMETER_NAME: "products",
    PAGE_SIZE: 6,
    NUMBER_PAGE: 10
  },
  PROJECTS: {
    PARAMETER_NAME: "projects",
    PAGE_SIZE: 4,
    NUMBER_PAGE: 10
  },
  TRENDS: {
    PARAMETER_NAME: "trends",
    PAGE_SIZE: 5,
    NUMBER_PAGE: 10
  },
  EMAGS: {
    PAGE_SIZE: 2,
    URL: "/ajax/home/emag-items.json",
    PARAMETER_NAME: "emags"
  },
  GUIDES: {
    PAGE_SIZE: 3,
    URL: "/ajax/home/buying-guides.json",
    PARAMETER_NAME: "guides"
  },
  itemUrl: function itemUrl(itemType) {
    var urlType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "new";
    var page = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1";
    return "/ajax/home/".concat(urlType, "-").concat(itemType, "/").concat(page.toString(), ".json");
  }
};