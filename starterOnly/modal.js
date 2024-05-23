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

// validation du formulaire
function validate() {
  let isValid = true;

  // validation du prénom
  const firstName = document.getElementById("first").value; // Accéder à la valeur du champ
  if (firstName.length < 2) {
    isValid = false;
    console.log("Erreur: Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  }

  // validation du nom
  const lastName = document.getElementById("last").value; 
  if (lastName.length < 2) {
    isValid = false;
    console.log("Erreur: Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  // validation de l'email
  const email = document.getElementById("email").value; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailRegex.test(email)) {
    isValid = false;
    console.log("Erreur: Veuillez entrer une adresse email valide.");
  }

  // validation de la date de naissance
  const birthdate = document.getElementById("birthdate").value; 
  if (!birthdate) {
    isValid = false;
    console.log("Erreur: Veuillez entrer votre date de naissance.");
  }

  // validation de la quantité
  const quantity = document.getElementById("quantity").value; 
  if (quantity === "" || quantity < 0 || quantity > 99) {
    isValid = false;
    console.log("Erreur: Veuillez entrer une quantité valide (entre 0 et 99).");
  }

  return isValid;
}




