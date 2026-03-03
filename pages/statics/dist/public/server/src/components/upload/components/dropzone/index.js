"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _reactDropzone = _interopRequireDefault(require("react-dropzone"));
var _semanticUiReact = require("semantic-ui-react");
var _constants = require("../../../../commons/constants");
var _dropzone = require("./styles/dropzone");
var _formattedHTMLMessage = _interopRequireDefault(require("../../../formattedHTMLMessage"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var FileUploadDropzone = /*#__PURE__*/function (_Component) {
  function FileUploadDropzone() {
    var _this;
    (0, _classCallCheck2["default"])(this, FileUploadDropzone);
    _this = _callSuper(this, FileUploadDropzone);
    _this.state = {
      files: [],
      rejected: false,
      error: ""
    };
    _this.onDropRejected = function () {
      _this.setState({
        rejected: true
      });
    };
    _this.onDropAccepted = function () {
      _this.setState({
        rejected: false
      });
    };
    return _this;
  }
  (0, _inherits2["default"])(FileUploadDropzone, _Component);
  return (0, _createClass2["default"])(FileUploadDropzone, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        onFilesAdded = _this$props.onFilesAdded,
        error = _this$props.error,
        intl = _this$props.intl;
      var onDrop = function onDrop(files) {
        _this2.setState({
          files: files
        });
        onFilesAdded(files);
      };
      return /*#__PURE__*/_react["default"].createElement(_reactDropzone["default"], {
        onDrop: onDrop,
        error: error,
        onDropRejected: this.onDropRejected,
        onDropAccepted: this.onDropAccepted,
        accept: _constants.UPLOAD_ACCEPTED_FILES
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
          getInputProps = _ref.getInputProps,
          isDragActive = _ref.isDragActive,
          isDragAccept = _ref.isDragAccept,
          isDragReject = _ref.isDragReject;
        return /*#__PURE__*/_react["default"].createElement(_dropzone.DropzoneSection, {
          className: "container"
        }, /*#__PURE__*/_react["default"].createElement(_dropzone.DropzoneContainer, getRootProps({
          isDragActive: isDragActive,
          isDragAccept: isDragAccept,
          isDragReject: isDragReject,
          className: "dropzone"
        }), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Icon, {
          name: "cloud upload",
          className: "uploadIcon"
        }), /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          id: "foj_myspace_add_pj_dragNdrop",
          tagName: "p"
        }, function (txt) {
          return txt;
        })), /*#__PURE__*/_react["default"].createElement("aside", null, error && error.length !== 0 && /*#__PURE__*/_react["default"].createElement("span", {
          className: "rejected"
        }, error), _this2.state.rejected && /*#__PURE__*/_react["default"].createElement(_formattedHTMLMessage["default"], {
          className: "rejected",
          id: "foj_myspace_add_pj_format_error"
        }, function (txt) {
          return txt;
        })));
      });
    }
  }]);
}(_react.Component);
var _default = exports["default"] = FileUploadDropzone;