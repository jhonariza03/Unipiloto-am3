var my_object ={};
my_object = {
	a:20,
	b:50
};

var suma= function()
{
	console.log('la suma total es:');
	console.log( my_object.a + my_object.b);
	console.log('la suma total es:'+ (my_object.a+my_object.b));
	console.log('la suma total es:'+ parseInt(my_object.a+my_object.b));
};

suma();