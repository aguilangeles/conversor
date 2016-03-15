/**
# conversor
Ejercicio: crear un conversor de monedas en Bootstrap y con JS para el curso de  Fullstack Developer de  CoderHouse
**/

/**
nombre de los combos
*/
var rates;
var comboOrigen='paisOrigen';
var comboDestino='paisDestino';


/*cargar los combos simultaneamente a  la pagina*/

function cargarSelects() {
	function getRates(myfunction){
		var url=  "https://openexchangerates.org/api/latest.json?app_id=9cf58f0d6b1443e7b4dad7c2be6e1104";
		$.get(url, function(data){
			myfunction(data)
		});
	}

	getRates(function(data){
		rates = data.rates;
		cargarSelect(rates, comboOrigen);
		cargarSelect(rates, comboDestino);

	});

	function cargarSelect(rates, elementbyid){
		var sel = document.getElementById(elementbyid);
		for(prop in rates) {
			var opt = document.createElement('option');
			opt.innerHTML = prop;
			opt.value = prop;
			sel.appendChild(opt);
		}
	};
}

var calcularAPP = {

	mostrarPaisSeleccionado : function(select){
		var e = document.getElementById(select);
		return e.options[e.selectedIndex].value;
	},


	resultado: function(){
	//cargo los selects

	var origen = this.mostrarPaisSeleccionado(comboOrigen);


	var destino = this.mostrarPaisSeleccionado(comboDestino);


	var valorIngresado = document.getElementById('ingreso').value;


	this.calcularResultado(origen,destino, valorIngresado);

	},

	calcularResultado:function(seleccionOrigen, seleccionDestino, valorIngresado){


		var origen = rates[seleccionOrigen];	

		var destino = rates[seleccionDestino];

		document.getElementById('inputOrigen').value=origen;
		document.getElementById('inputDestino').value=destino;

		var calculo = (valorIngresado / origen) * destino;

		/*TODO crear la manera de invertir los combos*/

		document.getElementById('egreso').value=calculo;

	}

}
window.APP = calcularAPP;