var paises=["AR", "BR", "PY", "CH", "BL","UY"];


function popularSelect(array, elementbyid){
var sel = document.getElementById(elementbyid);
for(var i = 0; i < array.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = array[i];
    opt.value = array[i];
    sel.appendChild(opt);
}
};

popularSelect(paises, 'paisOrigen');
popularSelect(paises, 'paisDestino');


function mostrarSeleccion(aSelect, bSelect){
var origen = seleccion(aSelect);
var destino = seleccion(bSelect);

console.log('pais de origen '+origen);
console.log('pais de destino '+destino);


}
function seleccion(select){
	var resultado;
	var e = document.getElementById(select.id);
	resultado = e.options[e.selectedIndex].value;
	return resultado;
}
