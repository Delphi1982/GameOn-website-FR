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


const form = document.getElementById("reserve");
form.addEventListener("submit", validate);

// form validation 
function validate(event) {
  event.preventDefault();
  let isValid = true;

  // reset error message 
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(el => el.textContent = "");
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.classList.remove("error"));

  // first name validation
  const firstName = document.getElementById("first").value; 
  if (firstName.length < 2) {
      isValid = false;
      document.getElementById("error-first").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      document.getElementById("first").classList.add("error");
  }

  // last name validation
  const lastName = document.getElementById("last").value; 
  if (lastName.length < 2) {
      isValid = false;
      document.getElementById("error-last").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      document.getElementById("last").classList.add("error");
  }

  // email validation
  const email = document.getElementById("email").value; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailRegex.test(email)) {
      isValid = false;
      document.getElementById("error-email").textContent = "Veuillez entrer une adresse email valide";
      document.getElementById("email").classList.add("error");
  }

  // birthdate validation
  const birthdate = document.getElementById("birthdate").value; 
  if (!birthdate) {
      isValid = false;
      document.getElementById("error-birthdate").textContent = "Veuillez entrer votre date de naissance";
      document.getElementById("birthdate").classList.add("error");
  }

  // quantity validation
  const quantity = document.getElementById("quantity").value; 
  if (quantity === "" || quantity < 0 || quantity > 99) {
      isValid = false;
      document.getElementById("error-quantity").textContent = "Veuillez entrer une quantité valide (entre 0 et 99)";
      document.getElementById("quantity").classList.add("error");
  }

  // radio buttons validation
  const locationSelected = document.querySelector('input[name="location"]:checked'); 
  if (!locationSelected) {
      isValid = false;
      document.getElementById("error-location").textContent = "Veuillez sélectionner un lieu pour participer au tournoi";
  }

  // terms and conditions validation
  const termsAccepted = document.getElementById("checkbox1").checked; 
  if (!termsAccepted) {
      isValid = false;
      document.getElementById("error-checkbox1").textContent = "Veuillez accepter les conditions générales";
  }

  if (isValid) {
      document.getElementById("success-message").style.display = "block";

      
  }
}
