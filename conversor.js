
 var paises=["AR", "BR", "BL","UY", "US"];

	

var rates = {
   "AED": 3.672794,
   "AFN": 64.620002,
   "ALL": 126.8491,
   "AMD": 471.365,
   "ANG": 1.788725,
   "AOA": 135.277333,
   "ARS": 9.523954,
   "AUD": 1.411781,
   "AWG": 1.793333,
   "AZN": 1.047688,
   "BAM": 1.784146,
   "BBD": 2,
   "BDT": 77.958011,
   "BGN": 1.784021,
   "BHD": 0.377162,
   "BIF": 1562.85,
   "BMD": 1,
   "BND": 1.403505,
   "BOB": 6.91075,
   "BRL": 3.923699,
   "BSD": 1,
   "BTC": 0.0031896502,
   "BTN": 65.192083,
   "BWP": 10.569938,
   "BYR": 17436.9,
   "BZD": 1.996399,
   "CAD": 1.319706,
   "CDF": 927.8275,
   "CHF": 0.990533,
   "CLF": 0.024598,
   "CLP": 690.632104,
   "CNY": 6.357558,
   "COP": 2929.321667,
   "CRC": 535.934795,
   "CUC": 1,
   "CUP": 1.000175,
   "CVE": 100.773058005,
   "CZK": 24.73689,
   "DJF": 177.536251,
   "DKK": 6.805323,
   "DOP": 45.39198,
   "DZD": 106.90884,
   "EEK": 14.246925,
   "EGP": 8.030706,
   "ERN": 15.14,
   "ETB": 21.02661,
   "EUR": 0.913917,
   "FJD": 2.107617,
   "FKP": 0.654822,
   "GBP": 0.654822,
   "GEL": 2.384025,
   "GGP": 0.654822,
   "GHS": 3.827357,
   "GIP": 0.654822,
   "GMD": 38.95063,
   "GNF": 7403.200049,
   "GTQ": 7.689381,
   "GYD": 206.088002,
   "HKD": 7.750042,
   "HNL": 21.98515,
   "HRK": 6.938796,
   "HTG": 53.9153,
   "HUF": 284.235597,
   "IDR": 13633.783333,
   "ILS": 3.879506,
   "IMP": 0.654822,
   "INR": 65.29562,
   "IQD": 1138.374988,
   "IRR": 29963.5,
   "ISK": 129.186,
   "JEP": 0.654822,
   "JMD": 119.4491,
   "JOD": 0.708978,
   "JPY": 120.9461,
   "KES": 101.79845,
   "KGS": 69.198252,
   "KHR": 4065.594976,
   "KMF": 448.041002,
   "KPW": 899.91,
   "KRW": 1140.498315,
   "KWD": 0.303092,
   "KYD": 0.824355,
   "KZT": 279.44429,
   "LAK": 8153.490098,
   "LBP": 1510.618341,
   "LKR": 141.1137,
   "LRD": 83.830002,
   "LSL": 13.787588,
   "LTL": 3.096289,
   "LVL": 0.633479,
   "LYD": 1.380489,
   "MAD": 9.855786,
   "MDL": 20.04697,
   "MGA": 3270.70165,
   "MKD": 56.16067,
   "MMK": 1285.659988,
   "MNT": 1989.5,
   "MOP": 7.986645,
   "MRO": 325.30825,
   "MTL": 0.683738,
   "MUR": 35.8429,
   "MVR": 15.295733,
   "MWK": 558.03478,
   "MXN": 16.63582,
   "MYR": 4.322696,
   "MZN": 42.499999,
   "NAD": 13.78707,
   "NGN": 198.871599,
   "NIO": 27.30886,
   "NOK": 8.561938,
   "NPR": 104.3497,
   "NZD": 1.496834,
   "OMR": 0.384958,
   "PAB": 1,
   "PEN": 3.279875,
   "PGK": 2.922275,
   "PHP": 46.98018,
   "PKR": 105.333101,
   "PLN": 3.900814,
   "PYG": 5661.463392,
   "QAR": 3.640201,
   "RON": 4.046937,
   "RSD": 110.12046,
   "RUB": 64.24264,
   "RWF": 745.681,
   "SAR": 3.750088,
   "SBD": 7.915946,
   "SCR": 13.003175,
   "SDG": 6.094593,
   "SEK": 8.548019,
   "SGD": 1.404587,
   "SHP": 0.654822,
   "SLL": 3745.3745,
   "SOS": 627.751878,
   "SRD": 3.2875,
   "STD": 22268.85,
   "SVC": 8.767331,
   "SYP": 188.815752,
   "SZL": 13.78837,
   "THB": 35.64075,
   "TJS": 6.61035,
   "TMT": 3.5014,
   "TND": 2.000611,
   "TOP": 2.212883,
   "TRY": 2.933065,
   "TTD": 6.352959,
   "TWD": 32.59571,
   "TZS": 2181.314984,
   "UAH": 23.00742,
   "UGX": 3556.733333,
   "USD": 1,
   "UYU": 29.42831,
   "UZS": 2667.375,
   "VEF": 6.314268,
   "VND": 22328.483333,
   "VUV": 111.787499,
   "WST": 2.546946,
   "XAF": 599.458962,
   "XAG": 0.0624575,
   "XAU": 0.0008685,
   "XCD": 2.70102,
   "XDR": 0.718074,
   "XOF": 599.959722,
   "XPD": 0.001459,
   "XPF": 108.818324,
   "XPT": 0.000989,
   "YER": 214.986,
   "ZAR": 13.82094,
   "ZMK": 5253.075255,
   "ZMW": 12.476175,
   "ZWL": 322.387247
}




	var comboOrigen='paisOrigen';
	var comboDestino='paisDestino';

	 function rellenarCombo(array, elementbyid){
	 	console.log(array);
		var sel = document.getElementById(elementbyid);
		for(prop in array) {
			
			var opt = document.createElement('option');
			opt.innerHTML = prop;
			opt.value = prop;
			sel.appendChild(opt);
		}
	};

	function cargarCombos() {
		
		rellenarCombo(rates, comboOrigen);
		rellenarCombo(rates, comboDestino);
	}
	



	var mostrarValoresAPP = {

	seleccion : function seleccionCombo(select){

		var e = document.getElementById(select);
		return e.options[e.selectedIndex].value;
	},


	mostrarSeleccion: function mostrarSeleccion(){
		//cargo los selects

		var origen = this.seleccion(comboOrigen);
		console.log('seleccione' + origen);

		var destino = this.seleccion(comboDestino);
		console.log('seleccione destino' + destino);

		var valorIngresado = document.getElementById('ingreso').value;
		console.log('valor '+rates[destino]);

		this.mostrar(origen,destino, valorIngresado);

	},

	mostrar:function mostrarValorUnidad(seleccionOrigen, seleccionDestino, valorIngresado){


	var origen = rates[seleccionOrigen];	

	var destino = rates[seleccionDestino];


	

	document.getElementById('inputOrigen').value=origen;
	document.getElementById('inputDestino').value=destino;

	var calculo = valorIngresado * destino;

	document.getElementById('egreso').value=calculo;

}



}
window.APP = mostrarValoresAPP;