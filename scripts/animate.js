$(".flip").hover(function () {
  $(this).find(".card").toggleClass("flipped");
});

function animate_services() {
  $(".fade-in-down").css("visibility", "visible");
  $(".fade-in-down").addClass("fade-in-down-start");
  $(".fade-in-up").css("visibility", "visible");
  $(".fade-in-up").addClass("fade-in-up-start");
}

function animate_about_me() {
  $(".fade-in-left").css("visibility", "visible");
  $(".fade-in-left").addClass("fade-in-left-start");
  $(".fade-in-right").css("visibility", "visible");
  $(".fade-in-right").addClass("fade-in-right-start");
}
function animate_international() {
  var elem = $(".fade-in-up-gmaps");
  $(".fade-in-up-gmaps").css("visibility", "visible");
  $(".fade-in-up-gmaps").addClass("fade-in-up-start");
}
function animate_skills() {
  if ($(".fade-in-left-skills").css("visibility") == "visible") {
    return;
  }
  $(".fade-in-left-skills").css("visibility", "visible");
  $(".fade-in-left-skills").addClass("fade-in-left-start");
  $(".fade-in-right-skills").css("visibility", "visible");
  $(".fade-in-right-skills").addClass("fade-in-right-start");

  jQuery(".skillbar").each(function () {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent"),
        },
        6000
      );
  });

  jQuery(".Count").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.text() },
      {
        duration: 6000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
      }
    );
  });
}
function animate_lastest_work() {
  $(".fade-in-up-porto").css("visibility", "visible");
  $(".fade-in-up-porto").addClass("fade-in-up-start");
}
function animate_contact_me() {
  $(".fade-in-left-env").css("visibility", "visible");
  $(".fade-in-left-env").addClass("fade-in-left-start");
  $(".fade-in-left-msg").css("visibility", "visible");
  $(".fade-in-left-msg").addClass("fade-in-left-start");
  $(".fade-in-right-contact-form").css("visibility", "visible");
  $(".fade-in-right-contact-form").addClass("fade-in-right-start");
}

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("services visible");
      animate_services();
    }
  });
});

observer1.observe(document.querySelector("#services"));

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("about me visible");
      animate_about_me();
    }
  });
});

observer2.observe(document.querySelector("#about-me"));

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("international visible");
      animate_international();
    }
  });
});

observer3.observe(document.querySelector("#international-experiences"));

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("skill visible");
      animate_skills();
    }
  });
});

observer4.observe(document.querySelector("#skills"));

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("lastestwork visible");
      animate_lastest_work();
    }
  });
});

observer5.observe(document.querySelector("#lastest-work"));

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("contact-me visible");
      animate_contact_me();
    }
  });
});

observer6.observe(document.querySelector("#contact-me"));

// stop for sometime if needed
