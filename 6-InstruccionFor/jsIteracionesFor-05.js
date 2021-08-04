/*
al presionar el botón repetir#
el pedido de número hasta que ingresemos el 9.
*/

function mostrar()
{
	var i;
	for (i = 0; i < 10; i++);
	{
		if (i == 9)
		{
			break; // rompe el for, sale directamente del for
		}
		document.write(i + "<br>");
	}

	var i;
	for (i = 0; i < 10; i++);
	{
		if (i == 9)
		{
			continue; // saltea lo que sigue y retoma el for en la proxima iteracion
		}
		document.write(i + "<br>");
	}
}