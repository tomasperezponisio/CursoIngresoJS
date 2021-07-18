/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 06
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var mensaje;

	horaDelDia = document.getElementById('txtIdHora').value;
	horaDelDia = parseInt(horaDelDia);

	switch(horaDelDia) {
		case 0 :		
		case 1 : 		
		case 2 : 	
		case 3 :
		case 4 : 	
		case 5 :
		case 6 : 	
		case 20 :
		case 21 : 	
		case 22 :
		case 23 : 	
		case 24 : {
			mensaje = "Es de noche.";			
			break;
		}
		case 7 :		
		case 8 : 		
		case 9 : 	
		case 10 : 		
		case 11 : {
			mensaje = "Es de mañana.";		
			break;
		}		
		case 12 :		
		case 13 : 		
		case 14 : 	
		case 15 :
		case 16 : 		
		case 17 : 	
		case 18 : 		
		case 19 : {
			mensaje = "Es de tarde.";		
			break;
		}
		default: {
			mensaje = "La hora no existe.";
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN