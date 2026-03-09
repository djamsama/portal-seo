"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var outsideClass = "outside";
var beforLastClass = "before-last";
var lastClass = "last";
var visibleDots = 8;
var limitDots = 2;

/**
 * Helper permettant de gérer la navigation dans la visionneuse et son affichage.
 */
var NavigationHelper = /*#__PURE__*/function () {
  function NavigationHelper() {
    (0, _classCallCheck2["default"])(this, NavigationHelper);
  }
  return (0, _createClass2["default"])(NavigationHelper, null, [{
    key: "retrieveRelativeIndex",
    value:
    /**
     * Récupération de l'index relativement aux éléments visible.
     * @param {*} selectedDot L'élément sélectionné par l'utilisateur
     */
    function retrieveRelativeIndex(selectedDot) {
      var dot = selectedDot;
      var dotRelativeIndex = 1;
      while ((dot = dot.previousSibling) != null) {
        if (dot.style.display !== "none" && !dot.classList.contains(outsideClass)) {
          dotRelativeIndex += 1;
        } else {
          break;
        }
      }
      return dotRelativeIndex;
    }

    /**
     * Gestion manuel de l'avancement image par image si le nombre d'éléments à afficher excède la limite définie.
     *
     * @param {*} dotsArray La collection de points
     * @param {*} pageDotsHolder Le warpper de ces points
     * @param {*} dotAbsoluteIndex L'index de l'élément séléctionné
     */
  }, {
    key: "nextDot",
    value: function nextDot(dotsArray, pageDotsHolder, dotAbsoluteIndex) {
      // Initialisation des données permettant le calcul de la nouvelle position
      var dotsNumber = dotsArray.length;
      // On ne customize que les affichages excédant 'visibleDots' éléments
      if (dotsNumber <= visibleDots) {
        return;
      }
      // L'élément selectionné
      var selectedDot = dotsArray[dotAbsoluteIndex];
      var dotRelativeIndex = this.retrieveRelativeIndex(selectedDot);

      // Gestion des différents cas:
      // - L'utilisteur a cliqué sur un point entre les 2 premiers et les 2 derniers : les points ne défilent pas on laisse flickity afficher l'image correspondant
      if (dotRelativeIndex > limitDots && dotRelativeIndex < visibleDots - limitDots) {
        return;
      }

      // - L'utilisateur arrive sur l'avant dernier point visible
      if (dotRelativeIndex === visibleDots - 1) {
        // Il reste plus de 1 image à visualiser
        if (dotAbsoluteIndex <= dotsNumber - 2) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On avance le carousel de 1 itération
          if (dotsArray[dotAbsoluteIndex + 2]) {
            dotsArray[dotAbsoluteIndex - visibleDots + 2].classList.add(outsideClass);
            dotsArray[dotAbsoluteIndex - visibleDots + 3].classList.add(lastClass);
            dotsArray[dotAbsoluteIndex - visibleDots + 4].classList.add(beforLastClass);
          } else {
            dotsArray[dotAbsoluteIndex - visibleDots + 2].classList.add(lastClass);
            dotsArray[dotAbsoluteIndex - visibleDots + 3].classList.add(beforLastClass);
          }
          dotsArray[dotAbsoluteIndex + 1].classList.remove(lastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.add(beforLastClass);
          if (dotsArray[dotAbsoluteIndex + 2]) {
            dotsArray[dotAbsoluteIndex + 2].classList.add(lastClass);
          }
          //
          dotsArray.slice(0, dotAbsoluteIndex - visibleDots + 3).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - visibleDots + 3, dotAbsoluteIndex + 3).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + 3, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }
        return;
      }

      // - L'utilisateur arrive sur le second point visible
      if (dotRelativeIndex === limitDots) {
        // Il reste plus de 1 image à visualiser
        if (dotAbsoluteIndex >= 2) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On avance le carousel de 1 itération
          if (dotsArray[dotAbsoluteIndex + visibleDots - 2]) {
            dotsArray[dotAbsoluteIndex + visibleDots - 2].classList.add(outsideClass);
            dotsArray[dotAbsoluteIndex + visibleDots - 3].classList.add(lastClass);
            dotsArray[dotAbsoluteIndex + visibleDots - 4].classList.add(beforLastClass);
          } else {
            dotsArray[dotAbsoluteIndex + visibleDots - 3].classList.add(lastClass);
            dotsArray[dotAbsoluteIndex + visibleDots - 4].classList.add(beforLastClass);
          }
          dotsArray[dotAbsoluteIndex - 1].classList.remove(lastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.add(beforLastClass);
          if (dotsArray[dotAbsoluteIndex - 2]) {
            dotsArray[dotAbsoluteIndex - 2].classList.add(lastClass);
          }
          //
          dotsArray.slice(0, dotAbsoluteIndex - 2).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - 2, dotAbsoluteIndex + visibleDots - 2).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + visibleDots - 2, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }
      }
    }

    /**
     * Construction des meta spécifiques au stand produit.
     */
  }, {
    key: "dotClick",
    value: function dotClick(event, dotsArray, pageDotsHolder, dotAbsoluteIndex) {
      // Récuparation de l'élémnt cliqué
      var selectedDot = event.target;
      if (!selectedDot || !selectedDot.classList.contains("dot")) {
        return;
      }
      // Initialisation des données permettant le calcul de la nouvelle position
      var dotsNumber = dotsArray.length;
      // On ne customize que les affichages excédant 'visibleDots' éléments
      if (dotsNumber <= visibleDots) {
        return;
      }
      var dotRelativeIndex = this.retrieveRelativeIndex(selectedDot);

      // Gestion des différents cas:
      // - L'utilisteur a cliqué sur un point entre les 2 premiers et les 2 derniers : les points ne défilent pas on laisse flickity afficher l'image correspondant
      if (dotRelativeIndex > limitDots && dotRelativeIndex < visibleDots - limitDots) {
        return;
      }

      // - L'utilisateur a cliqué sur le point le plus à droite
      if (dotRelativeIndex === visibleDots) {
        // Il reste plus de 2 images à visualiser
        if (dotAbsoluteIndex <= dotsNumber - 3) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On avance le carousel de 2 itérations
          dotsArray[dotAbsoluteIndex - visibleDots + 1].classList.add(outsideClass);
          dotsArray[dotAbsoluteIndex - visibleDots + 2].classList.add(outsideClass);
          dotsArray[dotAbsoluteIndex - visibleDots + 3].classList.add(lastClass);
          dotsArray[dotAbsoluteIndex - visibleDots + 4].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.remove(beforLastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex + 2].classList.add(lastClass);
          //
          dotsArray.slice(0, dotAbsoluteIndex - visibleDots + 3).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - visibleDots + 3, dotAbsoluteIndex + 3).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + 3, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }

        // Il ne reste plus qu'une image à visualiser
        if (dotAbsoluteIndex === dotsNumber - 2) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On déplace le carousel d'un incrément
          dotsArray[dotAbsoluteIndex - visibleDots + 1].classList.add(outsideClass);
          if (dotsNumber > visibleDots + 1) {
            // Il y a plus de 2 points avant
            dotsArray[dotAbsoluteIndex - visibleDots + 2].classList.add(lastClass);
            dotsArray[dotAbsoluteIndex - visibleDots + 3].classList.add(beforLastClass);
          } else {
            // Il n'y a qu'un point avant
            dotsArray[dotAbsoluteIndex - visibleDots + 2].classList.add(beforLastClass);
          }
          dotsArray[dotAbsoluteIndex - 1].classList.remove(beforLastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.add(beforLastClass);
          //
          dotsArray.slice(0, dotAbsoluteIndex - visibleDots + 2).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - visibleDots + 2, dotAbsoluteIndex + 2).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
        }

        // L'utilisateur est arrivé à l'extrème droite du carousel, on laisse flickity afficher l'image
        if (dotAbsoluteIndex === dotsNumber - 1) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          dotsArray[dotAbsoluteIndex - 2].classList.remove(beforLastClass);
          return;
        }
        return;
      }
      // - L'utilisateur a cliqué sur l'avant dernier point visible
      if (dotRelativeIndex === visibleDots - 1) {
        // Il reste plus de 1 image à visualiser
        if (dotAbsoluteIndex <= dotsNumber - 2) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On avance le carousel de 1 itération
          dotsArray[dotAbsoluteIndex - visibleDots + 2].classList.add(outsideClass);
          dotsArray[dotAbsoluteIndex - visibleDots + 3].classList.add(lastClass);
          dotsArray[dotAbsoluteIndex - visibleDots + 4].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.remove(lastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex + 2].classList.add(lastClass);
          //
          dotsArray.slice(0, dotAbsoluteIndex - visibleDots + 3).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - visibleDots + 3, dotAbsoluteIndex + 3).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + 3, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }
        return;
      }
      // - L'utilisateur a cliqué sur le point le plus à gauche
      if (dotRelativeIndex === 1) {
        // Il reste plus de 2 images à visualiser
        if (dotAbsoluteIndex >= 2) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On avance le carousel de 2 itérations
          dotsArray[dotAbsoluteIndex + visibleDots - 1].classList.add(outsideClass);
          dotsArray[dotAbsoluteIndex + visibleDots - 2].classList.add(outsideClass);
          dotsArray[dotAbsoluteIndex + visibleDots - 3].classList.add(lastClass);
          dotsArray[dotAbsoluteIndex + visibleDots - 4].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.remove(beforLastClass);
          dotsArray[dotAbsoluteIndex + 1].classList.remove(lastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.remove(lastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex - 2].classList.add(lastClass);
          //
          dotsArray.slice(0, dotAbsoluteIndex - 2).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - 2, dotAbsoluteIndex + visibleDots - 3).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + visibleDots - 3, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }
        // Il ne reste plus qu'une image à visualiser
        if (dotAbsoluteIndex === 1) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On déplace le carousel d'un incrément
          dotsArray[dotAbsoluteIndex + visibleDots - 1].classList.add(outsideClass);
          if (dotsNumber > visibleDots + 1) {
            // Il y a plus de 2 points après
            dotsArray[dotAbsoluteIndex + visibleDots - 2].classList.add(lastClass);
            dotsArray[dotAbsoluteIndex + visibleDots - 3].classList.add(beforLastClass);
          } else {
            // Il n'y a qu'un point après
            dotsArray[dotAbsoluteIndex + visibleDots - 2].classList.add(beforLastClass);
          }
          dotsArray[dotAbsoluteIndex + 1].classList.remove(beforLastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.add(beforLastClass);
          //
          dotsArray.slice(dotAbsoluteIndex - 2, dotAbsoluteIndex + visibleDots - 2).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + visibleDots - 2, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }

        // L'utilisateur est arrivé à l'extrème gauche du carousel, on laisse flickity afficher l'image
        if (dotAbsoluteIndex === 0) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          dotsArray[dotAbsoluteIndex + 1].classList.remove(beforLastClass);
          return;
        }
        return;
      }
      // - L'utilisateur a cliqué sue le second point visible
      if (dotRelativeIndex === limitDots) {
        // Il reste plus de 1 image à visualiser
        if (dotAbsoluteIndex >= 2) {
          // Le style du wrapper des points est maintenant géré manuellement
          pageDotsHolder.classList.add("manual");
          // On avance le carousel de 1 itération
          dotsArray[dotAbsoluteIndex + visibleDots - 2].classList.add(outsideClass);
          dotsArray[dotAbsoluteIndex + visibleDots - 3].classList.add(lastClass);
          dotsArray[dotAbsoluteIndex + visibleDots - 4].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.remove(lastClass);
          dotsArray[dotAbsoluteIndex - 1].classList.add(beforLastClass);
          dotsArray[dotAbsoluteIndex - 2].classList.add(lastClass);
          //
          dotsArray.slice(0, dotAbsoluteIndex - 2).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
          dotsArray.slice(dotAbsoluteIndex - 2, dotAbsoluteIndex + visibleDots - 2).forEach(function (item) {
            item.classList.remove(outsideClass);
            item.style.display = "inline-block";
          });
          dotsArray.slice(dotAbsoluteIndex + visibleDots - 2, dotsNumber).forEach(function (item) {
            if (!item.classList.contains(outsideClass)) {
              item.style.display = "none";
            }
          });
        }
      }
    }
  }]);
}();
var _default = exports["default"] = NavigationHelper;