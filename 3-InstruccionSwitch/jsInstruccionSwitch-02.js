/*
autor: Tomas Perez Ponisio
ejercicio: SWITCH 02
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño = document.getElementById('txtIdMes').value;
	var mensaje;

	switch(mesDelAño) {
		case "Enero" : 
		case "Febrero" : 
		case "Marzo" : 
		case "Abril" : 
		case "Mayo" : 
		case "Junio": {
			mensaje = "Falta para el invierno";
			break;
		}
		case "Julio" : 
		case "Agosto" : {
			mensaje	= "Abrigate que hace frío";
			break;
		}
		case "Septiembre" : 
		case "Octubre"  : 
		case  "Noviembre" : 
		case "Diciembre" : {
			mensaje = "Ya pasamos el frío, ahora calor!";
			break;
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN