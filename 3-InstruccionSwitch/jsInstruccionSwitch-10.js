/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 10
*/
function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	
	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch (estacionIngresada) 
	{
		case "Invierno" :
		{
			switch (destinoIngresado)
			{
				case "Bariloche":
				{
					mensaje = "Se viaja";
					break;
				}
				default:
				{
					mensaje = "No se viaja";
				}
			}
			break;
		}
		case "Verano" :
		{
			switch (destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
				{
					mensaje = "Se viaja";
					break;
				}
				default:
				{
					mensaje = "No se viaja";
				}
			}
			break;
		}
		case "Otoño" :
		{
			mensaje = "Se viaja";
			break;
		}
		case "Primavera" :
		{
			switch (destinoIngresado)
			{
				case "Bariloche":
				{
					mensaje = "No se viaja";
					break;
				}
				default:
				{
					mensaje = "Se viaja";
				}		
			}
			break;
		}

	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN