
data = [];
data = JSON.parse(localStorage.getItem("user"));

var signInEmail = document.getElementById("signEmail");
var signInPassword = document.getElementById("signPassword");

document.getElementById("login").addEventListener("click", function () {
  if (signInEmail.value == "" || signInPassword.value == "") {
    document.getElementById(
      "message"
    ).innerHTML = `<p class="text-center"> All Inputs is Required</p>`;
  } else {
    checkUser()
  }
});

function checkUser() {
  for (var i = 0; i < data.length; i++) {
    if (
      signInEmail.value == data[i].email &&
      signInPassword.value == data[i].password
    ) {
      var y = data[i].name;
      localStorage.setItem("userName", y);
      location.href = "../../home/index.html";
      break;
    }
  }
}
