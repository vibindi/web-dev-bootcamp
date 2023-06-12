$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

$("button").html("<em>Button Click</em>");

$("a").attr("href", "https://www.google.com");

$(document).keypress(function(event) {
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("click", function() {
  $("h1").css("color", "purple");
});

$("h1").before("<button>Hello</button>")
$("h1").after("<button>Hello</button>")
$("h1").prepend("<button>Hello</button>")
$("h1").append("<button>Hello</button>")

//$("button").remove();

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({margin: '20'});
})