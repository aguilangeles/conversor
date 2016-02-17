/**
listado de paises
**/

var rates = {
	
    "AED": 3.67306,
    "AFN": 68.879999,
    "ALL": 123.924199,
    "AMD": 495.984996,
    "ANG": 1.78875,
    "AOA": 157.790832,
    "ARS": 14.79605,
    "AUD": 1.405338,
    "AWG": 1.790083,
    "AZN": 1.575188,
    "BAM": 1.753541,
    "BBD": 2,
    "BDT": 78.54702,
    "BGN": 1.753033,
    "BHD": 0.37715,
    "BIF": 1564.589976,
    "BMD": 1,
    "BND": 1.402466,
    "BOB": 6.898364,
    "BRL": 4.054221,
    "BSD": 1,
    "BTC": 0.002455036015,
    "BTN": 68.300867,
    "BWP": 11.267138,
    "BYR": 21893.225,
    "BZD": 1.995748,
    "CAD": 1.385833,
    "CDF": 926.5,
    "CHF": 0.987245,
    "CLF": 0.024602,
    "CLP": 707.823999,
    "CNY": 6.519154,
    "COP": 3417.436696,
    "CRC": 535.239194,
    "CUC": 1,
    "CUP": 1,
    "CVE": 98.535399,
    "CZK": 24.23146,
    "DJF": 177.661249,
    "DKK": 6.692369,
    "DOP": 45.76128,
    "DZD": 106.006501,
    "EEK": 14.0082,
    "EGP": 7.831185,
    "ERN": 14.9985,
    "ETB": 21.31751,
    "EUR": 0.897316,
    "FJD": 2.142233,
    "FKP": 0.699086,
    "GBP": 0.699086,
    "GEL": 2.498025,
    "GGP": 0.699086,
    "GHS": 3.957245,
    "GIP": 0.699086,
    "GMD": 39.56852,
    "GNF": 7691.210098,
    "GTQ": 7.660277,
    "GYD": 206.261336,
    "HKD": 7.789494,
    "HNL": 22.5876,
    "HRK": 6.833726,
    "HTG": 60.420225,
    "HUF": 278.528701,
    "IDR": 13431.516667,
    "ILS": 3.900226,
    "IMP": 0.699086,
    "INR": 68.3843,
    "IQD": 1088.549988,
    "IRR": 30187.5,
    "ISK": 127.3182,
    "JEP": 0.699086,
    "JMD": 121.6466,
    "JOD": 0.708328,
    "JPY": 114.0894,
    "KES": 101.8198,
    "KGS": 75.010499,
    "KHR": 4017.844976,
    "KMF": 441.401468,
    "KPW": 899.91,
    "KRW": 1215.053332,
    "KWD": 0.298866,
    "KYD": 0.824953,
    "KZT": 361.367888,
    "LAK": 8127.102598,
    "LBP": 1509.89,
    "LKR": 144.211199,
    "LRD": 84.830002,
    "LSL": 15.79935,
    "LTL": 3.04251,
    "LVL": 0.626325,
    "LYD": 1.369775,
    "MAD": 9.756041,
    "MDL": 19.97815,
    "MGA": 3182.443317,
    "MKD": 55.22185,
    "MMK": 1232.772488,
    "MNT": 2018.5,
    "MOP": 8.025154,
    "MRO": 343.31375,
    "MTL": 0.683602,
    "MUR": 35.616663,
    "MVR": 15.34,
    "MWK": 745.369248,
    "MXN": 18.88178,
    "MYR": 4.181531,
    "MZN": 48.489999,
    "NAD": 15.79248,
    "NGN": 199.052301,
    "NIO": 28.14494,
    "NOK": 8.624907,
    "NPR": 109.3908,
    "NZD": 1.520214,
    "OMR": 0.385011,
    "PAB": 1,
    "PEN": 3.511989,
    "PGK": 3.040425,
    "PHP": 47.48709,
    "PKR": 104.732499,
    "PLN": 3.950355,
    "PYG": 5803.828333,
    "QAR": 3.641367,
    "RON": 4.002114,
    "RSD": 109.017901,
    "RUB": 78.2012,
    "RWF": 754.860257,
    "SAR": 3.750041,
    "SBD": 8.08541,
    "SCR": 12.98985,
    "SDG": 6.104096,
    "SEK": 8.49643,
    "SGD": 1.404139,
    "SHP": 0.699086,
    "SLL": 4090,
    "SOS": 612.883003,
    "SRD": 3.9925,
    "STD": 21899,
    "SVC": 8.74763,
    "SYP": 219.804666,
    "SZL": 15.79298,
    "THB": 35.64473,
    "TJS": 7.8697,
    "TMT": 3.501467,
    "TND": 2.01662,
    "TOP": 2.277894,
    "TRY": 2.969907,
    "TTD": 6.469258,
    "TWD": 33.23709,
    "TZS": 2188.841683,
    "UAH": 26.7012,
    "UGX": 3417.406667,
    "USD": 1,
    "UYU": 31.81094,
    "UZS": 2840.935059,
    "VEF": 6.32052,
    "VND": 22370.783333,
    "VUV": 112.937501,
    "WST": 2.571507,
    "XAF": 587.798579,
    "XAG": 0.065368,
    "XAU": 0.000831,
    "XCD": 2.70102,
    "XDR": 0.715804,
    "XOF": 593.111959,
    "XPD": 0.001962,
    "XPF": 107.029549,
    "XPT": 0.001068,
    "YER": 214.969999,
    "ZAR": 15.79224,
    "ZMK": 5252.024745,
    "ZMW": 11.36495,
    "ZWL": 322.322775
  
}
/**
nombre de los combos
*/
var comboOrigen='paisOrigen';
var comboDestino='paisDestino';


/*cargar los combos simultaneamente a  la pagina*/
function cargarSelects() {

	function cargarSelect(rates, elementbyid){

		var sel = document.getElementById(elementbyid);
		for(prop in rates) {

			var opt = document.createElement('option');
			opt.innerHTML = prop;
			opt.value = prop;
			sel.appendChild(opt);
		}
	};

	cargarSelect(rates, comboOrigen);
	cargarSelect(rates, comboDestino);
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