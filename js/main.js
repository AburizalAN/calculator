$(document).ready(function() {
  let numbers = '';
  let result = 0;
  let currentOperator = '';
  let operator = '+';

  $("#display-number").val("");

  $(".button.number").click(function() {
    numbers += $(this).text();
    $("#display-number").val(numbers);
  });

  $(".button.clear").click(function() {
    numbers = '';
    result = 0;
    operator = '';
    $(".showCalculate").text(``)
    $("#display-number").val(numbers);
  })

  $(".button.operator").click(function() {
    currentOperator = $(this).attr('value');
    $("#display-operator").val(currentOperator);
    calculate();
    operator = currentOperator
    $("#display-number").val(result);
    numbers = '';
  })

  $(".button.back").click(function() {
    if (numbers.trim().length > 0) {
      numbers = numbers.substring(0, numbers.length - 1);
      $("#display-number").val(numbers);
    } else {
      result = 0;
      $("#display-number").val('');
      $(".showCalculate").text('')
    }
  })

  $(".button.inverse").click(function() {
    if (numbers.trim().length > 0) {
      inverseNumbers()
    } else {
      inverseResult()
    }
  })

  $(".button.equal").click(function() {
    calculate();
    $("#display-number").val(result);
    numbers = '';
  })

  function calculate() {
    if (numbers.trim().length > 0) {
      showCalculate();
      switch (operator) {
        case '+':
          result = parseInt(numbers) + parseInt(result);
          break;
        case '-':
          result = parseInt(result) - parseInt(numbers);
          break;
        case '*':
          result = parseInt(result) * parseInt(numbers);
          break;
        case '/':
          result = parseInt(result) / parseInt(numbers);
          break;
        case '%':
          result = parseInt(result) % parseInt(numbers);
          break;
        default:
          result = parseInt(numbers) + parseInt(result);
          break;
      }
    }
  }

  function inverseNumbers() {
    if (numbers[0] != '-') {
      numbers = `-${numbers}`;
      $("#display-number").val(numbers);
    } else {
      numbers = numbers.slice(1);
      $("#display-number").val(numbers);
    }
  }

  function inverseResult() {
    if (result[0] != '-') {
      result = `-${result}`;
      $("#display-number").val(result);
    } else {
      result = result.slice(1);
      $("#display-number").val(result);
    }
  }

  function showCalculate() {
    if (operator.trim().length > 0) {
      $(".showCalculate").text(`${result} ${operator} ${numbers}`)
    }
  }

});