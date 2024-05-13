function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// collecting civil data
function collectCivilData() {
  
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let email = document.getElementById("email");
  let birthdate = document.getElementById("birthdate");
 
  console.log("Prénom:", firstName);
  console.log("Nom:", lastName);
  console.log("Email:", email);
  console.log("Date de naissance:", birthdate);

}



