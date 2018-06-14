function calculo() {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
  
    var resultado = parseFloat((2*n1 + 3*n2) / 5);
  
    document.getElementById('txtResultado').setAttribute("value", resultado);
  }

  