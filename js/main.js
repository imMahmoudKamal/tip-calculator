const tipAmount = document.querySelector('[data-tip]');
const tipTotal = document.querySelector('[data-total]');
const allInputs = document.querySelectorAll('input');
const customTip = document.querySelector('[data-custom-tip]');
const resetBtn = document.querySelector('[data-reset]');

allInputs.forEach((input) => {
  input.addEventListener('input', (event) => {
    const billAmout = +document.querySelector('#bill').value;
    const peopleNum = +document.querySelector('#people').value;
    let tipAmout;

    if (event.target.name === 'cutom') {
      tipAmout = +customTip.value / 100;
    } else {
      customTip.value = '';

      document.querySelectorAll("[type='radio']").forEach((input) => {
        if (input.checked) {
          tipAmout = +input.value / 100;
        }
      });
    }

    if (billAmout && peopleNum && tipAmout) {
      tipAmount.textContent = ((billAmout * tipAmout) / peopleNum).toFixed(2);

      tipTotal.textContent = ((billAmout + billAmout * tipAmout) / peopleNum).toFixed(2);
    }
  });
});

resetBtn.addEventListener('click', () => {
  tipAmount.textContent = '0.00';
  tipTotal.textContent = '0.00';
});

customTip.addEventListener('focus', () => {
  document.querySelectorAll("[type='radio']").forEach((input) => {
    input.checked = false;
  });
});
