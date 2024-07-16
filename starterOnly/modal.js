// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelector(".close"); // Ajout sélection élément avec la classe "close"
const msgCloseBtn = document.getElementById("close-button"); // Ajout sélection élément avec l'ID "close-button"
const succesMsg = document.getElementById("success-message"); // Ajout sélection élément avec l'ID "success-message"


function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Événement pour lancer la modal

// launch modal form
function launchModal() { // Fonction pour afficher la modal
  modalbg.style.display = "block"; // Affiche la modal
 }


modalCloseBtn.addEventListener("click", closeModal) // Ajout événement de clic pour fermer la modal
msgCloseBtn.addEventListener("click", closeModal); // Ajout événement de clic pour fermer le success-message


function closeModal() {
  modalbg.style.display = "none"; // Cache la modal
  succesMsg.style.display = "none"; // Cache le success-message
}


// collecting civil data
function collectCivilData() { // Ajout Fonction pour collecter les données civiles
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");
  let email = document.getElementById("email");
  let birthdate = document.getElementById("birthdate");
}


// Sélectionne le formulaire et ajoute un événement de soumission
const form = document.getElementById("reserve");
 form.addEventListener("submit", validate);


// form validation 
function validate(event) { // Fonction de validation du formulaire
  event.preventDefault(); // Empêche la soumission par défaut du formulaire
  let isValid = true;


// reset error message 
const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach(el => el.textContent = "");
const inputs = document.querySelectorAll("input");
  inputs.forEach(input => input.classList.remove("error"));


// first name validation
const firstName = document.getElementById("first"); // Sélectionne l'élément du DOM avec l'ID "first" pour le champ du prénom
if (firstName.value.length < 2) { // Vérifie si la longueur de la valeur du champ prénom est inférieure à 2 caractères
  isValid = false; // Si la condition est vraie, définit isValid à false pour indiquer que le formulaire n'est pas valide
  document.getElementById("error-first").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom"; // Affiche un message d'erreur sous le champ prénom
  document.getElementById("first").classList.add("error"); // Ajoute la classe "error" au champ prénom pour appliquer des styles spécifiques d'erreur
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
  document.getElementById("error-quantity").textContent = "Veuillez entrer une quantité valide";
  document.getElementById("quantity").classList.add("error");
}


// radio buttons validation
const locationSelected = document.querySelector('input[name="location"]:checked'); 
if (!locationSelected) {
  isValid = false;
  document.getElementById("error-location").textContent = "Veuillez sélectionner un lieu";
}


// terms and conditions validation
const termsAccepted = document.getElementById("checkbox1").checked; 
if (!termsAccepted) {
  isValid = false;
  document.getElementById("error-checkbox1").textContent = "Veuillez accepter les conditions générales";
}


// Si toutes les validations passent, affiche le message de succès et réinitialise le formulaire
if (isValid) {
  succesMsg.style.display = "flex";
    form.reset(); //Réinitialise tous les champs du formulaire 'form' aux valeurs par défaut
      
  }
}
