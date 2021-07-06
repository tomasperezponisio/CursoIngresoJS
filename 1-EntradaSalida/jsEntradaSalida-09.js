/*
autor: Tomas Perez Ponisio
ejercicio: 09bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var aumento;
	var sueldo;
	var resultado;
	var aumentoPorcentaje;
	
	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);

	aumentoPorcentaje = prompt("Qué aumento le damos?", 10);

	aumento = sueldo * (aumentoPorcentaje / 100);
	
	resultado = sueldo + aumento;

	document.getElementById('txtIdResultado').value = resultado;	
}