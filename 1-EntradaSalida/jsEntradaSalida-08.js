/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var resto;
	numeroUno = parseInt(txtIdNumeroDividendo.value);
	numeroDos = parseInt(txtIdNumeroDivisor.value);
	if (numeroDos == 0) {		
		alert("No se puede dividir por cero.");
	}
	else {
		resto = numeroUno % numeroDos;
		alert("El resto es: " + resto);
	}
}
