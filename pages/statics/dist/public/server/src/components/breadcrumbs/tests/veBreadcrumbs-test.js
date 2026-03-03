"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _ = _interopRequireDefault(require("./.."));
var _breadcrumbs = require("../styles/breadcrumbs");
/* eslint-disable no-undef, no-unused-vars */
// Listes des élements du fil d'ariane à tester.
var breadCrumbsList = [{
  anchor: "Home",
  link: "https://www.directindustry.com"
}, {
  anchor: "Danvos products"
}];
describe("VeBreadcrumbs", function () {
  it("Le fil d'ariane doit être SEO compliant", function () {
    var veBreadcrumbs = (0, _enzyme.mount)(/*#__PURE__*/_react["default"].createElement(_["default"], {
      breadcrumbs: breadCrumbsList
    }));

    // 1. Il doit y avoir un composant de style `BreadcrumbsContainer`.
    var container = veBreadcrumbs.find(_breadcrumbs.BreadcrumbsContainer);
    expect(container).toHaveLength(1);

    // 2. Le conteneur doit avoir le composant de style `OlBreadcrumbs`
    var breadCrumbsOl = container.find(_breadcrumbs.OlBreadcrumbs);
    expect(breadCrumbsOl).toHaveLength(1);
    expect(breadCrumbsOl.getDOMNode().attributes.getNamedItem("vocab").value).toEqual("https://schema.org/");
    expect(breadCrumbsOl.getDOMNode().attributes.getNamedItem("typeOf").value).toEqual("BreadcrumbList");

    // 3. La liste doit avoir 2 éléments de liste.
    var breadCrumbItems = breadCrumbsOl.find("li");
    expect(breadCrumbItems).toHaveLength(2);

    // 4. Vérification de la sémantique du premier élément de la liste.
    var firstElement = breadCrumbItems.at(0);
    var firstElementLink = firstElement.find("a");
    var firstElementMeta = firstElement.find("meta");
    expect(firstElementLink).toHaveLength(1);
    var firstElementSpan = firstElementLink.find("span");
    expect(firstElementSpan).toHaveLength(1);
    expect(firstElementMeta).toHaveLength(1);
    expect(firstElement.getDOMNode().attributes.getNamedItem("property").value).toEqual("itemListElement");
    expect(firstElement.getDOMNode().attributes.getNamedItem("typeOf").value).toEqual("ListItem");

    // 5. Verification de la sémantique du lien.
    expect(firstElementLink.getDOMNode().attributes.getNamedItem("property").value).toEqual("item");
    expect(firstElementLink.getDOMNode().attributes.getNamedItem("typeOf").value).toEqual("WebPage");
    expect(firstElementLink.getDOMNode().attributes.getNamedItem("href").value).toEqual("https://www.directindustry.com");

    // 6. Vérification de la semantique du nom du premier element.
    expect(firstElementSpan.getDOMNode().attributes.getNamedItem("property").value).toEqual("name");
    expect(firstElementSpan.getDOMNode().textContent).toEqual("Home");
    expect(firstElementMeta.getDOMNode().attributes.getNamedItem("property").value).toEqual("position");
    expect(firstElementMeta.getDOMNode().attributes.getNamedItem("content").value).toEqual("1");

    // 7. La liste doit avoir un element de liste `BreadcrumbsCurrent`.
    var currentBreadCrumb = breadCrumbsOl.find(_breadcrumbs.BreadcrumbsCurrent);
    var secondElementMeta = breadCrumbItems.at(1).find("meta");
    expect(currentBreadCrumb).toHaveLength(1);
    expect(currentBreadCrumb.find("meta")).toHaveLength(0);
    expect(secondElementMeta).toHaveLength(1);
    expect(currentBreadCrumb.getDOMNode().attributes.getNamedItem("property").value).toEqual("name");
    expect(currentBreadCrumb.getDOMNode().textContent).toEqual("Danvos products");
    expect(secondElementMeta.getDOMNode().attributes.getNamedItem("property").value).toEqual("position");
    expect(secondElementMeta.getDOMNode().attributes.getNamedItem("content").value).toEqual("2");
  });
});