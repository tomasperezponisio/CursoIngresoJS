/*
autor: Tomas Perez Ponisio
ejercicio: TP 12 - Rising BTL
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var estadoCivilValidado;
    var sueldoBruto;
    var legajo;
    var nacionalidad;
    var nacionalidadValidada;

    edadIngresada = prompt('Ingrese su edad');
    edadIngresada = parseInt(edadIngresada);
    while (edadIngresada < 18 || edadIngresada > 90)
    {
        edadIngresada = prompt('Ingrese una edad válida (de 18 a 90 años)');
        edadIngresada = parseInt(edadIngresada);
    }
    
    sexoIngresado = prompt("Ingrese su sexo, f ó m .");

    while(sexoIngresado != "f" && sexoIngresado != "m")
    {
        sexoIngresado = prompt("Ingrese sexo válido, f ó m .");
    }

    estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
    estadoCivilIngresado = parseInt(estadoCivilIngresado);

    while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 2 && estadoCivilIngresado != 4)
    {
        estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
        estadoCivilIngresado = parseInt(estadoCivilIngresado);
    }

    switch (estadoCivilIngresado)
    {
        case 1:
        {
            estadoCivilValidado = "Soltero";
            break;
        }
        case 2:
        {
            estadoCivilValidado = "Casado";
            break;
        }
        case 3:
        {
            estadoCivilValidado = "Divorciado";
            break;
        }
        case 4:
        {
            estadoCivilValidado = "Viudo";
            break;
        }
        default:
        {            
            break;
        }
    }

    sueldoBruto = prompt('Ingrese su sueldo bruto');
    sueldoBruto = parseInt(sueldoBruto);
    while (sueldoBruto < 8000)
    {        
        sueldoBruto = prompt('Ingrese su sueldo bruto, no menor a $8.000');
        sueldoBruto = parseInt(sueldoBruto);
    }

    legajo = prompt('Ingrese su número de legajo');
    legajo = parseInt(legajo);    
    while(legajo < 1000 || legajo > 9999)
    {
        legajo = prompt('EL número de legajo debe tener 4 cifras sin ceros a la izquierda.');
        legajo = parseInt(legajo);
    }

    nacionalidad = prompt("Ingrese su nacionalidad, A-para argentinos, E-para extranjeros, N-para nacionalizados");
    
    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
    {
        nacionalidad = prompt("Ingrese su nacionalidad, A-para argentinos, E-para extranjeros, N-para nacionalizados");
    }

    switch (nacionalidad)
    {
        case "A":
        {
            nacionalidadValidada = "argentino";
            break;
        }
        case "E":
        {
            nacionalidadValidada = "extranjero";
            break;
        }
        case "N":
        {
            nacionalidadValidada = "nacionalizado";
            break;
        }        
        default:
        {            
            break;
        }
    }
    
    document.getElementById('txtIdEdad').value = edadIngresada;
    document.getElementById('txtIdSexo').value = sexoIngresado;
    document.getElementById('txtIdEstadoCivil').value = estadoCivilValidado;
    document.getElementById('txtIdSueldo').value = sueldoBruto;
    document.getElementById('txtIdLegajo').value = legajo;
    document.getElementById('txtIdNacionalidad').value = nacionalidadValidada;
    
}
