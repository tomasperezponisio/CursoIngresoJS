/*
autor: Tomas Perez Ponisio
ejercicio: TP 1 - Ferrete Facturación
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;
	var mensaje;

	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroDos = parseInt(numeroDos);

	numeroTres = document.getElementById('txtIdPrecioTres').value;
	numeroTres = parseInt(numeroTres);

	suma = numeroUno + numeroDos + numeroTres;

	mensaje = "La suma es: " + suma;

	alert(mensaje);	
}

function Promedio () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var promedio;
	var mensaje;

	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroDos = parseInt(numeroDos);

	numeroTres = document.getElementById('txtIdPrecioTres').value;
	numeroTres = parseInt(numeroTres);

	promedio = (numeroUno + numeroDos + numeroTres) / 3;

	mensaje = "El promedio es: " + promedio;

	alert(mensaje);	
}

function PrecioFinal () 
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var suma;
	var mensaje;
	var iva;
	var totalConIva;

	numeroUno = document.getElementById('txtIdPrecioUno').value;
	numeroUno = parseInt(numeroUno);

	numeroDos = document.getElementById('txtIdPrecioDos').value;
	numeroDos = parseInt(numeroDos);

	numeroTres = document.getElementById('txtIdPrecioTres').value;
	numeroTres = parseInt(numeroTres);

	iva = 21; 

	suma = numeroUno + numeroDos + numeroTres;

	totalConIva = suma + (suma * iva / 100);

	mensaje = "El total con impuestos es: " + totalConIva;

	alert(mensaje);	
	
}