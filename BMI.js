function calculateBMI() {
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var heightInMeters = parseFloat(document.getElementById("Height").value);

  // Calculate BMI
  var bmi = weight / (heightInMeters * heightInMeters);

  // Display result in modal dialog box
  var resultText = "Your BMI is " + bmi.toFixed(2);
  var modalContent = '<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><h1>' + resultText + '</h1></div></div></div>';
  var modal = $('<div class="modal" tabindex="-1" role="dialog">' + modalContent + '</div>');
  modal.modal();
}

