"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _semanticUiReact = require("semantic-ui-react");
var _reactIntl = require("react-intl");
var _portalButton = _interopRequireDefault(require("../styles/portalButton"));
var _progress = _interopRequireDefault(require("./components/progress"));
var _dropzone = _interopRequireDefault(require("./components/dropzone"));
var _constants = require("../../commons/constants");
var _upload = require("./styles/upload");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var UploadComponent = /*#__PURE__*/function (_Component) {
  function UploadComponent(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, UploadComponent);
    _this = _callSuper(this, UploadComponent, [props]);
    _this.state = {
      files: [],
      validatedFiles: [],
      uploading: false,
      uploadProgress: {},
      error: ""
    };
    _this.dropzone = /*#__PURE__*/_react["default"].createRef();
    _this.handleClose = _this.handleClose.bind(_this);
    _this.onFilesAdded = _this.onFilesAdded.bind(_this);
    _this.onFileDeleted = _this.onFileDeleted.bind(_this);
    _this.renderDelete = _this.renderDelete.bind(_this);
    _this.deleteFile = _this.deleteFile.bind(_this);
    _this.renderProgress = _this.renderProgress.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.cancel = _this.cancel.bind(_this);
    return _this;
  }

  /**
   * Fermeture de la modale
   * @param {*} event
   */
  (0, _inherits2["default"])(UploadComponent, _Component);
  return (0, _createClass2["default"])(UploadComponent, [{
    key: "handleClose",
    value: function handleClose() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (event) {
        event.preventDefault();
      }
      if (this.props.handleClose) {
        this.setState({
          error: ""
        });
        this.props.handleClose();
      }
    }

    /**
     * On vérifie que la taille cumilée des fichiers ulpoadés et à uploader ne dépasse pas 10Mo.
     * @param {*} files Les fichier à ulpoader
     */
  }, {
    key: "uploadSizeExceeded",
    value: function uploadSizeExceeded(filesUploaded) {
      var maxUploadSize = 1024 * 1024 * _constants.MAX_UPLOAD_FILE_SIZE;
      var files = this.state.files;
      var fileState = this.props.fileState;
      var uploadSize = 0;
      // eslint-disable-next-line no-restricted-syntax
      if (fileState) {
        files.filter(function (fileFilter) {
          return fileState[fileFilter.name];
        }).map(function (file) {
          uploadSize += parseInt("".concat(file.size), 10);
          return true;
        });
      }
      filesUploaded.forEach(function (file) {
        uploadSize += parseInt(file.size, 10);
      });
      return uploadSize > maxUploadSize;
    }

    /**
     * Ajout des fichiers à la listes des fichiers en cours d'upload.
     * @param {*} filesDropped Les fichiers ajoutés
     */
  }, {
    key: "onFilesAdded",
    value: function onFilesAdded(filesDropped) {
      var files = this.state.files;
      // On n'ajoute les fichiers que si la taille cumulée de tous les fichiers à uploader et déjà uploadés ne depasse pas 10Mo
      var maxSizeExceed = this.uploadSizeExceeded(filesDropped);
      if (maxSizeExceed) {
        var intl = this.props.intl;
        var errorMsg = intl.formatMessage({
          id: "foj_myspace_add_pj_weight_error"
        }, {
          0: _constants.MAX_UPLOAD_FILE_SIZE
        });
        this.setState({
          error: errorMsg
        });
      } else {
        // On n'ajoute les fichiers que si son nom est unique dans la liste des fichiers uploadés
        var uniqueFiles = [];
        var existingFileNames = files.map(function (f) {
          return f.name;
        });
        filesDropped.forEach(function (fd) {
          if (!existingFileNames.includes(fd.name)) {
            uniqueFiles.push(fd);
          }
        });

        // Y'a t-il eu un ou plusieurs fichier exclus de l'upload?
        if (uniqueFiles.length === filesDropped.length) {
          // On reset les messages d'erreur
          this.setState({
            error: ""
          });
        } else {
          var _intl = this.props.intl;
          var _errorMsg = _intl.formatMessage({
            id: "foj_myspace_add_pj_unique_error"
          });
          this.setState({
            error: _errorMsg
          });
        }

        // On lance l'upload des fichiers devant l'être
        if (uniqueFiles.length > 0) {
          this.setState(function (prevState) {
            return {
              files: prevState.files.concat(uniqueFiles)
            };
          });
          this.uploadFiles(uniqueFiles);
        }
      }
      return maxSizeExceed;
    }

    /**
     * Mise à jour de la liste des fichiers uploadés suite à une suppression de fichier.
     * @param {*} file Le fichier fraichement supprimé
     */
  }, {
    key: "onFileDeleted",
    value: function onFileDeleted(file) {
      // On nettoie les messages d'erreur suite à une suppression
      this.setState({
        error: ""
      });

      // Mise à jour de la liste de fichiers
      var files = this.state.files;
      if (files !== undefined) {
        var index = files.indexOf(file);
        if (index > -1) {
          files.splice(index, 1);
        }
        this.setState({
          files: files
        });
      }
    }

    /**
     * Validation des fichiers uploadés puis fermeture de la popin.
     */
  }, {
    key: "submit",
    value: function submit() {
      // Validation des fichiers
      var _this$state = this.state,
        files = _this$state.files,
        validatedFiles = _this$state.validatedFiles;
      this.setState({
        validatedFiles: files,
        error: ""
      });

      // Validation des PJ
      this.props.onValidateAttachments(files);

      // Fermeture systématique de la modal
      this.props.handleClose();
    }

    /**
     * Annulation de la popin. On supprime les fichiers uploadés s'ils n'ont pas été validés antérieurement.
     */
  }, {
    key: "cancel",
    value: function cancel() {
      var _this2 = this;
      // Les fichiers fraichement ajoutés ne sont pas validés par l'utilisateur, il faut les supprimer
      var _this$state2 = this.state,
        files = _this$state2.files,
        validatedFiles = _this$state2.validatedFiles;
      var notValidatedFiles = files.filter(function (x) {
        return !validatedFiles.includes(x);
      });
      notValidatedFiles.forEach(function (file) {
        _this2.deleteFile(file);
      });

      // Mise a jour de l'état du composant
      this.setState({
        files: validatedFiles,
        error: ""
      });

      // Fermeture systématique de la modal
      this.props.handleClose();
    }

    /**
     * Upload des fichiers.
     */
  }, {
    key: "uploadFiles",
    value: (function () {
      var _uploadFiles = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(filesToUpload) {
        var _this3 = this;
        var uploadProgress, _this$props, message, uuid, leadContext, promises, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              uploadProgress = this.state.uploadProgress;
              _this$props = this.props, message = _this$props.message, uuid = _this$props.uuid, leadContext = _this$props.leadContext;
              this.setState({
                uploading: true
              });
              promises = [];
              filesToUpload.forEach(function (file) {
                var formData = new FormData();
                formData.append("file", file);
                formData.append("id", uuid);
                formData.append("name", file.name);
                var progressCallback = function progressCallback(progressEvent) {
                  var percentFraction = progressEvent.loaded / progressEvent.total;
                  var percent = Math.floor(percentFraction * 100);
                  var currentCopy = uploadProgress;
                  if (currentCopy !== undefined) {
                    currentCopy[file.name] = {
                      state: "uploading",
                      percentage: percent,
                      size: file.size
                    };
                    _this3.setState({
                      uploadProgress: currentCopy
                    });
                  }
                  if (percentFraction === 1) {
                    var copyDone = uploadProgress;
                    copyDone[file.name] = {
                      state: "done",
                      percentage: 100,
                      size: file.size
                    };
                    _this3.setState({
                      uploadProgress: copyDone
                    });
                  }
                };
                _this3.props.setFileState(file.name, "PENDING");
                promises.push(_this3.props.addAttachment(file.name, formData, leadContext, progressCallback));
              });
              _context.p = 1;
              _context.n = 2;
              return Promise.all(promises);
            case 2:
              this.setState({
                uploading: false
              });
              _context.n = 4;
              break;
            case 3:
              _context.p = 3;
              _t = _context.v;
              // Gestion des erreurs
              this.setState({
                uploading: false
              });
            case 4:
              return _context.a(2);
          }
        }, _callee, this, [[1, 3]]);
      }));
      function uploadFiles(_x) {
        return _uploadFiles.apply(this, arguments);
      }
      return uploadFiles;
    }()
    /**
     * Affichage de la barre de progression. Elle n'est visible que pendant le transfert du fichier et disparait une fois le fichier uploadé sur le filer.
     * @param {*} file Le fichier en cours d'upload
     */
    )
  }, {
    key: "renderProgress",
    value: function renderProgress(file) {
      var fileState = this.props.fileState;
      var uploadProgress = this.state.uploadProgress[file.name];
      if (uploadProgress !== undefined && uploadProgress === "uploading" || uploadProgress !== undefined && fileState && fileState[file.name] && fileState[file.name].state !== "SUCCESS") {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "ProgressWrapper"
        }, /*#__PURE__*/_react["default"].createElement(_progress["default"], {
          progress: uploadProgress ? uploadProgress.percentage : 0
        }));
      }
    }

    /**
     * Affichage de l'icone de suppression d'un fichier. Elle n'est visible que lorsque le fichier est uploadé sur le filer.
     * @param {*} file Le fichier uploadé
     */
  }, {
    key: "renderDelete",
    value: function renderDelete(file) {
      var _this4 = this;
      var _this$props2 = this.props,
        intl = _this$props2.intl,
        fileState = _this$props2.fileState;
      var uploadProgress = this.state.uploadProgress[file.name];
      if (uploadProgress && fileState && fileState[file.name] && fileState[file.name].state === "SUCCESS") {
        return /*#__PURE__*/_react["default"].createElement("span", {
          className: "RemoveFile",
          title: intl.formatMessage({
            id: "foj_myspace_add_pj_remove_tooltip"
          }),
          onClick: function onClick() {
            return _this4.deleteFile(file);
          }
        });
      }
    }

    /**
     * La class CSS du nom de fichier dépend de l'état du fichier: validé, en attente,...
     * @param {*} file le fichier en pièce jointe
     */
  }, {
    key: "fileClassName",
    value: function fileClassName(file) {
      var validatedFiles = this.state.validatedFiles;
      var fileState = this.props.fileState;
      if (validatedFiles && validatedFiles.includes(file)) {
        return "Filename Validated";
      }
      if (fileState && fileState[file.name] && fileState[file.name].state === "FAILURE") {
        return "Filename Failed";
      }
      return "Filename Pending";
    }

    /** Conversion Bytes vers Mo. */
  }, {
    key: "roundSize",
    value: function roundSize(bytes) {
      return Math.round(bytes / (1024 * 1024) * 100) / 100;
    }

    /**
     * Suppression d'un fichier.export default injectIntl(UploadComponent);
     * @param {*} file Le fichier à supprimer
     */
  }, {
    key: "deleteFile",
    value: function deleteFile(file) {
      var _this5 = this;
      // On renseigne les informations nécéssaires à la localisation du fichier sur le filer
      var _this$props3 = this.props,
        message = _this$props3.message,
        uuid = _this$props3.uuid,
        leadContext = _this$props3.leadContext;
      var formData = new FormData();
      formData.append("id", uuid);
      formData.append("rfqId", message !== undefined ? message.rfqId : null);
      formData.append("name", file.name);

      // C'est côté serveur que la suppression est effectuée
      this.props.deleteAttachment(file.name, formData, leadContext).then(function () {
        // Mise à jour de l'état du composant
        _this5.onFileDeleted(file);
      }, function (e) {
        var intl = _this5.props.intl;
        var errorMsg = intl.formatMessage({
          id: "global_error_technical"
        });
        _this5.setState({
          error: errorMsg
        });
        _this5.props.setFileState(file.name, "FAILURE");
        throw e;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;
      var _this$props4 = this.props,
        open = _this$props4.open,
        intl = _this$props4.intl,
        addAttachment = _this$props4.addAttachment,
        message = _this$props4.message;
      var error = this.state.error;
      return (
        /*#__PURE__*/
        // Composant animation semantic de la modal.
        _react["default"].createElement(_semanticUiReact.TransitionablePortal, {
          open: open,
          transition: {
            animation: "fade down",
            duration: 500
          }
        }, /*#__PURE__*/_react["default"].createElement(_upload.UploadModal, {
          open: open,
          onClose: this.handleClose,
          closeIcon: true,
          closeOnDimmerClick: false,
          size: "small"
        }, /*#__PURE__*/_react["default"].createElement(_semanticUiReact.Modal.Content, null, /*#__PURE__*/_react["default"].createElement(_upload.ModalUploadDivContent, null, /*#__PURE__*/_react["default"].createElement(_upload.UploadModalHeader, null, intl.formatMessage({
          id: "foj_myspace_add_pj_title"
        })), /*#__PURE__*/_react["default"].createElement(_upload.UploadModalContentContainer, null, /*#__PURE__*/_react["default"].createElement(_dropzone["default"], {
          ref: this.dropzone,
          error: error,
          add: addAttachment,
          onFilesAdded: this.onFilesAdded,
          disabled: this.state.uploading
        }), /*#__PURE__*/_react["default"].createElement(_upload.UploadModalFilesList, null, this.state.files.map(function (file) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: file.name,
            className: "Row"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "FileDetails"
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: _this6.fileClassName(file)
          }, file.path, " - ", _this6.roundSize(file.size), " Mo"), _this6.renderDelete(file)), _this6.renderProgress(file));
        }))), /*#__PURE__*/_react["default"].createElement(_upload.UploadModalFooter, null, /*#__PURE__*/_react["default"].createElement(_portalButton["default"], {
          as: "button",
          className: "cancel-btn",
          onClick: this.cancel
        }, intl.formatMessage({
          id: "foj_myspace_add_pj_cancel"
        })), /*#__PURE__*/_react["default"].createElement(_portalButton["default"], {
          as: "button",
          type: "submit",
          disabled: this.state.uploading,
          className: "validate-btn",
          onClick: this.submit
        }, intl.formatMessage({
          id: "foj_myspace_add_pj_validate"
        })))))))
      );
    }
  }]);
}(_react.Component);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(UploadComponent);