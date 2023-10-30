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
    // ??? what does +() mean
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 4.5,
  }
  const amountUI = document.querySelector('#loan-amount');
  const yearsUI = document.querySelector('#loan-years');
  const rateUI = document.querySelector('#loan-rate'); 
  amountUI.value = values.amount;
  yearsUI.value = values.years;
  rateUI.value = values.rate;

  update(); // based on the default values, give the default monthly payment
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIValue = getCurrentUIValues();
  //console.log(UIvalue);
  const monthlyPayment = calculateMonthlyPayment(currentUIValue);
  //console.log(monthlyPayment);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //console.log(values);
  let i = (values.rate /100) / 12;
  let P = values.amount;
  let n = values.years * 12;
  //console.log(i, P, n);
  const monthlyPayment = ((P * i) / (1 - Math.pow((1 + i), (0 - n)))).toFixed(2);
  //console.log(monthlyPayment);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  document.querySelector('#monthly-payment').innerText = monthlyPayment;
}
