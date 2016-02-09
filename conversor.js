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

popularSelect(paises, 'CuisineList');
