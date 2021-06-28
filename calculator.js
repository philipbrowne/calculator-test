window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  let loanRate = document.getElementById("loan-rate").value;
  if (loanRate.includes('%') === true) {
    loanRate = (parseFloat(loanRate.substring(0, loanRate.length - 1))/100).toFixed(2)
  } else if (loanRate > 1) {
    loanRate = parseFloat((loanRate) / 100);
  }
  let loanAmount = document.getElementById('loan-amount').value;
  if (loanAmount.includes('$') === true) {
    loanAmount = parseFloat(loanAmount.substring(1, loanAmount.length)).toFixed(2);
  }

  return {
    amount: (loanAmount),
    years: (document.getElementById('loan-years').value),
    rate: (loanRate),
  }
}



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 25000, years: 20, rate: 3.5 };
  const amountInput = document.getElementById('loan-amount');
  amountInput.value = values.amount;
  const yearsInput = document.getElementById('loan-years');
  yearsInput.value = values.years;
  const rateInput = document.getElementById('loan-rate');
  rateInput.value = values.rate;
  update(values)
}

// Get the current values from the UI
// Update the monthly payment
function update(values) {
  const monthlyPrice = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(monthlyPrice))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthlyRate = values.rate / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment')
  monthlyPayment.innerText = `$${monthly}`
}
