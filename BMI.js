function calculateBMI() {
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);

  // Calculate BMI
  var heightInMeters = 1.7; // assuming a height of 1.7 meters
  var bmi = weight / (heightInMeters * heightInMeters);

  // Display result
  alert("Your BMI is " + bmi.toFixed(2));
}
