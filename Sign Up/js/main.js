
var sineUpName = document.getElementById("signName");
var sineUpEmail = document.getElementById("signEmail");
var sineUpPaswwrd = document.getElementById("signPassword");

var data = [];


if (localStorage.getItem("user") != null) {
  data =JSON.parse( localStorage.getItem("user"));
} else {
  data = [''];
}

function add() {
  // validate
  if (
    sineUpName.value == "" ||
    sineUpEmail.value == "" ||
    sineUpPaswwrd == ""
  ) {
    document.getElementById(
      "message"
    ).innerHTML = `<p class="text-center"> All Inputs is Required</p>`;
  } else {
    var obj = {
      name: sineUpName.value,
      email: sineUpEmail.value,
      password: sineUpPaswwrd.value,
    };
    data.push(obj);
    location.href = "../../Login/index.html";
    localStorage.setItem("user", JSON.stringify(data));
  }
}
