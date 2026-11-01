$(document).ready(function() {
  console.log("jQuery is ready!");

  $("body").css("font-family", "Arial, sans-serif");
  $("#title").text("Welcome to My Portfolio");
  $(".headline").css("color", "blue");

  $("#changeGreeting").click(function() {
    $("#greeting").text("Hello! Thank you for visiting my portfolio.");
  });

  $("#lightTheme").click(function() {
    $("body").removeClass("dark");
  });

  $("#darkTheme").click(function() {
    $("body").addClass("dark");
  });

  $("#hide").click(function() {
    $("#aboutInfo").hide();
  });

  $("#show").click(function() {
    $("#aboutInfo").show();
  });

  $("#toggle").click(function() {
    $("#aboutInfo").toggle();
  });

  $("#fadeIn").click(function() {
    $(".galleryImage").fadeIn();
  });

  $("#fadeOut").click(function() {
    $(".galleryImage").fadeOut();
  });

  $("#fadeToggle").click(function() {
    $(".galleryImage").fadeToggle();
  });

  $(".slideTitle").click(function() {
    $(this).next(".slideInfo").slideToggle();
  });

  $("#openPanels").click(function() {
    $(".slideInfo").slideDown();
  });

  $("#closePanels").click(function() {
    $(".slideInfo").slideUp();
  });

  $("#addSkill").click(function() {
    var skill = $("#skillInput").val();

    if (skill.trim() !== "") {
      $("#skillList").append("<li>" + skill + "</li>");
      $("#skillInput").val("");
      $("#skillMessage").text("Skill added.");
    } else {
      $("#skillMessage").text("Please enter a skill.");
    }
  });

  $("#prependSkill").click(function() {
    var skill = $("#skillInput").val();

    if (skill.trim() !== "") {
      $("#skillList").prepend("<li>" + skill + "</li>");
      $("#skillInput").val("");
      $("#skillMessage").text("Skill added at the beginning.");
    } else {
      $("#skillMessage").text("Please enter a skill.");
    }
  });

  $("#removeSkill").click(function() {
    $("#skillList li:last").remove();
    $("#skillMessage").text("Last skill removed.");
  });

  $("#changeLink").click(function() {
    $("#socialLink").attr("href", "https://www.linkedin.com/");
    $("#socialLink").text("My LinkedIn");
  });

  $("#nameInput").on("input", function() {
    $("#nameOutput").text($(this).val());
  });

  $("#emailInput").on("input", function() {
    $("#emailOutput").text($(this).val());
  });

  var animated = false;

  $("#animateSkills").click(function() {
    if (animated === false) {
      $("#htmlBar").animate({width: "90%"}, 1000);
      $("#cssBar").animate({width: "75%"}, 1000);
      $("#jsBar").animate({width: "60%"}, 1000);
      animated = true;
    } else {
      $("#htmlBar").animate({width: "0%"}, 1000);
      $("#cssBar").animate({width: "0%"}, 1000);
      $("#jsBar").animate({width: "0%"}, 1000);
      animated = false;
    }
  });
});