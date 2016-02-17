
 var paises=["AR", "BR", "BL","UY", "US"];

	var comboOrigen='paisOrigen';
	var comboDestino='paisDestino';

	 var listadoPaises={
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

	};


	 function rellenarCombo(array, elementbyid){
		var sel = document.getElementById(elementbyid);
		for(var i = 0; i < array.length; i++) {
			var opt = document.createElement('option');
			opt.innerHTML = array[i];
			opt.value = array[i];
			sel.appendChild(opt);
		}
	};


	rellenarCombo(paises, comboOrigen);
	rellenarCombo(paises, comboDestino);



	var mostrarValoresAPP = {

	seleccion : function seleccionCombo(select){

		var e = document.getElementById(select);
	//console.log('seleccion '+e);
		return e.options[e.selectedIndex].value;
	},

	mostrarSeleccion: function mostrarSeleccion(){
		//cargo los selects

		var origen = this.seleccion(comboOrigen);
		var destino = this.seleccion(comboDestino);

		var valorIngresado = document.getElementById('ingreso').value;


		this.mostrar(origen,destino,listadoPaises, valorIngresado);

	},

	mostrar:function mostrarValorUnidad(seleccionOrigen, seleccionDestino, paises, valorIngresado){
	
	var origen = paises[seleccionOrigen];	

	var destino = origen[seleccionDestino];

	var destinoValor = origen[seleccionOrigen];
	

	document.getElementById('inputOrigen').value=destinoValor;
	document.getElementById('inputDestino').value=destino;

	var calculo = valorIngresado * destino;

	document.getElementById('egreso').value=calculo;

}



}
window.APP = mostrarValoresAPP;