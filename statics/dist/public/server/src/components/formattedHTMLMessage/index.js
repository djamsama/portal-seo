"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _dompurify = _interopRequireDefault(require("dompurify"));
var _tagName = _interopRequireDefault(require("./components/tagName"));
// $FlowFixMe
// $FlowFixMe
/**
 * Certaines traductions peuvent contenir des templates de type {0}, {1}, qui ne sont pas remplace avec intl.formatMessage.
 * On va les remplacer manuellement mais si ce n'est pas une bonne pratique de mettre du hmlt dans les traductions.
 *
 * @param {*} rawMessage
 * @param {*} values
 * @returns
 */
function replaceTemplateWithString(rawMessage, values) {
  var processedMessage = rawMessage;
  Object.keys(values).forEach(function (key) {
    var template = "{".concat(key, "}");
    if (template) processedMessage = processedMessage.replace(template, values[key]);
  });
  return processedMessage;
}
var FormattedHTMLMessage = function FormattedHTMLMessage(_ref) {
  var id = _ref.id,
    intl = _ref.intl,
    tagName = _ref.tagName,
    className = _ref.className,
    _ref$values = _ref.values,
    values = _ref$values === void 0 ? {} : _ref$values,
    _ref$defaultMessage = _ref.defaultMessage,
    defaultMessage = _ref$defaultMessage === void 0 ? "" : _ref$defaultMessage;
  // Traduction formatée directement en tant que chaîne de texte.
  // eslint-disable-next-line react/prop-types
  var rawHTMLMessage1 = intl.formatMessage({
    id: id,
    defaultMessage: defaultMessage || ""
  }, values);
  var rawHTMLMessage2 = replaceTemplateWithString(rawHTMLMessage1, values);
  var rawHTMLMessage = rawHTMLMessage2;

  // Sanitise du HTML pour éviter les vulnérabilités XSS.
  var sanitizedHTML = false && _dompurify["default"] !== null && _dompurify["default"] !== void 0 && _dompurify["default"].sanitize ? _dompurify["default"] === null || _dompurify["default"] === void 0 ? void 0 : _dompurify["default"].sanitize(rawHTMLMessage) : rawHTMLMessage;
  if (!(_dompurify["default"] !== null && _dompurify["default"] !== void 0 && _dompurify["default"].sanitize) && false && false) {
    // eslint-disable-next-line no-console
    console.warn("DOMPurify.sanitize is not defined, skipping sanitization");
  }
  if (tagName) {
    return /*#__PURE__*/_react["default"].createElement(_tagName["default"], {
      className: className || "",
      name: tagName,
      dangerouslySetInnerHTML: {
        __html: sanitizedHTML
      }
    });
  }

  // eslint-disable-next-line react/no-danger
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: className || "",
    dangerouslySetInnerHTML: {
      __html: sanitizedHTML
    }
  });
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(FormattedHTMLMessage);