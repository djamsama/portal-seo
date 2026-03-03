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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _autocomplete = require("./styles/autocomplete");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /**
    Composant pour l'autocompletion
    voir props plus bas
 */ /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable no-plusplus */
var AutocompleteSimple = /*#__PURE__*/function (_Component) {
  function AutocompleteSimple(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, AutocompleteSimple);
    _this = _callSuper(this, AutocompleteSimple, [props]);
    (0, _defineProperty2["default"])(_this, "onChange", function (e) {
      var suggestions = _this.props.suggestions;
      var inputValue = e.currentTarget.value;
      var filteredRow = [];
      // il y a des suggestions
      if (suggestions) {
        // pour declencher des suggestions sur le click il faut un object {label:"unLabel", value:"uneValue"}
        if (suggestions[0] && suggestions[0].label) {
          filteredRow = !e.currentTarget.value || e.currentTarget.value === "" ? suggestions : suggestions.filter(function (suggestion) {
            return suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
          });
        } else {
          // ou un string
          filteredRow = !e.currentTarget.value || e.currentTarget.value === "" ? suggestions : suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
          });
        }
      }
      _this.setState({
        activeRow: 0,
        filteredRow: filteredRow,
        showAutocomplete: true,
        inputValue: e.currentTarget.value
      });
    });
    (0, _defineProperty2["default"])(_this, "onBlur", function () {
      _this.setState({
        activeRow: 0,
        filteredRow: [],
        showAutocomplete: false
      });
    });
    (0, _defineProperty2["default"])(_this, "onFocus", function (e) {
      var _this2 = _this,
        onChange = _this2.onChange,
        showAutocomplete = _this2.state.showAutocomplete,
        _this2$props = _this2.props,
        nbElementToShow = _this2$props.nbElementToShow,
        onChangeCallBack = _this2$props.onChangeCallBack;
      if (onChangeCallBack && typeof e.currentTarget.value !== "undefined" && /** $FlowFixMe */
      e.currentTarget.value.length >= nbElementToShow && !showAutocomplete) {
        var onFocusShowAll = _this.props.onFocusShowAll;
        if (onFocusShowAll) {
          var suggestions = _this.props.suggestions;
          var filteredRow = [];
          suggestions.forEach(function (val) {
            return filteredRow.push(_objectSpread({}, val));
          });
          filteredRow.unshift(filteredRow.splice(filteredRow.findIndex(function (item) {
            return item.value === e.currentTarget.value;
          }), 1)[0]);
          _this.setState({
            activeRow: 0,
            filteredRow: filteredRow,
            showAutocomplete: true,
            inputValue: e.currentTarget.value
          });
        } else {
          onChange(e);
        }
      }
    });
    (0, _defineProperty2["default"])(_this, "onClickInput", function (e) {
      // Click sur l'input
      var _this3 = _this,
        onChange = _this3.onChange;
      onChange(e);
    });
    // Click sur un li de l'autocomplete
    (0, _defineProperty2["default"])(_this, "onClick", function (e, value) {
      // On a clicker sur une suggestion de l'autocomplete on  execute la callBack s'il y en a une
      var onChangeCallBack = _this.props.onChangeCallBack;
      if (onChangeCallBack) {
        onChangeCallBack(value);
      }
      // On met a jour la valeur de l'input
      _this.setState({
        activeRow: 0,
        filteredRow: [],
        showAutocomplete: false,
        inputValue: value
      });
    });
    (0, _defineProperty2["default"])(_this, "onKeyDown", function (e) {
      var _this$state = _this.state,
        activeRow = _this$state.activeRow,
        filteredRow = _this$state.filteredRow;
      /** $FlowFixMe */
      if (e.keyCode === 13) {
        // click sur le touche entrée
        _this.setState({
          activeRow: 0,
          showAutocomplete: false,
          inputValue: filteredRow[activeRow]
        });
      }
      // click sur la fleche du haut
      else if (e.keyCode === 38) {
        if (activeRow === 0) {
          return;
        }
        _this.setState({
          activeRow: activeRow - 1
        });
      }
      // click sur la fleche bas
      else if (e.keyCode === 40) {
        if (activeRow - 1 === filteredRow.length) {
          return;
        }
        _this.setState({
          activeRow: activeRow + 1
        });
      }
    });
    _this.state = {
      activeRow: 0,
      filteredRow: [],
      showAutocomplete: false,
      inputValue: props.value
    };
    return _this;
  }
  (0, _inherits2["default"])(AutocompleteSimple, _Component);
  return (0, _createClass2["default"])(AutocompleteSimple, [{
    key: "render",
    value: function render() {
      var onChange = this.onChange,
        onFocus = this.onFocus,
        _onClick = this.onClick,
        onClickInput = this.onClickInput,
        onKeyDown = this.onKeyDown,
        onBlur = this.onBlur,
        _this$state2 = this.state,
        activeRow = _this$state2.activeRow,
        filteredRow = _this$state2.filteredRow,
        showAutocomplete = _this$state2.showAutocomplete,
        inputValue = _this$state2.inputValue,
        _this$props = this.props,
        autoComplete = _this$props.autoComplete,
        name = _this$props.name,
        id = _this$props.id,
        dataCy = _this$props.dataCy,
        placeHolder = _this$props.placeHolder,
        classNameProps = _this$props.className,
        component = _this$props.component,
        wrapperWith = _this$props.wrapperWith,
        validate = _this$props.validate;
      var suggestionsListComponent;
      if (showAutocomplete) {
        if (filteredRow.length) {
          suggestionsListComponent = /*#__PURE__*/_react["default"].createElement("div", {
            className: "wrapper-suggestions"
          }, /*#__PURE__*/_react["default"].createElement("ul", {
            className: "suggestions"
          }, filteredRow.map(function (suggestion, index) {
            var className = "";
            // Les suggestions sont soit des objects {label:"unLabel", value:"uneValue"} soit des string
            var suggest = suggestion.label ? suggestion.label : suggestion;
            // Suggestion sélectionnée
            if (suggestion.value) {
              if (suggestion.value === inputValue) {
                className = "suggestion-active";
              }
            } else if (index === activeRow) {
              className = "suggestion-active";
            }
            return /*#__PURE__*/_react["default"].createElement("li", {
              className: className,
              key: "".concat(suggest, " ").concat(index.toString()),
              onClick: function onClick(ev) {
                return _onClick(ev, suggestion.value ? suggestion.value : suggestion);
              },
              onKeyDown: function onKeyDown(ev) {
                return _onClick(ev, suggestion.value ? suggestion.value : suggestion);
              },
              onMouseDown: function onMouseDown(e) {
                return e.preventDefault();
              },
              "data-type": "suggestWrapper",
              "data-value": suggestion.value ? suggestion.value : suggestion
            }, suggest);
          })));
        } else {
          suggestionsListComponent = /*#__PURE__*/_react["default"].createElement(_react.Fragment, null);
        }
      }
      var AutoCompleteInput = component;
      return /*#__PURE__*/_react["default"].createElement(_autocomplete.AutoCompleteWrapper, {
        wrapperWith: wrapperWith
      }, AutoCompleteInput && /*#__PURE__*/_react["default"].createElement(AutoCompleteInput, {
        type: "text",
        name: name,
        component: "input",
        className: classNameProps,
        id: id,
        "data-cy": dataCy,
        onFocus: onFocus,
        onClick: onClickInput,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onBlur: onBlur,
        value: inputValue,
        validate: validate,
        placeholder: placeHolder,
        "aria-autocomplete": "list",
        autoComplete: autoComplete || "new-password",
        "aria-haspopup": "true"
      }), !AutoCompleteInput && /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: name,
        id: id,
        "data-cy": dataCy,
        onFocus: onFocus,
        onClick: onClickInput,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onBlur: onBlur,
        value: inputValue,
        placeholder: placeHolder,
        "aria-autocomplete": "list",
        autoComplete: autoComplete || "new-password",
        "aria-haspopup": "true"
      }), suggestionsListComponent);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = AutocompleteSimple;
AutocompleteSimple.defaultProps = {
  suggestions: [],
  nbElementToShow: 2,
  component: null,
  wrapperWith: null,
  value: "",
  validate: null,
  onFocusShowAll: false
};