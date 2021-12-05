// Hämta element first page
const firstPage = document.getElementById("firstPage");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const logginBtn = document.getElementById("logginBtn");

// Element second page
const secondPage = document.getElementById("secondPage");
const loggutBtn = document.getElementById("loggutBtn");
const error = document.getElementById("error");

// Spara användare
const a = localStorage.getItem("username");
if (a === "janne") {
  firstPage.hidden = true;
  secondPage.hidden = false;
  error.hidden = true;
}

// FirstPage
function correctLoggin() {
  console.log("klick på knapp");
  if (userName.value === "janne" && password.value === "test") {
    firstPage.hidden = true;
    secondPage.hidden = false;
    error.hidden = true;
    localStorage.setItem("username", userName.value);
  } else {
    firstPage.hidden = false;
    secondPage.hidden = true;
    error.hidden = false;
    alert("Fel lösenord");
  }
}
function logout() {
  firstPage.hidden = false;
  secondPage.hidden = true;
  localStorage.setItem("username", "");
}
// Knappar
logginBtn.addEventListener("click", correctLoggin);
loggutBtn.addEventListener("click", logout);
