/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 05
*/
function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var mensaje;

	horaDelDia = document.getElementById('txtIdHora').value;
	horaDelDia = parseInt(horaDelDia);

	switch(horaDelDia) {
		case 7 :		
		case 8 : 		
		case 9 : 	
		case 10 : 		
		case 11 : {
			mensaje = "Es de mañana.";
			alert(mensaje);
			break;
		}		
	}
}//FIN DE LA FUNCIÓN