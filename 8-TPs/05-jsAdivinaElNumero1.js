/*
autor: Tomas Perez Ponisio
ejercicio: TP 5 - Adivina el número v1.0 (IF/SWITCH)
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

juegoIniciado = false;

function comenzar()
{	
	var mensaje;

	juegoIniciado = true;

	document.getElementById('txtIdNumero').value = ""; // reseteo el número ingresado en casa de hacer otra ronda sin darle f5

	contadorIntentos = 0;
	document.getElementById('txtIdIntentos').value = contadorIntentos;
	
	numeroSecreto = Math.floor(Math.random() * 100) + 1;

	mensaje = "Numero secreto generado";

	setTimeout(function()
		{
			alert(mensaje);
		}, 10);
}

//VERSION CON SWITCH
function verificar()
{
	if (juegoIniciado)
	{
		var numeroIngresado;
		var mensaje;
			
		numeroIngresado = document.getElementById('txtIdNumero').value;
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado) // si ingresaron un número para verificar sigo...
		{
			switch (numeroIngresado){
				case numeroSecreto:
				{
					contadorIntentos += 1;	
					juegoIniciado = false;	
					mensaje = "Usted es el ganador! y en solo " + contadorIntentos + " intentos.";
					break;
				}
				default:
				{
					if (numeroIngresado < numeroSecreto)
					{
						contadorIntentos += 1;
						mensaje = "falta...";			
					}
					else
					{
						contadorIntentos += 1;	
						mensaje = "te pasaste...";			
					}
				}
			}
		}
		else // no ingresó número para verificar, se lo vuelvo a pedir
		{
			mensaje = "Ingrese un número para verificar";
		}	
		
		document.getElementById('txtIdIntentos').value = contadorIntentos;

		setTimeout(function() // delay para actualizar el contador antes de tirar el alert
			{
				alert(mensaje);
			}, 10);	
	}
	else
	{
		alert("Comience el juego antes de verificar");
	}
	
}

//VERSION CON IF
/*function verificar()
{
	var numeroIngresado;
	var mensaje;
		
	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado = parseInt(numeroIngresado);
	
	if (numeroIngresado) // si ingresaron un número para verificar sigo...
	{
		if (numeroIngresado == numeroSecreto)
		{
			contadorIntentos += 1;		
			mensaje = "Usted es el ganador! y en solo " + contadorIntentos + " intentos.";
		}
		else
		{
			if (numeroIngresado < numeroSecreto)
			{
				contadorIntentos += 1;
				mensaje = "falta...";			
			}
			else
			{
				contadorIntentos += 1;	
				mensaje = "te pasaste...";			
			}
		}
	}
	else // no ingresó número para verificar, se lo vuelvo a pedir
	{
		mensaje = "Ingrese un número para verificar";
	}	
		
	document.getElementById('txtIdIntentos').value = contadorIntentos;

	setTimeout(function() // delay para actualizar el contador antes de tirar el alert
		{
			alert(mensaje);
		}, 10);	
}*/