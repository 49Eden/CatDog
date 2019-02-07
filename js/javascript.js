$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");
    $("ul#cat").prepend("<li>Purrrr!</li>");
  });

  $("button#stop").click(function() {
    $("ul#dog").prepend("<li>Ruh-roo!</li>");
    $("ul#cat").prepend("<li>Hisssssss!</li>");
  });
});
