$(document).ready(function () {
  //Click event to scroll to top
  // $(".back-to-top").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 500);
  //   return false;
  // });

  $(".side-drawer-content").css({ height: window.innerHeight + "px" });

  //Hamburger Menu Click event

  $(".ham-meunu").click(function () {
    console.log("open clicked");
    $("body").css({ overflow: "hidden" });
    $(".side-drawer-menu").css({ left: "0" });
    $(".openmenu-backdrop").toggle();
  });

  $(".drawer-menu-close-icon").click(function () {
    console.log("close clicked");
    $("body").css({ overflow: "" });
    $(".side-drawer-menu").css({ left: "-100%" });
    $(".openmenu-backdrop").toggle();
  });

  $(".create-req-btn").click(function () {
    $(".create-request-popup").css({
      display: "block",
    });
    $("body").css({ overflow: "hidden" });
  });

  $(".create-request-popup .close-button").click(function () {
    $(".create-request-popup").css({
      display: "none",
    });
    $("body").css({ overflow: "" });
  });

  //Feeback smiley
  $("#feed-options label").on("click", function () {
    var children = $(this).parent().siblings().children();
    $(this).addClass("selected");

    if (children.hasClass("selected")) {
      children.removeClass("selected");
    }
  });

  assingHeaderSpacerHeight();
});

$(window).resize(function () {
  $(".side-drawer-content").css({ height: window.innerHeight + "px" });

  assingHeaderSpacerHeight();
});

function assingHeaderSpacerHeight() {
  var headerheight = $(".site-header").outerHeight();

  $(".header-spacer").css({
    height: headerheight + "px",
  });
}
