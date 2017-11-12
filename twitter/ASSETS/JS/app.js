
/*guardara variable div padre 

var dios = document.getElementById('section')

// guardar lo ingrsado por el usuario y limpiar textarea para escribir primero 
var mensaje = document.getElementById('texto').value;

//crear div hijo 
var divhijo = document.createElement('div');
var parrafo = document.createElement('p');
var nodo = document.createTextNode(mensaje)
//creamos los nodos de texot a partir del texto ingresasdo por el usuario

parrafo.appendChild(nodo);
divhijo.appendChild(parrafo);
dios.appendChild(divhijo)

*/


function add() {
	//tenemos que tomar el texto ingresado en el textarea 
	var comments = document.getElementById('mnsj').value;

	// este contenedor que esta en html
	var cont=document.getElementById('cont');

	// creamos el div que contendra cada comentario 
	var newComments= document.createElement('p')

	//luego se debe limpiar el textaerea 
	document.getElementById('mnsj').value = '';

	var newtext= document.createTextNode(comments);

	newComments.appendChild(newtext);
	cont.appendChild(newComments); 
}



 //creamos nuevo estilo para contador - entre comentarios porque no funciona pero esta era mi idea

/*
var contadorenrojo=createElement('p');
	contadorenrojo.classList.add('id', 'contadorenrojo');

*/


var obj = document.getElementById('mnsj');

obj.onkeydown = function() {

	var maxi = 140;
	var charLimit = document.getElementById('contador');
	var mnsj2 = document.getElementById('mnsj').value;

	charLimit.innerHTML =maxi - mnsj2.length;
	} 
	if (contador > 0) { 
		document.getElementById('contador').style.color= 'red';

	}



