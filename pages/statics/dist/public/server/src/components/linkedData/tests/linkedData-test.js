"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
var linkedDataWithAllData = {
  thing: {
    name: "robot multifonction professionnel Robot Coupe",
    identifier: "R 301",
    description: "Couvercle facile à positionner sur la cuve pour une utilisation simple et rapide.\rSystème de sécurité ...",
    image: [{
      contentUrl: "https://img.archiexpo.fr/images_ae/photo-g/10873-2095411.jpg",
      width: 802,
      height: 802,
      representativeOfPage: "http://schema.org/True",
      keywords: "robot multifonction professionnel, robot multifonction coupe-légumes, robot multifonction",
      publisher: {
        name: "ArchiExpo",
        "@type": "Thing"
      },
      uploadDate: "2018-06-29T12:28:54+0200",
      description: "ROBOT MULTIFONCTION PROFESSIONNEL - R 301",
      "@type": "ImageObject"
    }, "https://img.archiexpo.fr/images_ae/photo-g/10873-9710903.jpg"],
    "@context": "https://schema.org",
    "@type": "Thing"
  },
  videoObject: {
    name: "Robot multifonction professionnel - R 301",
    description: "Couvercle facile à positionner sur la cuve pour une utilisation simple et rapide.\rSystème de sécurité ...",
    thumbnailUrl: "https://video.archiexpo.fr/video_ae/video-thb-g/78419.jpg",
    duration: "PT3M40S",
    contentURL: "https://video.archiexpo.com/video_ae/videos/video-78419.mp4",
    uploadDate: "2015-02-27T08:01:07+0100",
    inLanguage: "En",
    keywords: "robot multifonction professionnel, robot multifonction coupe-légumes, robot multifonction",
    "@context": "https://schema.org",
    "@type": "VideoObject"
  }
};
test("linkedData with all data", function () {
  var linkedDataWrapper = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    linkedData: linkedDataWithAllData
  }));
  var scriptElements = linkedDataWrapper.find("script");
  expect(scriptElements).toHaveLength(2);
  var firstElement = scriptElements.at(0);
  expect(firstElement.getDOMNode().attributes.getNamedItem("type").value).toEqual("application/ld+json");
  expect(firstElement.getDOMNode().textContent).toContain("Thing");
  var secondElement = scriptElements.at(1);
  expect(secondElement.getDOMNode().attributes.getNamedItem("type").value).toEqual("application/ld+json");
  expect(secondElement.getDOMNode().textContent).toContain("VideoObject");
});
var linkedDataWithNoThing = {
  thing: null,
  videoObject: {
    name: "Robot multifonction professionnel - R 301",
    description: "Couvercle facile à positionner sur la cuve pour une utilisation simple et rapide.\rSystème de sécurité ...",
    thumbnailUrl: "https://video.archiexpo.fr/video_ae/video-thb-g/78419.jpg",
    duration: "PT3M40S",
    contentURL: "https://video.archiexpo.com/video_ae/videos/video-78419.mp4",
    uploadDate: "2015-02-27T08:01:07+0100",
    inLanguage: "En",
    keywords: "robot multifonction professionnel, robot multifonction coupe-légumes, robot multifonction",
    "@context": "https://schema.org",
    "@type": "VideoObject"
  }
};
test("linkedData with no thing", function () {
  var linkedDataWrapper = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    linkedData: linkedDataWithNoThing
  }));
  var scriptElements = linkedDataWrapper.find("script");
  expect(scriptElements).toHaveLength(1);
  expect(scriptElements.at(0).getDOMNode().textContent).toContain("VideoObject");
});
var linkedDataWithNoVideo = {
  thing: {
    name: "robot multifonction professionnel Robot Coupe",
    identifier: "R 301",
    description: "Couvercle facile à positionner sur la cuve pour une utilisation simple et rapide.\rSystème de sécurité ...",
    image: [{
      contentUrl: "https://img.archiexpo.fr/images_ae/photo-g/10873-2095411.jpg",
      width: 802,
      height: 802,
      representativeOfPage: "http://schema.org/True",
      keywords: "robot multifonction professionnel, robot multifonction coupe-légumes, robot multifonction",
      publisher: {
        name: "ArchiExpo",
        "@type": "Thing"
      },
      uploadDate: "2018-06-29T12:28:54+0200",
      description: "ROBOT MULTIFONCTION PROFESSIONNEL - R 301",
      "@type": "ImageObject"
    }, "https://img.archiexpo.fr/images_ae/photo-g/10873-9710903.jpg"],
    "@context": "https://schema.org",
    "@type": "Thing"
  },
  videoObject: null
};
test("linkedData with no video", function () {
  var linkedDataWrapper = mount(/*#__PURE__*/_react["default"].createElement(_index["default"], {
    linkedData: linkedDataWithNoVideo
  }));
  var scriptElements = linkedDataWrapper.find("script");
  expect(scriptElements).toHaveLength(1);
  expect(scriptElements.at(0).getDOMNode().textContent).toContain("Thing");
});