/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 07
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado) {
		case "Bariloche" : {
			mensaje = "Oeste";
			break;
		}		
		case "Cataratas" : {
			mensaje = "Norte";			
			break;
		}
		case "Mar del plata" : {
			mensaje = "Este";		
			break;
		}		
		case "Ushuaia" : {
			mensaje = "Sur";		
			break;
		}
		default: {
			mensaje = "Seleccione un destino";
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN