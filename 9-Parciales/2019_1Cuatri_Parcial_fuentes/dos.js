/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 02
Bienvenidos.
A una pareja se le pide los datos para mostrar
un mensaje " ustedes se llaman xxxxx y xxxx pesan xx
y xx kilos, que sumados son xx kilos y el promedio de peso xx "
*/
function mostrar()
{
	var nombreIngresadoUno;
	var nombreIngresadoDos;
	var pesoIngresadoUno;
	var pesoIngresadoDos;
	var sumaDePesos;
	var promedioDePesos;
	var mensaje;

	//Entrada
	nombreIngresadoUno = prompt("Ingrese su nombre");
	pesoIngresadoUno = prompt("Ingrese su peso");
	pesoIngresadoUno = parseInt(pesoIngresadoUno);

	nombreIngresadoDos = prompt("Ingrese su nombre");
	pesoIngresadoDos = prompt("Ingrese su peso");
	pesoIngresadoDos = parseInt(pesoIngresadoDos);

	//Proceso
	sumaDePesos = pesoIngresadoUno + pesoIngresadoDos;
	promedioDePesos = ( pesoIngresadoUno + pesoIngresadoDos ) / 2;

	//Salida
	mensaje = "ustedes se llaman " + nombreIngresadoUno + " y " + nombreIngresadoDos + " pesan " + pesoIngresadoUno + " y " + pesoIngresadoDos + " kilos, que sumados son " + sumaDePesos + " kilos y el promedio de peso es " + promedioDePesos + " kilos.";
 	alert(mensaje); 
}
