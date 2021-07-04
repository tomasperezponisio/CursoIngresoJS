/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado = prompt("Ingrese su nombre", "Nombre");
	txtIdNombre.value = nombreIngresado;
	//alert("El nombre ingresado fue: " + nombreIngresado);
}

