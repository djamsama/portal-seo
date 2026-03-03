"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _styledComponents = require("styled-components");
var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));
var _reduxThunk = require("redux-thunk");
var _reduxForm = require("redux-form");
var _veDesignSystem = require("ve-design-system");
var _context = require("../../../../../../context");
var _exhibitFormLegacy = _interopRequireDefault(require("../components/exhibitFormLegacy"));
var _exhibitFormOptimized = _interopRequireDefault(require("../components/exhibitFormOptimized"));
var _exhibitFormLegacy2 = require("../components/exhibitFormLegacy/styles/exhibitFormLegacy");
var _index = _interopRequireDefault(require("../index"));
var _theme = require("../../../../../../components/theme");
var _exhibitFormOptimized2 = require("../components/exhibitFormOptimized/styles/exhibitFormOptimized");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // Importez les composants enfants
/* eslint-disable no-undef, no-unused-vars */
var t = _theme.theme.ae;
var initData = {};
var mockStore = (0, _reduxMockStore["default"])([_reduxThunk.thunk]);
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

// --- Données Contextuelles de Base ---
var baseInitData = {
  civilities: {
    "1": "Mr.",
    "2": "Ms."
  },
  universSectors: {
    "1": "Furniture",
    "2": "Public buildings"
  },
  companyTypesLabels: {
    "2": "Manufacturer",
    "3": "Subsidiary manufacturer"
  },
  countries: {
    "76": "France",
    "68": "Spain"
  },
  aboutUs: [{
    labelKeyI18n: "fo_fa_HDYHAU_Advertisement",
    id: "ADVERTISEMENT"
  }],
  // Nécessaire pour éviter les erreurs de lecture de propriétés
  nbMaxOfCharMsgFaField: 500,
  phoneCode: "33",
  countryCode: "FR"
};

// --- Définition des Contextes de Test ---
var testEnvironments = [{
  name: "Legacy Form (isOptimizationToFAFormEnabled: false)",
  context: {
    config: {
      portal: portal
    },
    initData: _objectSpread(_objectSpread({}, baseInitData), {}, {
      isOptimizationToFAFormEnabled: false
    })
  },
  expectedFieldCount: 15,
  // Champs Legacy
  formComponent: _exhibitFormLegacy["default"],
  formSelector: _exhibitFormLegacy2.StyledForm,
  // Nom d'un champ requis dans le formulaire Legacy
  requiredFieldName: "firstName"
}, {
  name: "Optimized Form (isOptimizationToFAFormEnabled: true)",
  context: {
    config: {
      portal: portal
    },
    initData: _objectSpread(_objectSpread({}, baseInitData), {}, {
      isOptimizationToFAFormEnabled: true,
      // Ces champs sont lus dans ExhibitFormOptimized ou le parent
      exhibitCommand: {
        displayLocalCompanyName: true
      }
    })
  },
  expectedFieldCount: 7,
  // Champs Optimisés (4 visibles + 2 hidden + 1 FieldPhoneModern)
  formComponent: _exhibitFormOptimized["default"],
  formSelector: _exhibitFormOptimized2.NewStyledForm,
  // Nom d'un champ requis dans le formulaire Optimisé
  requiredFieldName: "lastName"
}];

// =======================================================================
// TESTS SIMULTANÉS VIA ITÉRATION
// =======================================================================

testEnvironments.forEach(function (_ref) {
  var name = _ref.name,
    context = _ref.context,
    expectedFieldCount = _ref.expectedFieldCount,
    formComponent = _ref.formComponent,
    formSelector = _ref.formSelector,
    requiredFieldName = _ref.requiredFieldName;
  describe("ExhibitForm - Comportement du ".concat(name), function () {
    var ExhibitFormContainer = (0, _reduxForm.reduxForm)({
      form: "exhibitForm"
    })(_index["default"]);

    // --- 1. Vérification de la structure ---
    test("V\xE9rification de la structure : ".concat(expectedFieldCount, " champs + 1 bouton"), function () {
      var exhibitForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
        value: context
      }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
        store: store
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: t
      }, /*#__PURE__*/_react["default"].createElement(ExhibitFormContainer, {
        initData: initData,
        intl: testIntl
      })))));

      // Le composant enfant est-il rendu ?
      expect(exhibitForm.find(formComponent)).toHaveLength(1);

      /* Le Composant doit contenir le nombre attendu de champs Field et un bouton de soumission. */
      var form = exhibitForm.find(formSelector);
      expect(form.find(_reduxForm.Field)).toHaveLength(expectedFieldCount);
      expect(form.find(_veDesignSystem.Button)).toHaveLength(1);
    });

    // --- 2. Vérification de la soumission ---
    // ✅ CORRECTION DE L'ERREUR 'THEN': onSubmit doit retourner une promesse.
    test("Vérification de la soumission du formulaire (appel onSubmit)", function () {
      // Le mock doit retourner une Promesse résolue pour satisfaire le .then() dans clickSubmit
      var mockOnSubmit = sinon.spy(function () {
        return Promise.resolve();
      });
      var exhibitForm = mountWithIntl(/*#__PURE__*/_react["default"].createElement(_context.AppContext.Provider, {
        value: context
      }, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
        store: store
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: t
      }, /*#__PURE__*/_react["default"].createElement(ExhibitFormContainer, {
        initData: initData,
        intl: testIntl,
        onSubmit: mockOnSubmit // Passe le mock comme fonction de soumission réelle
      })))));

      // Simuler la soumission sur le tag <form> réel.
      exhibitForm.find(formSelector).simulate("submit");

      // On vérifie que la fonction mockée a été appelée.
      expect(mockOnSubmit.calledOnce).toBe(true);
    });
  });
});