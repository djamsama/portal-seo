"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requiredPhone = exports.requiredCaptcha = exports.required = exports.number = exports.nameChars = exports.minValue = exports.minLength3 = exports.minLength2 = exports.minLength = exports.maxLength50 = exports.maxLength3 = exports.maxLength255 = exports.maxLength150 = exports.maxLength = exports.expirationDate = exports.email = exports.cardNumber = exports.alphaNumNoSpace = exports.PhonePrefix = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var required = exports.required = function required(value) {
  return value || typeof value === "number" ? undefined : {
    id: "foj_myspace_account_form_mandatory",
    values: {}
  };
};
var requiredCaptcha = exports.requiredCaptcha = function requiredCaptcha(value) {
  return value || typeof value === "number" ? undefined : {
    id: "fo_global_error_captcha_invalid_response",
    values: {}
  };
};
var maxLength = exports.maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? {
      id: "foj_myspace_maxLenghtError",
      values: {
        0: max
      }
    } : undefined;
  };
};
var maxLength3 = exports.maxLength3 = maxLength(3);
var maxLength50 = exports.maxLength50 = maxLength(50);
var maxLength150 = exports.maxLength150 = maxLength(150);
var maxLength255 = exports.maxLength255 = maxLength(255);
var minLength = exports.minLength = function minLength(min, key) {
  return function (value) {
    return value && value.length < min ? {
      id: key,
      values: {
        0: min
      }
    } : undefined;
  };
};
var minLength2 = exports.minLength2 = minLength(2, "foj_myspace_minLenghtError");
var minLength3 = exports.minLength3 = minLength(3, "foj_myspace_minLenghtError");
var number = exports.number = function number(value) {
  return value && Number.isNaN(Number(value)) ? {
    id: "fo_global_invalid_error",
    values: {}
  } : undefined;
};
var minValue = exports.minValue = function minValue(min) {
  return function (value) {
    return value && value < min ? {
      id: "fo_global_invalid_error",
      values: {}
    } : undefined;
  };
};
var email = exports.email = function email(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(value) ? {
    id: "fo_global_error_emailInvalid",
    values: {}
  } : undefined;
};

// Valeur: lettre ou - (pour les prenoms ou noms composés)
/* eslint-disable max-len */
var nameChars = exports.nameChars = function nameChars(value) {
  return (
    // eslint-disable-next-line max-len
    value && !/^([A-ZÀ-ÿ\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\u0400-\u04FF-]+)(\s[A-ZÀ-ÿ\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\u0400-\u04FF-]+)?$/i.exec(value) ? {
      id: "fo_global_invalid_error",
      values: {}
    } : undefined
  );
};

// Valeur: lettre ou - (pour les prenoms ou noms composés)
var alphaNumNoSpace = exports.alphaNumNoSpace = function alphaNumNoSpace(value) {
  return value && !/^[0-9a-zA-Z(\-)]+$/.exec(value) ? {
    id: "fo_global_invalid_error",
    values: {}
  } : undefined;
};
var expirationDate = exports.expirationDate = function expirationDate(value) {
  if (!value) return undefined;
  if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/i.exec(value)) {
    return {
      id: "fo_global_invalid_error",
      values: {}
    };
  }
  var cardDate = value.replace("/", "").trim();
  var currentDate = new Date();
  // Requires 2 digit for month and 2 digits for year
  if (cardDate.length === 4) {
    var year = parseInt(cardDate.substr(2, 2), 10) + 2000;
    var month = parseInt(cardDate.substr(0, 2), 10);
    if (month > 0 && month <= 12) {
      var currentYear = currentDate.getFullYear();
      if (currentYear < year) return undefined;
      if (currentYear === year) {
        var currentMonth = currentDate.getMonth() + 1;
        if (currentMonth <= month) return undefined;
      }
      return {
        id: "fo_global_invalid_error",
        values: {}
      };
    }
  }
  return {
    id: "fo_global_invalid_error",
    values: {}
  };
};
var cardNumber = exports.cardNumber = function cardNumber(value) {
  if (!/^([0-9\s]{19,23})$/i.exec(value)) {
    return {
      id: "fo_global_invalid_error",
      values: {}
    };
  }
  var cNumber = value.trim().replace(/\D/g, "");
  // From https://stackoverflow.com/questions/12310837/implementation-of-luhn-algorithm
  var nCheck = 0;
  var bEven = false;
  for (var n = cNumber.length - 1; n >= 0; n -= 1) {
    var cDigit = cNumber.charAt(n);
    var nDigit = parseInt(cDigit, 10);
    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  if (nCheck % 10 !== 0) {
    return {
      id: "fo_global_invalid_error",
      values: {}
    };
  }
  return undefined;
};
var PhonePrefix = exports.PhonePrefix = /*#__PURE__*/(0, _createClass2["default"])(function PhonePrefix(list) {
  var _this = this;
  (0, _classCallCheck2["default"])(this, PhonePrefix);
  (0, _defineProperty2["default"])(this, "phonePrefix", function (value) {
    var testingValue = value;
    var plus = "";
    if (testingValue && typeof testingValue === "string" && testingValue[0].trim() !== "+") {
      plus = "+";
    }
    if (testingValue && !/^(\+[0-9-]{1,6})$/i.exec("".concat(plus).concat(value))) {
      return {
        id: "fo_global_invalid_error",
        values: {}
      };
    }
    if (_this.phoneCodes.length > 0 && testingValue && typeof testingValue === "string" && testingValue.trim() !== "") {
      var valuesInList = [];
      _this.phoneCodes.map(function (phoneCode) {
        // eslint-disable-next-line eqeqeq
        if (phoneCode && phoneCode.value && phoneCode.value == "".concat(plus).concat(value)) {
          valuesInList.push(phoneCode);
        }
        return true;
      });
      if (testingValue && valuesInList.length < 1) {
        return {
          id: "fo_global_invalid_error",
          values: {}
        };
      }
    }
    return undefined;
  });
  this.phoneCodes = [];
  if (list) {
    this.phoneCodes = list;
  }
}); // validator pour le champ phone mobile (pour les FA optimisés)
var requiredPhone = exports.requiredPhone = function requiredPhone(value) {
  if (!value) {
    return {
      id: "foj_myspace_account_form_mandatory",
      values: {}
    };
  }
  var cleaned = value.replace(/[^\d]/g, "");
  if (cleaned.length < 4) {
    return {
      id: "fo_global_invalid_error",
      values: {}
    };
  }
  return undefined;
};