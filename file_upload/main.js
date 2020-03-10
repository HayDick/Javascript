function insertLink() {
  var linkValue = document.getElementById("link-1");
  var btn = document.getElementsByClassName("btn_link");
  btn.href = linkValue.value;
}

function buttonSelection(select) {
  let selected = document.getElementById(select);
  let btnSelector = document.getElementById("button-selector");
  let myLabel = document.getElementById("label");

  if (selected.style.display == "none") {
    selected.style.display = "block";
    btnSelector.style.display = "none";
  } else {
    selected.style.display = "none";
  }
}

var loadDT = function(event) {
  var image = document.getElementById("output-desktop");
  image.src = URL.createObjectURL(event.target.files[0]);

  // var buttons = document.getElementsByClassName("output-DT-btn");
  // for (var i = 0; i < buttons.length; i += 1) {
  //   buttons[i].style.display = "block";
  // }
};

var loadMobile = function(event) {
  var image = document.getElementById("output-mobile");
  image.src = URL.createObjectURL(event.target.files[0]);
  var button = document.getElementsByClassName("output-mobile-btn");
  button.style.display = "block";
};
$(document).ready(function showSoruce() {
  $("<pre />", {
    html:
      "&lt;!DOCTYPE html>\n&lt;html>\n" +
      $("html")
        .html()
        .replace(/[<>]/g, function(m) {
          return { "<": "&lt;", ">": "&gt;" }[m];
        })
        .replace(
          /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,
          '<a href="$1">$1</a>'
        ) +
      "\n&lt;/html>",
    class: "prettyprint"
  }).appendTo("#source-code");

  prettyPrint();
});
