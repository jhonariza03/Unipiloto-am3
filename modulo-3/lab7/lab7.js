var a,b;
a = prompt('Indique el primer valor');
b = prompt('Indique el segundo valor');


var operation= function(a,b){
	if(a>b)
	{
		alert('la suma de los numeros es: '+(a+b));
	}
	else if(a<b)
	{
		alert('la multiplicacion de a y b es: '+(a*b));
	}
	else if (a===b)
	{

		alert('la divicion de a y b es: '+(a/b));
	}
}

operation(a,b);