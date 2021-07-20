/*
autor: Tomas Perez Ponisio
ejercicio: WHILE 09
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero = "es el primero";
	respuesta = 'si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero == "es el primero")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "Ya no es el primero"
		}

		if (numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else 
		{
			if (numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta = prompt("desea continuar? si / no");
	}

	document.getElementById('txtIdMaximo').value = "El número máximo ingresado fue: " + numeroMaximo;
	document.getElementById('txtIdMinimo').value = "El número mínimo ingresado fue: " + numeroMinimo;
}//FIN DE LA FUNCIÓN