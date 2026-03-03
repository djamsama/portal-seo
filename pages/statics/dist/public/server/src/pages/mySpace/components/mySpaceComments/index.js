"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _contextComponent = require("../../../../components/contextComponent");
var _comments = require("./styles/comments");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var MySpaceComments = /*#__PURE__*/function (_ContextComponent) {
  function MySpaceComments(props, context) {
    var _this;
    (0, _classCallCheck2["default"])(this, MySpaceComments);
    _this = _callSuper(this, MySpaceComments, [props, context]);
    _this.inputEditCommentChange = _this.inputEditCommentChange.bind(_this);
    _this.handleUpdateText = _this.handleUpdateText.bind(_this);
    var item = _this.props.item;
    var comments = item.comments ? item.comments : "";
    _this.state = {
      comments: comments
    };
    return _this;
  }

  /**
   * Maj du commentaire
   * @param {SyntheticEvent<HTMLTextAreaElement>} $element
   */
  (0, _inherits2["default"])(MySpaceComments, _ContextComponent);
  return (0, _createClass2["default"])(MySpaceComments, [{
    key: "inputEditCommentChange",
    value: function inputEditCommentChange($element) {
      var comments = $element.currentTarget.value.trim();
      this.setState({
        comments: comments
      });
      this.handleUpdateText(comments);
    }

    /**
     * Appel du service de mise a jour du commentaire
     *
     * @param {string} comments
     */
  }, {
    key: "handleUpdateText",
    value: function handleUpdateText(comments) {
      var _this$context$config$ = this.context.config.portal,
        baseUrl = _this$context$config$.baseUrl,
        locale = _this$context$config$.locale;
      this.props.onBookmarkCommentUpdate(locale, baseUrl, this.props.item.id, this.props.folder.id, comments);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // Pour éviter les appels a chaque changement
      this.handleUpdateText = (0, _debounce["default"])(this.handleUpdateText, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var placeHolder = intl.formatMessage({
        id: "foj_myspace_bookmark_comments"
      });
      return /*#__PURE__*/_react["default"].createElement(_comments.ItemComments, null, /*#__PURE__*/_react["default"].createElement(_comments.BookmarkTextArea, {
        placeholder: placeHolder,
        onChange: this.inputEditCommentChange,
        defaultValue: this.state.comments
      }));
    }
  }]);
}(_contextComponent.ContextComponent);
var _default = exports["default"] = (0, _reactIntl.injectIntl)(MySpaceComments);