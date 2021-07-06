/*
autor: Tomas Perez Ponisio
ejercicio: 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado = document.getElementById('txtIdNombre').value;
	//nombreIngresado = txtIdNombre.value;
	
	alert("El nombre ingresado fue: " + nombreIngresado);
}