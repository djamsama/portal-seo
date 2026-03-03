"use strict";

var _currencyHelper = require("../currencyHelper");
it("currencyHelper ", function () {
  var result = _currencyHelper.CurrencyHelper.getRoundPrice(0.45);
  expect(result).toEqual(0.45);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("0.00")).toEqual(0);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("9,40")).toEqual(9.4);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("9,4")).toEqual(9.4);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("55.01")).toEqual(56);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("55")).toEqual(55);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("118.12")).toEqual(120);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("117")).toEqual(120);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("1259.38")).toEqual(1260);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("12593.82")).toEqual(12600);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("125125.12")).toEqual(126000);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("799.00")).toEqual(800);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("272.00")).toEqual(280);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("4715")).toEqual(4720);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("2341.50")).toEqual(2350);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("238.00")).toEqual(240);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("3589.00")).toEqual(3590);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("2341.50")).toEqual(2350);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("5355.452")).toEqual(5360);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("1209.99")).toEqual(1210);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("525.00")).toEqual(530);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("4715,01")).toEqual(4720);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("2590.00")).toEqual(2590);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("1080.00")).toEqual(1080);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("192.00")).toEqual(200);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("149.99")).toEqual(150);
  expect(_currencyHelper.CurrencyHelper.getRoundPrice("191.52")).toEqual(200);
});
describe("CurrencyHelper.promo", function () {
  it("devrait calculer le pourcentage de réduction correct et le retourner s'il dépasse le seuil", function () {
    var initPrice = 100;
    var discountItemPrice = 70;
    var SEUIL_PROMO = 20;
    var expectedDiscountPercentage = 30; // Expected (100 - 70) / 100 * 100

    var result = _currencyHelper.CurrencyHelper.promo(initPrice, discountItemPrice, SEUIL_PROMO);
    //  Check si la pourcentage est correct et bien au dessus du seuil
    expect(result).toEqual(expectedDiscountPercentage);
  });
  it("Doit retourner 0 si le pourcentage de réduction est inférieur ou égal au seuil", function () {
    var initPrice = 100;
    var discountItemPrice = 90;
    var SEUIL_PROMO = 20;
    var result = _currencyHelper.CurrencyHelper.promo(initPrice, discountItemPrice, SEUIL_PROMO);
    // Inferieur au seuil de 20%
    expect(result).toEqual(0);
  });
  it("Doit gérer les entrées de type chaîne en les convertissant en nombres", function () {
    var initPrice = "200";
    var discountItemPrice = "150";
    var SEUIL_PROMO = 10;
    var expectedDiscountPercentage = 25; // (200 - 150) / 200 * 100
    var result = _currencyHelper.CurrencyHelper.promo(initPrice, discountItemPrice, SEUIL_PROMO);
    expect(result).toEqual(expectedDiscountPercentage);
  });
  it("Doit retourner zero si le pourcentage est en dessous du seuil par defaut", function () {
    var initPrice = "151";
    var discountItemPrice = "150";
    // Par defaut le seuil est à 5%
    var expectedDiscountPercentage = 0; // Inferieur au seuil de 5%
    var result = _currencyHelper.CurrencyHelper.promo(initPrice, discountItemPrice);
    expect(result).toEqual(expectedDiscountPercentage);
  });
  it("Doit retourner une valeur au dessus de zero si le pourcentage est au dessus du seuil par defaut", function () {
    // Par defaut le seuil est à 5%
    var initPrice = 10;
    var discountItemPrice = 9.5; // Reduction de pile 5% doit retourner 5

    var expectedDiscountPercentage = 5; // Egal au seuil par defaut de 5%
    var result = _currencyHelper.CurrencyHelper.promo(initPrice, discountItemPrice);
    expect(result).toEqual(expectedDiscountPercentage);
  });
});