/*
autor: Tomas Perez Ponisio
ejercicio: TP 13 - FonteCristo
El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación
que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function NumerosPares () 
{
 	var numeroIngresado;
 	var contadorPares;
 	var contador;
 	
 	contadorPares = 0;
 	numeroIngresado = document.getElementById('txtIdNumero').value;
 	numeroIngresado = parseInt(numeroIngresado);

 	while(numeroIngresado < 1)
 	{ 		
 		numeroIngresado = prompt("Ingrese un número positivo");
 		numeroIngresado = parseInt(numeroIngresado); 		
 	}
 	document.getElementById('txtIdNumero').value = numeroIngresado;
 	contador = numeroIngresado;
 	
 	while(contador > -1)
 	{
 		if (contador % 2 == 0)
 		{
 			contadorPares ++;
 		}
 		contador --;
 	}
 	alert("la cantidad de pares es: " + contadorPares);

}

function NumerosImpares () 
{
 	var numeroIngresado;
 	var contadorImpares;
 	var contador;
 	
 	contadorImpares = 0;
 	numeroIngresado = document.getElementById('txtIdNumero').value;
 	numeroIngresado = parseInt(numeroIngresado);

 	while(numeroIngresado < 1)
 	{ 		
 		numeroIngresado = prompt("Ingrese un número positivo");
 		numeroIngresado = parseInt(numeroIngresado); 		
 	}
 	document.getElementById('txtIdNumero').value = numeroIngresado;
 	contador = numeroIngresado;
 	
 	while(contador > -1)
 	{
 		if (contador % 2 == 1)
 		{
 			contadorImpares ++;
 		}
 		contador --;
 	}
 	alert("la cantidad de impares es: " + contadorImpares);
}

function NumerosDivisibles () 
{
 	var numeroIngresado;
 	var contadorDivisibles;
 	var contador;
 	
 	contadorDivisibles = 0;
 	numeroIngresado = document.getElementById('txtIdNumero').value;
 	numeroIngresado = parseInt(numeroIngresado);

 	while(numeroIngresado < 1)
 	{ 		
 		numeroIngresado = prompt("Ingrese un número positivo");
 		numeroIngresado = parseInt(numeroIngresado); 		
 	}
 	document.getElementById('txtIdNumero').value = numeroIngresado;

 	contador = 1;
 	while (contador < 101)
 	{
 		if (contador % numeroIngresado == 0)
 		{
 			contadorDivisibles++;
 		}
 		contador++;
 	}
 	alert("la cantidad de divisibles es: " + contadorDivisibles);
}

function VerificarPrimo () // revisar el tema del numero q que no es primo
{
 	var numeroIngresado;
 	var controlPrimos;
 	var contador;
 	
 	controlPrimos = 0;
 	numeroIngresado = document.getElementById('txtIdNumero').value;
 	numeroIngresado = parseInt(numeroIngresado);

 	while(numeroIngresado < 1)
 	{ 		
 		numeroIngresado = prompt("Ingrese un número positivo");
 		numeroIngresado = parseInt(numeroIngresado); 		
 	}
 	document.getElementById('txtIdNumero').value = numeroIngresado;

 	contador = numeroIngresado;
 	while (contador > 0)
 	{
 		if (numeroIngresado % contador == 0)
 		{
 			controlPrimos++;
 		}
 		contador--;
 	}
 	if (controlPrimos == 2) 
 	{
 		alert("Es primo");
 	}
 	else
 	{
 		alert("No es primo");
 	}
}

function NumerosPrimos () 
{
 	var numeroIngresado;
 	var controlDivisores;
 	var contadorPrimos;
 	var contador;
 	var contador2;
 	
 	controlDivisores = 0;
 	contadorPrimos = 0;
 	numeroIngresado = document.getElementById('txtIdNumero').value;
 	numeroIngresado = parseInt(numeroIngresado);

 	while(numeroIngresado < 1)
 	{ 		
 		numeroIngresado = prompt("Ingrese un número positivo");
 		numeroIngresado = parseInt(numeroIngresado); 		
 	}
 	document.getElementById('txtIdNumero').value = numeroIngresado;

 	contador = numeroIngresado;
 	contador2 = numeroIngresado;
 	while (contador2 > 0) 
 	{ 		
 		while (contador > 0)
	 	{
	 		if (numeroIngresado % contador == 0)
	 		{
	 			controlDivisores++;
	 		}	 			 		
		 	contador--;
	 	}
	 	if (controlDivisores == 2)
	 	{
	 		contadorPrimos++;
	 	}
	 	controlDivisores = 0;
	 	contador2--;	 	
	 	contador = contador2;
	 	numeroIngresado--;
 	}
 	alert(contadorPrimos);

 	
}



