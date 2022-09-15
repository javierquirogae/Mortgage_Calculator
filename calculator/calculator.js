window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let initialValues = [600000,30,6];
  document.getElementById("loan-amount").placeholder = initialValues[0];
  document.getElementById("loan-years").placeholder = initialValues[1];
  document.getElementById("loan-rate").placeholder = initialValues[2];
  calculateMonthlyPayment(initialValues);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let valuesObj = getCurrentUIValues();
  values = Object.values(valuesObj);
  document.getElementById("loan-amount").placeholder = values[0];
  document.getElementById("loan-years").placeholder = values[1];
  document.getElementById("loan-rate").placeholder = values[2];
  calculateMonthlyPayment(values);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values)
  let i = values[2]/1200;
  let n = values[1]*12;
  let numerator = values[0]*i;
  console.log(numerator);
  let denominator = 1 - Math.pow(1 + i, -n);
  console.log(denominator);
  updateMonthly(numerator/denominator)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly);
  document.getElementById("monthly-payment").innerText = `$${Math.round(monthly)}`;
}
