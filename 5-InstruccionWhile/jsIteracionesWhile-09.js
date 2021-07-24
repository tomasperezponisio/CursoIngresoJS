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
	var seguir;

	//iniciar variables
	banderaDelPrimero = true;
	seguir = true;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		/*
		if (banderaDelPrimero == true) // algoritmo de maximo y minimo con banderas
		{
			banderaDelPrimero = false;
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;			
		}
		else
		{
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
		}
		*/

		if (numeroIngresado > numeroMaximo || banderaDelPrimero == true) // algoritmo de maximo y minimo con banderas
		{
			numeroMaximo = numeroIngresado;			
		}
		if (numeroIngresado < numeroMinimo || banderaDelPrimero == true)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		seguir = confirm("desea continuar?");
	}

	document.getElementById('txtIdMaximo').value = "El número máximo ingresado fue: " + numeroMaximo;
	document.getElementById('txtIdMinimo').value = "El número mínimo ingresado fue: " + numeroMinimo;
}//FIN DE LA FUNCIÓN