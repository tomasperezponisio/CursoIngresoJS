/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2020 Punto A + B + C
*/

function mostrar()
{
	var productoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado
	var contador;
	var fabricanteMasBarato;
	var precioMenor;
	var cantidadDelMasBarato;
	var banderaBarato;
	var cantidadMaxima;
	var mayorCantidadProducto;
	var mensajeA;
	var mensajeB;
	var mensajeC;
	var cantidadMaximaParaPromedio;
	var contadorParaPromedio;
	var unidadesPromedio;
	var acumuladorUnidadesAlcohol;
	var acumuladorUnidadesJabon;
	var acumuladorUnidadesBarbijo;
	var contadorUnidadesAlcohol;
	var contadorUnidadesJabon;
	var contadorUnidadesBarbijo;
	
	contador = 0;
	banderaBarato = true;
	cantidadMaximaParaPromedio = 0;
	contadorParaPromedio = 0;
	contadorUnidadesAlcohol = 0;
	contadorUnidadesJabon = 0;
	contadorUnidadesBarbijo = 0;
	acumuladorUnidadesAlcohol = 0;
	acumuladorUnidadesJabon = 0;
	acumuladorUnidadesBarbijo = 0;

	while (contador < 5)
	{
		productoIngresado = prompt("Ingrese un producto (barbijo / jabón / alcohol)");
		while (productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol")
		{
			productoIngresado = prompt("Ingrese un producto correcto (barbijo / jabón / alcohol)");
		}

		precioIngresado = prompt("Ingrese el precio (100-300)");
		precioIngresado = parseInt(precioIngresado);
		while (precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Ingrese el precio correcto (100-300)");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese la cantidad de productos (1-1000)");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("Ingrese una cantidad correcta (1-1000)");
			cantidadIngresada = parseInt(cantidadIngresada);
		}
		marcaIngresada = prompt("Ingrese la marca");
		fabricanteIngresado = prompt("Ingrese el fabricante");

		if (productoIngresado == "alcohol")
		{
			if (precioIngresado < precioMenor || banderaBarato == true)
			{
				precioMenor = precioIngresado;
				fabricanteMasBarato = fabricanteIngresado;
				cantidadDelMasBarato = cantidadIngresada;
				banderaBarato = false;
			}
		}

		switch (productoIngresado)
		{
			case "alcohol" :
			{
				acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + cantidadIngresada;
				contadorUnidadesAlcohol++;
				break;
			}
			case "barbijo" :
			{
				acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + cantidadIngresada;	
				contadorUnidadesBarbijo++;
				break;
			}
			case "jabón" :
			{
				acumuladorUnidadesJabon = acumuladorUnidadesJabon + cantidadIngresada;	
				contadorUnidadesJabon++;
				break;
			}
		}

		if (acumuladorUnidadesJabon > acumuladorUnidadesBarbijo && acumuladorUnidadesJabon > acumuladorUnidadesAlcohol)
		{
			//jabon
			cantidadMaximaParaPromedio = acumuladorUnidadesJabon;
			contadorParaPromedio = contadorUnidadesJabon;
			mayorCantidadProducto = "jabón";
		}
		else
		{
			if (acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijo)
			{
				// alcohol
				cantidadMaximaParaPromedio = acumuladorUnidadesAlcohol;
				contadorParaPromedio = contadorUnidadesAlcohol;
				mayorCantidadProducto = "alcohol";
			}
			else
			{
				//barbijo
				cantidadMaximaParaPromedio = acumuladorUnidadesBarbijo;
				contadorParaPromedio = contadorUnidadesBarbijo;
				mayorCantidadProducto = "barbijo";
			}
		}

		contador++;
	}
	
	unidadesPromedio = cantidadMaximaParaPromedio / contadorParaPromedio;

	mensajeA = "Del alcohol más barato se cargaron " + cantidadDelMasBarato + " unidades, y el fabricante es " + fabricanteMasBarato;
	mensajeB = "El producto con más unidades fue: " + mayorCantidadProducto + ", se hicieron " + contadorParaPromedio + " compras, por un total de " + cantidadMaximaParaPromedio + ",en promedio fueron " + unidadesPromedio + " unidades por compra";
	mensajeC = "En total se ingresaron " + acumuladorUnidadesJabon + " jabones";

	alert(mensajeA);
	alert(mensajeB);
	alert(mensajeC);
}
