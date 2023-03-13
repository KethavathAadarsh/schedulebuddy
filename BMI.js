function calculateBMI() {
  var age = parseInt(document.getElementById("age").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var heightInMeters = parseFloat(document.getElementById("Height").value);

  // Calculate BMI
  var bmi = weight / (heightInMeters * heightInMeters);

  // Display result in modal dialog box
  var resultText;
  
  if (bmi >= 31 && bmi < 32) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ". You are Ugly Aadarsh. Eat once a day and walk, drink plenty of water. I am your friend AI";
   } else if (bmi >= 30 && bmi < 31) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".You are Ugly Aadarsh but you are now respected by everyone. Eat once a day,walk, drink plenty of water.";  
  } else if (bmi >= 29 && bmi < 30) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh. Its time to start some workout. Eat once a day, walk, do crunches, drink plenty of water.";
  } else if (bmi >= 28 && bmi < 29) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh. Eat twice a day, walk, run, do crunches, drink plenty of water.";
  } else if (bmi >= 27 && bmi < 28) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh Eat twice a day, walk, run, do crunches and planks, drink plenty of water, get enough sleep.";
  } else if (bmi >= 26 && bmi < 27) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh Eat twice a day, have lunch, run, walk, do crunches and planks, drink plenty of water, get enough sleep.";
  } else if (bmi >= 25 && bmi < 26) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh  Add extra meditation to your routine.";
  } else if (bmi >= 24 && bmi < 25) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh Add extra eggs to your diet. it's party time!.";
    } else if (bmi >= 19.5 && bmi < 24) {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh Hey Aadarsh!. You are more attractive and confident. Congratulations! you are fit now";
  } else {
    resultText = "Your BMI is " + bmi.toFixed(2) + ".Hmm Hmm nice going Aadarsh Hurray, it's party time!";
  }

  var modalContent = '<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-body"><h1>' + resultText + '</h1></div></div></div>';
  var modal = $('<div class="modal" tabindex="-1" role="dialog">' + modalContent + '</div>');
  modal.modal();
}
