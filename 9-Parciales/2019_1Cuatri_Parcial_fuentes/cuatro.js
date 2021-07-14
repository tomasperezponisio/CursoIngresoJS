/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 04
Bienvenidos.
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/

// CON IF
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var mensaje;
	var resultado;

	numeroUno = prompt("Ingrese un número");	

	numeroDos = prompt("Ingrese otro número");
	
	if (numeroUno == numeroDos)
	{
		mensaje = "Los numeros son iguales, van concatenados: " + numeroUno + numeroDos;
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);
		if (numeroUno > numeroDos)
		{
			resultado = numeroUno - numeroDos;
			mensaje = "El primer número es mayor, la resta da: " + resultado;
			if (resultado > 10)
			{
				mensaje = mensaje + " y superó a 10";
			}
		}
		else
		{
			resultado = numeroUno + numeroDos;
			mensaje = "El segundo número es mayor, la suma da: " + resultado;	
		}
	}

	alert(mensaje);
}
