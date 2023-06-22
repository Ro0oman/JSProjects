let posicion = 0;
/* 
    imagen1 imagen2 imagen3

    caso 1:Quiero mostrar la imagen1 y posteriormente la imagen2, haciendo click en el boton derecho
    imagen1 se queda donde esta e imagen2 se posiciona a la izquierda lista para ser mostrada

    imagen2.left = ancho de la caja * 2
    imagen1.left = ancho de la caja

    intervalo = setInterval()

*/

$( document ).ready(function() {
    setInterval(function(){
        
    },2000);}
);

function botonDerecha(){
    previo = posicion;
    arrayCajas[posicion].slideToggle();
    posicion++;  
    if(posicion>2){
        posicion = 0;
    }  
    arrayCajas[posicion].slideToggle("slow", function() {
        console.log('Hola');
      });    
    console.log('Posicion = '+posicion);

}

function botonIzquierda(){
    previo = posicion;
    arrayCajas[posicion].slideToggle();
    posicion--;
    if(posicion<0){
        posicion = 2;
    }
    arrayCajas[posicion].slideToggle();
}

//Creamos los botones
var divBoton1 = document.createElement( "div" );
divBoton1.innerHTML = "<button class='boton1' onclick='botonIzquierda();'><</button>";

var divBoton2 = document.createElement( "div" );
divBoton2.innerHTML = "<button class='boton2' onclick='botonDerecha();'>></button>";

$('#carrusel').append(divBoton1);
$('#carrusel').append(divBoton2);


/* Seleccionamos los li y damos clases */
$("li").addClass('cajaCarrusel');
let caja1 = $("li:nth-child(1)");
let caja2 = $("li:nth-child(2)");
let caja3 = $("li:nth-child(3)");

caja1.addClass('caja1');
caja2.addClass('caja2');
caja3.addClass('caja3');

caja2.toggle();
caja3.toggle();

/* A cada foto le damos una clase foto */
let fotos = $("div:first-child>img");
fotos.addClass('foto');

/* Escondemos las cajas */

let arrayCajas = [caja1, caja2, caja3];
$(arrayCajas[1]).css({ "left": "0" }, "slow" );
$(arrayCajas[1]).css({ "left": "-=500px" }, "slow" );
$(arrayCajas[2]).css({ "left": "-=500px" }, "slow" );








