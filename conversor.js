/**
 # conversor
 Ejercicio: crear un conversor de monedas en Bootstrap y con JS para el curso de  Fullstack Developer de  CoderHouse
 **/

/**
 nombre de los combos
 */

(
    function () {

        var rates;
        var comboOrigen = 'paisOrigen';
        var comboDestino = 'paisDestino';

        var getRatesByAPI = function (myfunction) {
            var url = "https://openexchangerates.org/api/latest.json?app_id=9cf58f0d6b1443e7b4dad7c2be6e1104";
            $.get(url, function (data) {
                myfunction(data)
            });
        }

        function cargarSelect(rates, elementbyid){
            var sel = document.getElementById(elementbyid);
            for(prop in rates) {
                var opt = document.createElement('option');
                opt.innerHTML = prop;
                opt.value = prop;
                sel.appendChild(opt);
            }
        };

        var comboOption= function(comboId, inputId){
            var id = "#"+comboId
            $(id).change(function() {
                document.getElementById(inputId).value=rates[this.value];
            });
        }
        var click = function(){
            $( "#calcular" ).click(function() {

                var origen= document.getElementById('inputOrigen').value;
                var destino = document.getElementById('inputDestino').value;
                var valorIngresado = document.getElementById('ingreso').value;

                if(valorIngresado!='' && origen!=''&&destino!=''){

                    var calculo = (valorIngresado / origen) * destino;
                    document.getElementById('egreso').value=calculo;
                }else{
                    alert('alguno de los campos esta vacio')
                }

            });
        }


        getRatesByAPI(function (data) {
            rates = data.rates;
            cargarSelect(rates, comboOrigen);
            cargarSelect(rates, comboDestino);

        });

        comboOption(comboOrigen,'inputOrigen');
        comboOption(comboDestino,'inputDestino');
        click();
    }()
);