/*
autor: Tomas Perez Ponisio
ejercicio: Parcial 2019 05
Bienvenidos.
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se
puede pagar de todas las maneras Si es América tiene un 50% de descuento
y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago
o efectivo se le agrega un 15% mas de descuento Si es Europa tiene
un 20% de descuento y si ademas paga por débito se le agrega un 15% ,
por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
*/

function mostrar()
{
	var continenteIngresado;
	var cantidadDeDias;
	var precioPorDia;
	var descuentoPorcentaje;
	var descuento;
	var recargoPorcentaje;
	var recargo;
	var metodoDePago;
	var precioTotal;
	var precioFinal;
	var mensaje;

	continenteIngresado = document.getElementById('Marca').value;

	cantidadDeDias = prompt("Ingrese cuántos días quiere viajar");
	cantidadDeDias = parseInt(cantidadDeDias);

	metodoDePago = prompt("Cómo va a abonar? efectivo / débito / mercadoPago");

	precioPorDia = 100;
	descuentoPorcentaje = 0;
	recargoPorcentaje = 0;

	if(continenteIngresado == "América")
	{
		descuentoPorcentaje = 50;
		if (metodoDePago == "débito")
		{
			descuentoPorcentaje = descuentoPorcentaje + 10;
		}
	}
	else
	{
		if (continenteIngresado == "África")
		{
			descuentoPorcentaje = 60;
			if(metodoDePago == "efectivo" || metodoDePago == "mercadoPago")
			{
				descuentoPorcentaje = descuentoPorcentaje + 15;
			}
		}
		else
		{
			if (continenteIngresado == "Europa")
			{
				descuentoPorcentaje = 20;
				if(metodoDePago == "débito")
				{
					descuentoPorcentaje = descuentoPorcentaje + 15;
				}
				else
				{
					if (metodoDePago == "mercadoPago")
					{
						descuentoPorcentaje = descuentoPorcentaje + 10;
					}
					else
					{
						descuentoPorcentaje = descuentoPorcentaje + 5;
					}
				}
			}
			else
			{
				recargoPorcentaje = 20;
			}
		}
	}

	precioTotal = cantidadDeDias * precioPorDia;
	descuento = precioTotal * descuentoPorcentaje / 100;
	recargo = precioTotal * recargoPorcentaje / 100;

	precioFinal = precioTotal - descuento + recargo;

	mensaje = "Vas a viajar a: " + continenteIngresado + ", " + cantidadDeDias + " días, pagas con: " + metodoDePago + " ,te sale: $" + precioFinal + ", te hicimos $" + descuento + " de descuento (" + descuentoPorcentaje + "%) y tuviste un recargo de $" + recargo;

	alert(mensaje);
}
