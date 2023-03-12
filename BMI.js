function calculateBMI() {
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var heightInMeters = parseInt(document.getElementById("Height").value);
  // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);

  // Display result
  alert("Your BMI is " + bmi.toFixed(2));
}
