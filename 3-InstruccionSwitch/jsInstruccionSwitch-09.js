function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	var tarifa;
	var aumento;
	var descuento;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;
	tarifa = 15000;
	aumento = 0;
	descuento = 0;

	switch(destinoIngresado) {
		case "Bariloche" :
		case "Mar del plata" :
		case "Ushuaia" : {
			mensaje = "Frío";		
			break;
		}case "Cataratas" : {
			mensaje = "Calor";			
			break;
		}
		default: {
			mensaje = "Seleccione un destino";
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN