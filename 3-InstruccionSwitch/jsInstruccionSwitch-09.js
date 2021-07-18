/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 09
*/
function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var mensaje;
	var tarifa;
	var aumentoPorcentaje;
	var descuentoPorcentaje;
	var aumento;
	var descuento;
	var tarifaFinal;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	tarifa = 15000;
	aumentoPorcentaje = 0;
	descuentoPorcentaje = 0;

	switch(estacionIngresada) {
		case "Invierno" : {
			switch(destinoIngresado) {
				case "Bariloche" : {
					aumentoPorcentaje = 20;
					descuentoPorcentaje = 0;
					break;
				}
				case "Cataratas" :
				case "Cordoba" : {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 10;
					break;	
				}
				case "Mar del plata" : {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 20;
					break;
				}
				default: {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 0;
				}
			} 
			break;
		}
		case "Verano" : {
			switch(destinoIngresado) {
				case "Bariloche" : {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 20;
					break;
				}
				case "Cataratas" :
				case "Cordoba" : {
					aumentoPorcentaje = 10;
					descuentoPorcentaje = 0;
					break;	
				}
				case "Mar del plata" : {
					aumentoPorcentaje = 20;
					descuentoPorcentaje = 0;
					break;
				}
				default: {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 0;
				}			
			}
			break;			
		}
		case "Otoño" : {
		}
		case "Primavera" : {
			switch(destinoIngresado) {
				case "Bariloche" :
				case "Cataratas" :
				case "Mar del plata" : {
					aumentoPorcentaje = 10;
					descuentoPorcentaje = 0;
					break;
				}
				case "Cordoba" : {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 0;
					break;	
				}
				
				default: {
					aumentoPorcentaje = 0;
					descuentoPorcentaje = 0;
				}			
			}
			break;			
		}
		default: {
			mensaje = "...";
		}
	}

	aumento = tarifa * aumentoPorcentaje / 100 ;
	descuento = tarifa * descuentoPorcentaje / 100 ;

	tarifaFinal = tarifa + aumento - descuento;

	mensaje = "Ir a " + destinoIngresado + " en " + estacionIngresada + " te sale $" + tarifaFinal;

	alert(mensaje);

}//FIN DE LA FUNCIÓN