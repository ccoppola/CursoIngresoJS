function mostrar()
{
	let nota;
	let max = 10;
	let min = 1;

	nota = Math.floor(Math.random()*(max - min +1) + min);

	if (nota >=9)
	{
		alert("Nota: " + nota + " Excelente");
	}
    else if (nota >=4)
	{
		alert("Nota: " + nota + " Aprobó");
	}
	else
	{
		alert("Nota: " + nota + " Vamos, la proxima se puede ");
	}
}//FIN DE LA FUNCIÓN