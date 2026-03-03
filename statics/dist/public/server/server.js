"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
/* eslint-disable camelcase */
/* eslint-disable max-len */var bodyParser = require("body-parser");
var util = require("util");
var path = require("path");
var execAsync = util.promisify(require("child_process").exec);
var _require = require("./server/createServer"),
  createServer = _require.createServer;
var _require2 = require("./server/manageRequest"),
  manageRequest = _require2.manageRequest;
var Logger = require("./src/components/logger");
var PORT = Number(process.env.PORT) || 4000;
var CHECK_STATUS_OK = "OK";
var notifyEnable = process.env.NOTIFY_LOAD_ENABLE || null;

/* eslint-disable no-undef */
var _default = exports["default"] = /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee2() {
  var app, env, server, serverAddress;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.n) {
      case 0:
        // initialize the server and configure support for mustache templates
        app = createServer("/dist");
        app.use(bodyParser.json({
          limit: "50mb",
          extended: true
        })); // support json encoded bodies
        app.use(bodyParser.urlencoded({
          extended: true
        }));
        app.set("views", path.resolve(app.get("views")).concat("/public"));

        // universal routing and rendering
        app.post("/render", /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator().m(function _callee(request, res) {
            var body, responseHandle, response, langue, language, localData, googleTagManagerKey, GTM_URl, GTM_TYPE, GTM_DATA_VENDOR, GTM_DATA_PURPOSE, baiduKey;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  /* eslint-disable no-undef */
                  // $FlowFixMe
                  if (false) {
                    /* eslint-disable no-console */
                    console.log("Request", request.url);
                  }
                  body = request.body; // $FlowFixMe body type mixed
                  responseHandle = manageRequest.handle(body);
                  response = Object.assign(responseHandle, {});
                  if (responseHandle) {
                    langue = responseHandle && responseHandle.config && responseHandle.config.portal && responseHandle.config.portal.language && typeof responseHandle.config.portal.language === "string" ? responseHandle.config.portal.language.toLowerCase() : "";
                    language = {
                      html: "",
                      body: ""
                    };
                    if (langue) {
                      language.html = "lang=\"".concat(langue, "\"");
                      language.body = "class=\"".concat(langue, "\"");
                    }
                    response.initialData = JSON.stringify(responseHandle.initialData);
                    response.initialState = JSON.stringify(responseHandle.initialState);
                    response.config = JSON.stringify(responseHandle.config);
                    response.language = language;
                    localData = JSON.parse(responseHandle.initialData);
                    googleTagManagerKey = localData && localData.tracking && localData.tracking.googleTagManagerKey ? localData.tracking.googleTagManagerKey : null;
                    if (googleTagManagerKey) {
                      GTM_URl = "https://www.googletagmanager.com/gtm.js?id=";
                      GTM_TYPE = "didomi/javascript";
                      GTM_DATA_VENDOR = "c:custom-vendor-id";
                      GTM_DATA_PURPOSE = "cookies,analytics";
                      response.scriptTagManager = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});w.veReactTGMSet = true;var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true; j.type=\"".concat(GTM_TYPE, "\"; j[\"data-vendor\"] = \"").concat(GTM_DATA_VENDOR, "\"; j[\"data-purposes\"] = \"").concat(GTM_DATA_PURPOSE, "\"; j.src='").concat(GTM_URl, "'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','").concat(googleTagManagerKey, "');");
                    }
                    baiduKey = localData && localData.tracking && localData.tracking.baiduKey ? localData.tracking.baiduKey : null;
                    if (baiduKey) {
                      response.scriptBaidu = "((w, d, s, i) => {\n        if (!i) {\n          return;\n        }\n        const f = d.getElementsByTagName(s)[0];\n        const hm = d.createElement(s);\n        hm.src = '//hm.baidu.com/hm.js?'+i;\n        f.parentNode.insertBefore(hm, f);\n      })(window, document, \"script\", \"".concat(baiduKey, "\")");
                    }
                  }
                  // En cas d'erreur il faut la signaler à l'application JAVA.
                  if (!(responseHandle.status === false)) {
                    _context.n = 1;
                    break;
                  }
                  console.error("-------------------------------------------------------------");
                  console.error("Ca va pas tres bien => ", responseHandle.ex);
                  console.error("-------------------------------------------------------------");
                  if (notifyEnable === "1") {
                    execAsync("notify-send 'Error =>  ".concat(responseHandle.ex, "'"));
                  }
                  return _context.a(2, res.status(500).send(responseHandle.ex));
                case 1:
                  return _context.a(2, res.render("index.html", response, function (err, html) {
                    if (err) {
                      console.error("Erreur de rendu :", err);
                      return res.status(500).send("Erreur de rendu.");
                    }
                    res.send(html);
                  }));
              }
            }, _callee);
          }));
          return function (_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }());

        // Url de test pour que JAVA puisse tester si le serveur est lancé
        app.get("/check", function (request, res) {
          console.log("Check status", CHECK_STATUS_OK);
          return res.send(CHECK_STATUS_OK);
        });
        app.use(function (err, req, res, next) {
          console.error("-------------------------------------------------------------");
          console.error(err.stack);
          console.error("-------------------------------------------------------------");
          res.status(500).send("Something broke!");
          if (notifyEnable === "1") {
            execAsync("notify-send error 'Something broke! => ".concat(err.stack, "'"));
          }
          next();
        });
        env = process.env.NODE_ENV || "production"; // Création du serveur HTTP sur l'écoute du PORT
        // On ne spécifie pas l'url sur la création du server par rapport aux RPLX
        server = app.listen(PORT, function (err) {
          if (err) {
            if (notifyEnable === "1") {
              execAsync("notify-send error'err => ".concat(err.stack, "'"));
            }
            return console.error(err);
          }
          console.log("Server running on http://".concat(server.address().address, ":").concat(PORT, " [").concat(env, "]"));
        });
        serverAddress = server.address().address; // On écoute les messages process SIGNINT pour interagir avec PM2 (Graceful Shutdown etc...)
        process.on("SIGINT", function () {
          console.info("SIGINT signal received.");
          server.close(function (err) {
            if (err) {
              Logger.error("server sigint: ", err);
              console.error(err);
              if (notifyEnable === "1") {
                execAsync("notify-send error  'err => ".concat(err.stack, "'"));
              }
              process.exit(1);
            }
          });
        });
        return _context2.a(2, {
          close: function close(done) {
            server.close(done);
          },
          baseUrl: "http://".concat(serverAddress, ":").concat(PORT)
        });
    }
  }, _callee2);
}));