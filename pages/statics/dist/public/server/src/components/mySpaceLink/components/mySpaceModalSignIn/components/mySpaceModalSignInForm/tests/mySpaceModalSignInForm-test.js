"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _veDesignSystem = require("ve-design-system");
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reduxForm = require("redux-form");
var _testUtils = require("react-dom/test-utils");
var _context = require("../../../../../../../context");
var _mySpaceModalSignInForm = require("../styles/mySpaceModalSignInForm");
var _fieldWithLabel = _interopRequireDefault(require("../../../../../../fieldWithLabel"));
var _fieldReCaptcha = _interopRequireDefault(require("../../../../../../fieldReCaptcha"));
var _index = _interopRequireDefault(require("../index"));
var _theme = require("../../../../../../theme");
/* eslint-disable no-undef, no-unused-vars */
var t = _theme.theme.ae;
var initData = {};
var middlewares = [_reduxThunk.thunk];
var mockStore = (0, _reduxMockStore["default"])(middlewares);
var InitiateState = function InitiateState() {
  return {};
};
var store = mockStore(InitiateState);
var portal = {
  subDomain: "WORLD_WIDE_WEB",
  site: "AE",
  language: "FR",
  baseUrl: "archiexpo.fr",
  siteLabel: "archiexpo",
  tld: "fr",
  locale: "fr",
  domain: "archiexpo.fr"
};

/* On vérifie la structure du formulaire. */
test("test mySpaceSignInForm structure", function () {
  var context = {
    config: {
      portal: portal
    },
    initData: {}
  };
  var MySpaceSignInFormContainer = (0, _reduxForm.reduxForm)({
    form: "MySpaceSignInForm"
  })(_index["default"]);
  var mySpaceSignInForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(MySpaceSignInFormContainer, {
    initData: initData,
    intl: testIntl
  })))));
  (0, _testUtils.act)(function () {
    /* Le Composant est composé d'un styled component 'SignInForm'. */
    expect(mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm)).toHaveLength(1);

    /* Qui lui même est composé de 5 champs de type texte, d'un champ RECAPTCHA et d'un bouton de soumission. */
    expect(mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldWithLabel["default"])).toHaveLength(5);
    expect(mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldReCaptcha["default"])).toHaveLength(1);
    expect(mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_veDesignSystem.Button)).toHaveLength(1);
  });
});

/* On vérifie l'appel à la fonction 'handleSubmit' lors d'un clic sur le bouton valider. */
test("test mySpaceSignInForm submission", function () {
  var spySubmit = sinon.spy();
  var context = {
    config: {
      portal: portal
    },
    initData: {}
  };
  var MySpaceSignInFormContainer = (0, _reduxForm.reduxForm)({
    form: "MySpaceSignInForm"
  })(_index["default"]);
  var mySpaceSignInForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(MySpaceSignInFormContainer, {
    initData: initData,
    intl: testIntl,
    handleSubmit: spySubmit
  })))));
  (0, _testUtils.act)(function () {
    mySpaceSignInForm.simulate("submit");
    expect(spySubmit.calledOnce).toBe(true);
  });
});

/* On vérifie que si la validation échoue (mots de passe différents) on n'arrive pas à l'appel de la fonction onSubmit. */
test("test mySpaceSignInForm validation", function () {
  var spySubmit = sinon.spy();
  var context = {
    config: {
      portal: portal
    },
    initData: {}
  };
  var MySpaceSignInFormContainer = (0, _reduxForm.reduxForm)({
    form: "MySpaceSignInForm"
  })(_index["default"]);
  var mySpaceSignInForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
    value: context
  }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
    theme: t
  }, /*#__PURE__*/_react["default"].createElement(MySpaceSignInFormContainer, {
    initData: initData,
    intl: testIntl,
    onSubmit: spySubmit
  })))));
  (0, _testUtils.act)(function () {
    var firstNameInput = mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldWithLabel["default"])
    // eslint-disable-next-line quotes
    .find('input[name="firstName"]').at(0);
    expect(firstNameInput).toHaveLength(1);
    firstNameInput.simulate("change", {
      target: {
        value: "Un prénom"
      }
    });
    var lastNameInput = mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldWithLabel["default"])
    // eslint-disable-next-line quotes
    .find('input[name="lastName"]').at(0);
    lastNameInput.simulate("change", {
      target: {
        value: "Un nom"
      }
    });
    var emailInput = mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldWithLabel["default"])
    // eslint-disable-next-line quotes
    .find('input[name="email"]').at(0);
    emailInput.simulate("change", {
      target: {
        value: "un.email@test.com"
      }
    });
    var passInput = mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldWithLabel["default"])
    // eslint-disable-next-line quotes
    .find('input[name="password"]').at(0);
    passInput.simulate("change", {
      target: {
        value: "Un pass"
      }
    });
    var passConfirmInput = mySpaceSignInForm.find(_mySpaceModalSignInForm.SignInForm).find(_fieldWithLabel["default"])
    // eslint-disable-next-line quotes
    .find('input[name="confirmPassword"]').at(0);
    passConfirmInput.simulate("change", {
      target: {
        value: "Un pass"
      }
    });
    mySpaceSignInForm.simulate("submit");
    expect(spySubmit.notCalled).toBe(true);
  });
});