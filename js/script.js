"use scrict";

// spørger brugeren hvad deres højde er
let height = prompt("Hvad er din højde i cm:");

// spørger brugeren hvor meget de vejer
let weight = prompt("Hvor meget vejer du i kg:");

// laver talene om til floating-point numre
height = parseFloat(height);
weight = parseFloat(weight);

// Validere inputsne
if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
  alert("indsæt din højde og vægt for et resultat");
} else {
  // udregner BMIen
  const bmi = weight / ((height / 100) ** 2); // regnestykket: vægt / (højde in meter)^2

  // lave de forskellige vægt kategorier
  let category;
  if (bmi < 16) {
    category = "meget undervægtig";
  } else if (bmi >= 16 && bmi <= 18.4) {
    category = "undervægtig";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal vægt";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overvægtig";
  } else if (bmi >= 30 && bmi <= 34.9) {
    category = "lettere overvægtig";
  } else if (bmi >= 35 && bmi <= 39.9) {
    category = "meget overvægtig";
  } else {
    category = "ekstremt overvægtig";
  }

  // Fremvis resultatet
  alert(`Din BMI er: ${bmi.toFixed(2)}\nCategory: ${category}`);
}


