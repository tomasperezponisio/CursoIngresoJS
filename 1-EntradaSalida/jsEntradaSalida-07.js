/*
autor: Tomas Perez Ponisio
ejercicio: 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno)

	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos)

	resultado = numeroUno + numeroDos;

	alert("La suma es: " + resultado);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno)

	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos)

	resultado = numeroUno - numeroDos;

	alert("La resta es: " + resultado);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno)

	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos)
	
	resultado = numeroUno * numeroDos;

	alert("El producto es: " + resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno)

	numeroDos = document.getElementById('txtIdNumeroDos').value;
	numeroDos = parseInt(numeroDos)

	if (numeroDos == 0) {		
		alert("No se puede dividir por cero.");
	}
	else {
		resultado = numeroUno / numeroDos;
		alert("El resultado es: " + resultado);
	}
}

