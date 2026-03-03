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
var _reactIntl = require("react-intl");
var _pdfobject = _interopRequireDefault(require("pdfobject"));
var _loading = _interopRequireDefault(require("../loading"));
var _link = require("../link");
var _imageViewer = _interopRequireDefault(require("./components/imageViewer"));
var _documentViewer = require("./styles/documentViewer");
var _globalHelper = require("../../helpers/globalHelper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/** Types de fichiers manipulés. */
var fileTypes = {
  PDF: {
    extension: "pdf",
    nature: "PDF",
    mimeType: "application/pdf"
  },
  JPG: {
    extension: "jpg",
    nature: "IMAGE",
    mimeType: "image/jpeg"
  },
  JPEG: {
    extension: "jpeg",
    nature: "IMAGE",
    mimeType: "image/jpeg"
  },
  PNG: {
    extension: "png",
    nature: "IMAGE",
    mimeType: "image/png"
  },
  NOT_HANDLED: {
    nature: "NOT_HANDLED"
  }
};
var DocumentViewer = /*#__PURE__*/function (_Component) {
  function DocumentViewer(props, state) {
    var _this;
    (0, _classCallCheck2["default"])(this, DocumentViewer);
    _this = _callSuper(this, DocumentViewer, [props, state]);
    _this.renderPdf = _this.renderPdf.bind(_this);
    _this.state = {
      documentUrl: "",
      type: "",
      error: "",
      attachment: ""
    };
    return _this;
  }
  (0, _inherits2["default"])(DocumentViewer, _Component);
  return (0, _createClass2["default"])(DocumentViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        open = _this$props.open,
        rawFile = _this$props.rawFile,
        attachmentContext = _this$props.attachmentContext;
      if (open) {
        if (rawFile) {
          this.handleFile(attachmentContext);
        } else {
          this.retrieveFile();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var type = this.state.type;
      if (type === fileTypes.PDF.nature && !_globalHelper.GlobalHelper.isIosOnSafari() && !_globalHelper.GlobalHelper.isMobileDevice()) {
        this.renderPdf();
      }
    }

    /** Gestion du fichier. */
  }, {
    key: "handleFile",
    value: function handleFile(file) {
      var _this$props2 = this.props,
        fileName = _this$props2.fileName,
        rawFile = _this$props2.rawFile,
        attachmentContext = _this$props2.attachmentContext;
      var attachment = this.state.attachment;
      var fileExtension = fileName !== undefined ? fileName.split(".").pop().toLowerCase() : "";
      var fileURL = "";
      var byteArray = file;
      switch (fileExtension) {
        case fileTypes.PDF.extension:
          if (rawFile) {
            byteArray = Uint8Array.from(atob(attachmentContext).split("").map(function (_char) {
              return _char.charCodeAt(0);
            }));
          }
          fileURL = URL.createObjectURL(new Blob([byteArray], {
            type: fileTypes.PDF.mimeType
          }));
          this.updateFileState(attachment, fileURL, fileTypes.PDF.nature);
          break;
        case fileTypes.JPG.extension:
        case fileTypes.JPEG.extension:
          fileURL = URL.createObjectURL(new Blob([file], {
            type: fileTypes.JPG.mimeType
          }));
          this.updateFileState(attachment, fileURL, fileTypes.JPG.nature);
          break;
        case fileTypes.PNG.extension:
          fileURL = URL.createObjectURL(new Blob([file], {
            type: fileTypes.PNG.mimeType
          }));
          this.updateFileState(attachment, fileURL, fileTypes.PNG.nature);
          break;
        default:
          fileURL = URL.createObjectURL(new Blob([file]));
          this.updateFileState(attachment, fileURL, fileTypes.NOT_HANDLED.nature);
      }
    }
  }, {
    key: "updateFileState",
    value: function updateFileState(attachment, fileURL, fileType) {
      var attachmentContext = this.props.attachmentContext;
      if (attachmentContext !== attachment) {
        this.setState({
          documentUrl: fileURL,
          type: fileType,
          attachment: attachmentContext
        });
      }
    }

    /**
     * Récupération du chemin vers le fichier à afficher dans la visionneuse.
     */
  }, {
    key: "retrieveFile",
    value: function retrieveFile() {
      var _this2 = this;
      var _this$props3 = this.props,
        open = _this$props3.open,
        attachmentContext = _this$props3.attachmentContext,
        getFile = _this$props3.getFile;
      if (open) {
        // C'est côté serveur que le traitement des données du fichier est effectué
        getFile(attachmentContext).then(function (file) {
          _this2.handleFile(file);
        }, function (e) {
          var error = _this2.state.error;
          if (error === "") {
            var intl = _this2.props.intl;
            var errorMsg = intl.formatMessage({
              id: "global_error_technical"
            });
            _this2.setState({
              error: errorMsg,
              documentUrl: "",
              type: ""
            });
          }
          throw e;
        });
      }
    }

    /**
     * Gestion particulière du rendu des fichiers au format PDF.
     */
  }, {
    key: "renderPdf",
    value: function renderPdf() {
      var documentUrl = this.state.documentUrl;
      var intl = this.props.intl;
      var fallbackLinkI18n = "<p class='notSupported'>".concat(intl.formatMessage({
        id: "foj_pdf_viewer_not_supported"
      }), "</p>");
      var options = {
        fallbackLink: fallbackLinkI18n
      };
      _pdfobject["default"].embed(documentUrl, "#preview", options);
    }
  }, {
    key: "render",
    value: function render() {
      var fileName = this.props.fileName;
      var _this$state = this.state,
        documentUrl = _this$state.documentUrl,
        type = _this$state.type,
        error = _this$state.error;
      return /*#__PURE__*/_react["default"].createElement(_documentViewer.DocumentViewerDivContent, null, documentUrl === "" && error === "" && /*#__PURE__*/_react["default"].createElement(_loading["default"], {
        className: "loading",
        active: true,
        spinnerSize: 40
      }), type === fileTypes.NOT_HANDLED.nature || type === fileTypes.PDF.nature && (_globalHelper.GlobalHelper.isIosOnSafari() || _globalHelper.GlobalHelper.isMobileDevice()) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "notHandled"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-cloud-download downloadIcon",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_lead_viewer_unsupportedFile"
      }), /*#__PURE__*/_react["default"].createElement(_link.VeLink, {
        component: _documentViewer.DownloadLink,
        to: documentUrl,
        external: true,
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
        id: "foj_lead_viewer_unsupportedFile_button"
      })))), type === fileTypes.PDF.nature && /*#__PURE__*/_react["default"].createElement(_documentViewer.DocumentPreview, {
        id: "preview"
      }), type === fileTypes.JPG.nature && /*#__PURE__*/_react["default"].createElement(_imageViewer["default"], {
        url: documentUrl,
        fileName: fileName
      }), error !== "" && /*#__PURE__*/_react["default"].createElement("div", {
        className: "error"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-exclamation-circle errorIcon",
        "aria-hidden": "true"
      }), /*#__PURE__*/_react["default"].createElement("div", null, error)));
    }
  }]);
}(_react.Component);
DocumentViewer.defaultProps = {
  rawFile: false // Par defaut le context est une URL et non un fichier
};
var _default = exports["default"] = (0, _reactIntl.injectIntl)(DocumentViewer);