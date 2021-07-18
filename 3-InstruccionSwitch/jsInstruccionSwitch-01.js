/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 01
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById('txtIdMes').value;
	var mensaje;

	switch(mesDelAño) {
		case "Enero" : {
			mensaje = "Que comiences bien el año!";
			break;
		}
		case "Marzo" : {
			mensaje = "A clases!";
			break;
		}
		case "Julio" : {
			mensaje = "Se vienen las vacaciones!";
			break;
		}
		case "Diciembre" : {
			mensaje = "Felices fiestas!";
			break;
		}
	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN