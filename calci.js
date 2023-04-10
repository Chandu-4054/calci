function addChar(char) {
    document.getElementById('result').value += char;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function calculate() {
    var expression = document.getElementById('result').value;
    var result = eval(expression);
    document.getElementById('result').value = result;
  }
  