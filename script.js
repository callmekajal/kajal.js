let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = 'Error';
  }
}
