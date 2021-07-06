/*
autor: Tomas Perez Ponisio
ejercicio: 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var aumento;
	var sueldo;
	var resultado;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);
	aumento = sueldo * 0.1;
	resultado = sueldo + aumento;

	document.getElementById('txtIdResultado').value = resultado;	
}