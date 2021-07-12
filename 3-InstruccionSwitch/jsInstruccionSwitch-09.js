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

	switch(estacionIngresada) {
		case "Invierno" : {
			switch(destinoIngresado) {
				case "Bariloche" : {
					aumento = 20;
					descuento = 0;
					break;
				}
				case "Cataratas" :
				case "Cordoba" : {
					aumento = 0;
					descuento = 10;
					break;	
				}
				case "Mar del plata" : {
					aumento = 0;
					descuento = 20;
					break;
				}
				default: {
					aumento = 0;
					descuento = 0;
				}
			} 
			break;
		}
		case "Verano" : {
			case "Bariloche" : {
					aumento = 0;
					descuento = 20;
					break;
				}
				case "Cataratas" :
				case "Cordoba" : {
					aumento = 10;
					descuento = 0;
					break;	
				}
				case "Mar del plata" : {
					aumento = 20;
					descuento = 0;
					break;
				}
				default: {
					aumento = 0;
					descuento = 0;
				}
			break;
		}
		case "Otoño" : {
		}
		case "Primavera" : {
			case "Bariloche" :
				case "Cataratas" :
				case "Mar del plata" : {
					aumento = 10;
					descuento = 0;
					break;
				}
				case "Cordoba" : {
					aumento = 0;
					descuento = 0;
					break;	
				}
				
				default: {
					aumento = 0;
					descuento = 0;
				}
			break;
		}
		default: {
			mensaje = "...";
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN