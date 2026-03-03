"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerToImageRatio = getContainerToImageRatio;
exports.getLargeToSmallImageRatio = getLargeToSmallImageRatio;
exports.getLensCursorOffset = getLensCursorOffset;
exports.getPositionOffset = getPositionOffset;
exports.getSmallToLargeImageRatio = getSmallToLargeImageRatio;
var _clamp = _interopRequireDefault(require("clamp"));
function getSmallToLargeElementRatio(smallElement, largeElement) {
  return {
    x: largeElement.width / smallElement.width,
    y: largeElement.height / smallElement.height
  };
}
function getSmallToLargeImageRatio(smallImage, largeImage) {
  return getSmallToLargeElementRatio(smallImage, largeImage);
}
function getLargeToSmallImageRatio(smallImage, largeImage) {
  return {
    x: smallImage.width / largeImage.width,
    y: smallImage.height / largeImage.height
  };
}
function getContainerToImageRatio(container, image) {
  return getSmallToLargeElementRatio(container, {
    width: image.width - container.width,
    height: image.height - container.height
  });
}
function getLensCursorOffsetDimension(enlargedImageContainerDimension, ratio) {
  return Math.round(enlargedImageContainerDimension * ratio / 2);
}
function getLensCursorOffset(smallImage, largeImage, enlargedImageContainerDimensions) {
  var ratio = getLargeToSmallImageRatio(smallImage, largeImage);
  return {
    x: getLensCursorOffsetDimension(enlargedImageContainerDimensions.width, ratio.x),
    y: getLensCursorOffsetDimension(enlargedImageContainerDimensions.height, ratio.y)
  };
}
function getPositionOffset(cursorOffset, position, smallImage) {
  var cursorOffsetX = cursorOffset.x,
    cursorOffsetY = cursorOffset.y;
  var positionX = position.x,
    positionY = position.y;
  var imageHeight = smallImage.height,
    imageWidth = smallImage.width;
  var width = cursorOffset.x,
    height = cursorOffset.y;
  var top = positionY - cursorOffsetY;
  var left = positionX - cursorOffsetX;
  var maxTop = imageHeight - height - cursorOffsetY;
  var maxLeft = imageWidth - width - cursorOffsetX;
  var minOffset = 0;
  return {
    y: (0, _clamp["default"])(top, minOffset, maxTop),
    x: (0, _clamp["default"])(left, minOffset, maxLeft)
  };
}