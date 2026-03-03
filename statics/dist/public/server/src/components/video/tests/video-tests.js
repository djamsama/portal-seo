"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var _video = require("../styles/video");
test("test ProductVideo structure", function () {
  var productVideo = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    thumbnail: "/uneUrlImage.jpg",
    url: "/uneUrlVideo.mp4"
  }));

  /* Le Composant est constitué d'un styled component 'Video' par défaut. */
  var video = productVideo.find(_video.StyledVideo);
  expect(video).toHaveLength(1);
  /* Vérification de la configuration de la balise video. */
  expect(video.prop("preload")).toBe("metadata");
  expect(video.prop("poster")).toBe("/uneUrlImage.jpg");
  expect(video.find("source")).toHaveLength(1);
  expect(video.find("source").prop("src")).toBe("/uneUrlVideo.mp4");
});