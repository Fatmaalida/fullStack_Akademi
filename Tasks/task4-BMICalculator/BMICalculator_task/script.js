const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.getElementById("bmiForm");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
}

function onFormSubmit(e) {
  e.preventDefault();

  const age = parseInt(form.age.value);
  const gender = form.querySelector('input[name="gender"]:checked').value;
  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || isNaN(age)) {
    alert("Please enter a valid age, weight, height, and gender");
    return;
  }

  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "normal";
  } else if (bmi < 30) {
    return "overweight";
  } else if (bmi < 35) {
    return "obese";
  } else {
    return "extremely-obese";
  }
}
