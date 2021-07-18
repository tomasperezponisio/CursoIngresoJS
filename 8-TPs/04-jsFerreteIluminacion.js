/*4.
autor: Tomas Perez Ponisio
ejercicio: TP 4 - Ferrete iluminación
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//VERSION SOLO CON IF
/*function CalcularPrecio () 
{
    var cantidadDeLamparas;
    var precioPorLampara;
    var descuentoPorcentaje;
    var descuento;
    var marcaDeLampara;
    var precioTotal;
    var precioFinalConDescuento;
    var ingresosBrutos;
    var precioFinal;

    cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marcaDeLampara = document.getElementById('Marca').value;

    precioPorLampara = 35;

    if (cantidadDeLamparas > 5)
    {
        descuentoPorcentaje = 50;
    }
    else
    {
        if (cantidadDeLamparas == 5)
        {
            //codigo
            if (marcaDeLampara == "ArgentinaLuz")
            {
                descuentoPorcentaje = 40;
            }
            else
            {
                descuentoPorcentaje = 30;
            }            
        }
        else 
        {
            if (cantidadDeLamparas == 4)
            {
                //codigo
                if (marcaDeLampara == "ArgentinaLuz" || marcaDeLampara == "FelipeLamparas")
                {
                    descuentoPorcentaje = 25;
                }
                else
                {
                    descuentoPorcentaje = 20;
                }
            }
            else
            {
                if (cantidadDeLamparas ==3)
                {
                    //codigo
                    if (marcaDeLampara == "ArgentinaLuz")
                    {
                        descuentoPorcentaje = 15;
                    }
                    else
                    {
                        if (marcaDeLampara == "FelipeLamparas")
                        {   
                            descuentoPorcentaje = 10;
                        }
                        else
                        {
                            descuentoPorcentaje = 5;
                        }
                    }
                }
                else
                {
                    //codigo del resto
                    descuentoPorcentaje = 0;
                }
            }
        }
    }

    precioTotal = cantidadDeLamparas * precioPorLampara;
    descuento = precioTotal * descuentoPorcentaje / 100;
    precioFinalConDescuento = precioTotal - descuento;

    if (precioFinalConDescuento > 120)
    {
        ingresosBrutos = precioFinalConDescuento * 10 / 100;
        precioFinal = precioFinalConDescuento + ingresosBrutos;
        mensaje = "Precio con descuento (" + descuentoPorcentaje + "%) es: $" + precioFinalConDescuento + " y paga IIBB (10%), total de: $" + precioFinal;
    }
    else
    {
        precioFinal = precioFinalConDescuento;
        mensaje = "Precio con descuento (" + descuentoPorcentaje + "%) es: $" + precioFinalConDescuento + " y no paga IIBB (10%)";
    }

    document.getElementById('txtIdprecioDescuento').value = mensaje;
}*/

// VERSION CON SWITCH E IF 
function CalcularPrecio () 
{
 	var cantidadDeLamparas;
    var precioPorLampara;
    var descuentoPorcentaje;
    var descuento;
    var marcaDeLampara;
    var precioTotal;
    var precioFinalConDescuento;
    var ingresosBrutos;
    var precioFinal;

    cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marcaDeLampara = document.getElementById('Marca').value;

    precioPorLampara = 35;

    switch (cantidadDeLamparas) 
    {
        case 2:
        case 1:
        {
            descuentoPorcentaje = 0;                
            break;
        }
        case 5:
        {
            if (marcaDeLampara == "ArgentinaLuz")
            {
                descuentoPorcentaje = 40;
            }
            else
            {
                descuentoPorcentaje = 30;
            }    
            break;
        }
        case 4:
        {
            if (marcaDeLampara == "ArgentinaLuz" || marcaDeLampara == "FelipeLamparas")
            {
                descuentoPorcentaje = 25;
            }
            else
            {
                descuentoPorcentaje = 20;
            }
            break;
        }
        case 3:
        {
            if (marcaDeLampara == "ArgentinaLuz")
            {
                descuentoPorcentaje = 15;
            }
            else
            {
                if (marcaDeLampara == "FelipeLamparas")
                {
                    descuentoPorcentaje = 10;
                }
                else
                {
                    descuentoPorcentaje = 5;
                }                
            }
            break;
        }
        default:
        {
            descuentoPorcentaje = 50;            
        }
    }


    precioTotal = cantidadDeLamparas * precioPorLampara;
    descuento = precioTotal * descuentoPorcentaje / 100;
    precioFinalConDescuento = precioTotal - descuento;

    if (precioFinalConDescuento > 120)
    {
        ingresosBrutos = precioFinalConDescuento * 10 / 100;
        precioFinal = precioFinalConDescuento + ingresosBrutos;
        mensaje = "Precio con descuento (" + descuentoPorcentaje + "%) es: $" + precioFinalConDescuento + " y paga IIBB (10%), total de: $" + precioFinal;
    }
    else
    {
        precioFinal = precioFinalConDescuento;
        mensaje = "Precio con descuento (" + descuentoPorcentaje + "%) es: $" + precioFinalConDescuento + " y no paga IIBB (10%)";
    }

    document.getElementById('txtIdprecioDescuento').value = mensaje;
}
