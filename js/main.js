
$("#tabs").children("a").on("click", function () {

  $(this).addClass("active");
  var other = $("#tabs").children("a").not($(this)).removeClass("active");
  other.children().removeClass("icon_up").addClass("icon_down");
  var isUp = $(this).data("sort") == "up";
  toggleIcon(isUp, $(this)); 
});

function toggleIcon(isUp, _$this) {

  if (isUp) {
    _$this.children(".icon_up").removeClass("icon_up").addClass("icon_down");
    _$this.data("sort", "down")
  } else {
    _$this.children().removeClass("icon_down").addClass("icon_up");
    _$this.data("sort", "up");
  }
}
