/**
 * @file
 * Rio behaviors.
 */
(function (Drupal, $, once) {
  "use strict";

  Drupal.behaviors.rio = {
    attach(context, settings) {
      function MobileMenuClick(element) {
        if (element.hasClass("active")) {
          element.removeClass("active");
          $("body").removeClass("mobile-menu-open");
          $(".header-mobile-menu").slideUp();
        } else {
          element.addClass("active");
          $("body").addClass("mobile-menu-open");
          $(".header-mobile-menu").slideDown();
        }
      }
      $(once("menuToggle", "#menuToggle", context)).click(function () {
        MobileMenuClick($(this));
      });
      $(once("menuTogglekeypress", $("#menuToggle"), context)).keypress(
        function (e) {
          if (e.which == 13) {
            MobileMenuClick($(this));
          }
        }
      );
    },
  };
})(Drupal, jQuery, once);
