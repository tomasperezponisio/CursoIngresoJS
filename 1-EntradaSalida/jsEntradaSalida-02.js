/*
autor: Tomas Perez Ponisio
ejercicio: 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	var mensaje;

	nombreIngresado = prompt("Ingrese su nombre", "Nombre");
	mensaje = "El nombre ingresado fue: " + nombreIngresado;

	alert(mensaje);
}