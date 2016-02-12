//tengo un severo problema para buscar nombres buenos
var paises=["AR", "BR", "BL","UY", "US"];
var todoslospaises={
	AR:{
		AR:1,
		BR:0.27262,
		BL:0.46393,
		US:0.06910,
		UY:2.12074
	},
	BR:{
		BR:1,
		AR:3.65943,
		BL:1.69865,
		US:0.25299,
		UY:7.76500

	},
	BL:{
		BL:1,
		AR:2.04668,
		BR:0.55827,
		US:0.14149,
		UY:0.55827
	},
	UY:{
		UY:1,
		AR:0.45555,
		BL:0.21146,
		US:0.03149,
		BR:0.12426
	},
	US:{
		US:1,
		AR:14.4648,
		BR:3.94554,
		UY:30.6931,
		BL:6.71434
	},

}

function popularSelect(array, elementbyid){
	var sel = document.getElementById(elementbyid);
	for(var i = 0; i < array.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = array[i];
		opt.value = array[i];
		sel.appendChild(opt);
	}
};
//cargo los selects
popularSelect(paises, 'paisOrigen');
popularSelect(paises, 'paisDestino');

//muestro que seleccione y los valores que se van a calcular
function mostrarSeleccion(aSelect, bSelect){
var origen = seleccion(aSelect);
var destino = seleccion(bSelect);

var input = document.getElementById('ingreso').value;
mostrarValorUnidad(origen,destino,todoslospaises, input);
}

function seleccion(select){
	var resultado;
	var e = document.getElementById(select.id);
	resultado = e.options[e.selectedIndex].value;
	return resultado;
}

function mostrarValorUnidad(a,b,paises,input){
	
	var origen = paises[a];
	console.log(origen);

	var destino = origen[b];
	console.log(destino);

	document.getElementById('inputOrigen').value=origen[a];
	document.getElementById('inputDestino').value=destino;

	var calculo = input*destino;
 
 	document.getElementById('egreso').value=calculo;

};