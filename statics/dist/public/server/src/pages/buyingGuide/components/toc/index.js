"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _buyingGuide = require("../../styles/buyingGuide");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var TableOfContents = function TableOfContents(_ref) {
  var title = _ref.title,
    items = _ref.items,
    author = _ref.author,
    role = _ref.role,
    avatar = _ref.avatar;
  var _useState = (0, _react.useState)(items[0] ? items[0].id : null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    activeId = _useState2[0],
    setActiveId = _useState2[1];
  (0, _react.useEffect)(function () {
    if (!items.length) return undefined;
    setActiveId(items[0].id);
    var sections = items.map(function (item) {
      return document.getElementById(item.id);
    }).filter(Boolean);
    if (!sections.length) return undefined;
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        var visible = entries.filter(function (entry) {
          return entry.isIntersecting;
        }).sort(function (a, b) {
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });
        if (visible[0] && visible[0].target && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      }, {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.1, 0.5, 1]
      });
      sections.forEach(function (section) {
        return observer.observe(section);
      });
      return function () {
        return observer.disconnect();
      };
    }
    var onScroll = function onScroll() {
      var offset = window.innerHeight * 0.35;
      var current = items[0].id;
      for (var i = 0; i < sections.length; i += 1) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top - offset <= 0) {
          current = sections[i].id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return function () {
      return window.removeEventListener("scroll", onScroll);
    };
  }, [items]);
  return /*#__PURE__*/_react["default"].createElement(_buyingGuide.Toc, null, /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocHeader, null, title), /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocList, null, items.map(function (item) {
    var isActive = item.id === activeId;
    return /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocItem, {
      key: item.id,
      href: "#".concat(item.id),
      onClick: function onClick(event) {
        var target = document.getElementById(item.id);
        if (target) {
          event.preventDefault();
          var top = target.getBoundingClientRect().top + window.pageYOffset - 40;
          window.scrollTo({
            top: top,
            behavior: "smooth"
          });
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocItemMarker, {
      "data-active": isActive ? "true" : "false"
    }), /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocItemLabel, {
      "data-active": isActive ? "true" : "false"
    }, item.label));
  })), (author || role) && /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocAuthor, null, avatar && /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocAuthorAvatar, {
    src: avatar,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", null, author && /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocAuthorName, null, author), role && /*#__PURE__*/_react["default"].createElement(_buyingGuide.TocAuthorRole, null, role))));
};
TableOfContents.defaultProps = {
  author: "",
  role: "",
  avatar: ""
};
var _default = exports["default"] = TableOfContents;