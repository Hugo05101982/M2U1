function contarletras(){
    var total = 50;
    setTimeout(function(){
var valor = document.getElementById('contador');
var respuesta = document.getElementById('respuesta');
var cantidad=valor.value.length;
document.getElementById('respuesta').innerHTML = cantidad + ' te quedan ' + (total - cantidad);
    
});
}