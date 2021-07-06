/*
autor: Tomas Perez Ponisio
ejercicio: 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroUno = parseInt(numeroUno)

	numeroDos = document.getElementById('txtIdNumeroDos').value; 
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	mensaje	= "La suma es: " + resultado;

	alert(mensaje);
}