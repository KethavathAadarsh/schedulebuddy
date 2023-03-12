function calculateBMI() {
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var heightInMeters = parseFloat(document.getElementById("height").value);

  // Calculate BMI
  var bmi = weight / (heightInMeters * heightInMeters);

  // Display result
  var message;
  if (bmi >= 30 && bmi < 31) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Eat once a day and walk, drink plenty of water.";
  } else if (bmi >= 29 && bmi < 30) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Eat once a day, walk, do crunches, drink plenty of water.";
  } else if (bmi >= 28 && bmi < 29) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Eat twice a day, walk, run, do crunches, drink plenty of water.";
  } else if (bmi >= 27 && bmi < 28) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Eat twice a day, walk, run, do crunches and planks, drink plenty of water, get enough sleep.";
  } else if (bmi >= 26 && bmi < 27) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Eat twice a day, have lunch, run, walk, do crunches and planks, drink plenty of water, get enough sleep.";
  } else if (bmi >= 25 && bmi < 26) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Add extra meditation to your routine.";
  } else if (bmi >= 24 && bmi < 25) {
    message = "Your BMI is " + bmi.toFixed(2) + ". Add extra eggs to your diet.";
  } else {
    message = "Your BMI is " + bmi.toFixed(2) + ". Hurray, it's party time!";
  }
  alert(message);
}
