/* 
autor: Tomas Perez Ponisio
ejercicio: 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var mensaje;

	nombreIngresado = prompt("Ingrese su nombre", "Nombre");

	mensaje = "Su nombre es: " + nombreIngresado;

	document.getElementById('txtIdNombre').value = mensaje;

}