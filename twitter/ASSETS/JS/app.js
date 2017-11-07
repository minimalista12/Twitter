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

/*

var msg toma el area de texto
    var msg = document.getElementById('comment');
    funcion creada para el evento onkeydown, ha que los caracteres
	se vayan descontando y ademas queden en valores negativos
    msg.onkeydown = function() {
    	//máximo de caracteres
        var maxChar = 140;
        var charLeft = document.getElementById("p");
        var msg2 toma el valor ingresado por el usuario
        var msg2 = document.getElementById('comment').value;
        /*el parrafo "char-left" es igual a la cantidad 
        maxima de caracteres permitidos y se lo resta a la longitud
        de lo ingresado por el usuario*/
        //charLeft.innerHTML = maxChar - msg2.length;
    //} 


var obj = document.getElementById('mnsj');

obj.onkeydown = function() {

	var maxi = 140;
	var charLimit = document.getElementById('contador');
	var mnsj2 = document.getElementById('mnsj').value;

	charLimit.innerHTML =maxi - mnsj2.length;

}




