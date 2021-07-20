/*
autor: Tomas Perez Ponisio
ejercicio: TP 6 - Adivina el número v2.0 (IF/SWITCH)
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
var juegoIniciado;

juegoIniciado = false;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100	
	var mensaje;

	juegoIniciado = true;

	document.getElementById('txtIdNumero').value = ""; // reseteo el número ingresado en casa de hacer otra ronda sin darle f5

	contadorIntentos = 0; // reseteo el contador de intentos
	document.getElementById('txtIdIntentos').value = contadorIntentos;
	
	numeroSecreto = Math.floor(Math.random() * 100) + 1; //genero el número secreto

	mensaje = "Numero secreto generado";

	setTimeout(function() // delay para que se actualicen los campos antes del alert
		{
			alert(mensaje);
		}, 10);
}

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
			contadorIntentos ++;
			if (numeroIngresado == numeroSecreto) // adivinó
			{				
				juegoIniciado = false;		
				switch (contadorIntentos) //cuando adivinó me fijo cuantos intentos tuvo
				{
					case 1:
					{
						mensaje = "Adivinó en " + contadorIntentos + " intentos . Usted es psíquico!";
						break;
					}
					case 2:
					{
						mensaje = "Adivinó en " + contadorIntentos + " intentos . Excelente percepción";
						break;
					}
					case 3:
					{
						mensaje = "Adivinó en " + contadorIntentos + " intentos . Esto es suerte";
						break;
					}
					case 4:
					{
						mensaje = "Adivinó en " + contadorIntentos + " intentos . Excelente técnica";
						break;
					}
					case 5:
					{
						mensaje = "Adivinó en " + contadorIntentos + " intentos . Usted está en la media";
						break;
					}					
					default:
					{
						if (contadorIntentos < 11)
						{
							mensaje = "Adivinó en " + contadorIntentos + " intentos . Falta técnica";
						}
						else
						{
							mensaje = "Adivinó en " + contadorIntentos + " intentos . Afortunado en el amor!";	
						}						
						break;
					}
				}	
			}
			else
			{
				if (numeroIngresado < numeroSecreto) // no adivinó y se quedó corto
				{					
					mensaje = "falta...";			
				}
				else // no adivinó y se pasó
				{					
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
	}
	else
	{
		alert("Comience el juego antes de verificar");
	}	
}