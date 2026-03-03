"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _formattedHTMLMessage = _interopRequireDefault(require("../../formattedHTMLMessage"));
var _index = _interopRequireDefault(require("../index"));
/* eslint-disable no-undef */

var messages = require("../../../../tools/utils-test/assets/jestMessages.json");
var innerWidthInitial = global.window.innerWidth;
beforeEach(function () {
  global.window.innerWidth = 1540;
});
afterEach(function () {
  global.window.innerWidth = innerWidthInitial;
});
describe("Responsive Message", function () {
  /** ******  Desktop ******* */
  it(" Desktop message should be display", function () {
    /** Tous les id remplis, la fenetre est desktop */
    var messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idTablet: "tablet_key_without_value",
      idMobile: "mobile_key_with_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.desktop_key_without_value);
    expect(messagesSansValue.find(_reactIntl.FormattedMessage).exists()).toEqual(true);

    /**  la fenetre est desktop, il y a une cle avec des values a remplace on ne met pas de values */
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_with_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.desktop_key_with_value);

    /**  la fenetre est desktop avec des values à remplacer */
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_with_value",
      values: {
        "0": "un param",
        "1": "une autre param"
      }
    }));
    expect(messagesSansValue.text()).toBe("Clé visible sur une fenetre desktop un param une autre param avec 2 values a remplacer");

    /**  la fenetre est mobile mais il n'y a que l'id desktop renseigné */
    global.window.innerWidth = 740;
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.desktop_key_without_value);
  });

  /** ******  Tablette ******* */
  it(" Tablet message should be display", function () {
    global.window.innerWidth = 1012;

    /** Tous les id remplis, la fenetre est tablette */
    var messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idTablet: "tablet_key_without_value",
      idMobile: "mobile_key_with_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.tablet_key_without_value);

    /** Tous les id remplis, la fenetre est mobile, l'id mobile ne renvoie rien */
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idTablet: "tablet_key_is_empty",
      idMobile: "mobile_key_with_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.desktop_key_without_value);

    /** Tous les id remplis, la fenetre est tablette il y a des values a remplacer il n'y a que values "desktop" renseignées */
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_with_value",
      idTablet: "tablet_key_with_value",
      values: {
        "0": "un param",
        "1": "une autre param"
      }
    }));
    expect(messagesSansValue.text()).toBe("Clé visible sur une fenetre tablette un param une autre param avec 2 values a remplacer");

    /** Tous les id remplis, la fenetre est tablet il y a des valuesTablettes a remplacer */

    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_with_value",
      idTablet: "tablet_key_with_value",
      values: {
        "0": "un param",
        "1": "une autre param"
      },
      tabletValues: {
        "0": "un paramTablette",
        "1": "une autre paramTablette"
      }
    }));
    expect(messagesSansValue.text()).toBe("Clé visible sur une fenetre tablette un paramTablette une autre paramTablette avec 2 values a remplacer");

    /**  la fenetre est mobile mais il n'y a pas d'id mobile renseigné */
    global.window.innerWidth = 740;
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idTablet: "tablet_key_without_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.tablet_key_without_value);
  });

  /** ******  Mobile ******* */
  it(" Mobile message should be display", function () {
    global.window.innerWidth = 700;
    /** Tous les id remplis, la fenetre est mobile */
    var messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idTablet: "tablet_key_without_value",
      idMobile: "mobile_key_without_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.mobile_key_without_value);

    /** Tous les id remplis, la fenetre est mobile, l'id mobile ne renvoie rien */
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idTablet: "tablet_key_without_value",
      idMobile: "mobile_key_is_empty"
    }));
    expect(messagesSansValue.text()).toBe(messages.desktop_key_without_value);

    /** Tous les id remplis, la fenetre est mobile il y a des values a remplacer il n'y a que values "desktop" renseignées */
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_with_value",
      idMobile: "mobile_key_with_value",
      values: {
        "0": "un param",
        "1": "une autre param"
      }
    }));
    expect(messagesSansValue.text()).toBe("Clé visible sur une fenetre mobile un param une autre param avec 2 values a remplacer");

    /** Tous les id remplis, la fenetre est mobile il y a des valuesMobiles a remplacer  */

    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_with_value",
      idMobile: "mobile_key_with_value",
      values: {
        "0": "un param",
        "1": "une autre param"
      },
      mobileValues: {
        "0": "un paramMobile",
        "1": "une autre paramMobile"
      }
    }));
    expect(messagesSansValue.text()).toBe("Clé visible sur une fenetre mobile un paramMobile une autre paramMobile avec 2 values a remplacer");

    /**  la fenetre est tablette mais il n'y a pas d'id tablette renseigné */
    global.window.innerWidth = 1012;
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "desktop_key_without_value",
      idMobile: "mobile_key_without_value"
    }));
    expect(messagesSansValue.text()).toBe(messages.mobile_key_without_value);
  });

  /** ******  HTML ******* */
  it("Message with HTML", function () {
    /** Tous les id remplis, la fenetre est desktop */
    var messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "key_with_html"
    }));
    expect(messagesSansValue.text()).toBe(messages.key_with_html);
    expect(messagesSansValue.find(_reactIntl.FormattedMessage).exists()).toEqual(true);
    messagesSansValue = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_index["default"], {
      id: "key_with_html"
    }));
    expect(messagesSansValue.text()).toBe("Clé avec du code html <span>{0} {1}</span> et 2 values a remplacer");
    expect(messagesSansValue.find(_reactIntl.FormattedMessage).exists()).toEqual(true);
  });
});