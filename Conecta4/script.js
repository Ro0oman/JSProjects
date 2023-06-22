/* Seleccion de las casillas */

const textoContenido = document.querySelectorAll('.textoContenido');
const contenido = document.querySelectorAll('.contenido');
const informacion = document.querySelector('.informacion');

const colorj1 = 'blue';
const colorj2 = 'red';
const jugador1 = 1;
const jugador2 = -1;

let turno = -1;

/* Identifidar los cuadrados 
let contador = 1;
textoContenido.forEach(element => {
    element.textContent = contador;
    contador++;
}); */

let matrizArrays = [
    array1 = [0, 0, 0, 0, 0, 0, 0],
    array2 = [0, 0, 0, 0, 0, 0, 0],
    array3 = [0, 0, 0, 0, 0, 0, 0],
    array4 = [0, 0, 0, 0, 0, 0, 0],
    array5 = [0, 0, 0, 0, 0, 0, 0],
    array6 = [0, 0, 0, 0, 0, 0, 0]
];

function dibujarCuadricula(){
    contador = 0;
    for (let i = 0; i < matrizArrays.length; i++) {
        for (let z = 0; z < matrizArrays[i].length; z++) { 
            if(matrizArrays[i][z] == 1){
                contenido[contador].style.backgroundColor = colorj1;
            }else if(matrizArrays[i][z] == -1){
                contenido[contador].style.backgroundColor = colorj2;
            }
            contador++;
        }
    }
}

document.onload = turnos();

/*  La funcion reibirá la el numero de la columna y posteriormente iterará en la matriz
    hasta Comprobar donde se puede colocar la ficha */
function comprobarFicha(numColumna){
    for (let i = 0; i < matrizArrays.length; i++) {
        if(matrizArrays[i][numColumna] != 0 && i==0){
            return false;        
        }else if(matrizArrays[i][numColumna] != 0){
            return i-1
        }
    }
    // Si el programa no encuentra fichas colocadas el programa devolverá la posicion 5
    return 5; 
}

function turnos(){
    if(turno === 1){
        turno = -1;
        
        informacion.style.backgroundColor = 'blue';
    }else{
        turno = 1;
        informacion.style.backgroundColor = 'red';
    }
}

// Recibir el valor de la columna en la que se colocará la ficha
function tirarFicha(numColumna){
    turnos();
    //Posicionar la ficha
    let posicion = comprobarFicha(numColumna);
    if(posicion !== false){
        matrizArrays[posicion][numColumna] = turno;
        dibujarCuadricula();
        comprobarVertical();
        comprobarHorizontal();
        comporbarDiagonal();
        comprobarTodo();
    }else{
        alert('Aqui no se puede poner la ficha')
    }

    // Rotacion de turnos
    
    
}

// Comprobar vertical

/* 
let matrizArrays = [
    array1 = [0, 0, 0, 0, 0, 0, 0],
    array2 = [0, 0, 0, 0, 0, 0, 0],
    array3 = [0, 0, 0, 0, 0, 0, 0],
    array4 = [0, 0, 0, 0, 0, 0, 0],
    array5 = [0, 0, 0, 0, 0, 0, 0],
    array6 = [0, 0, 0, 0, 0, 0, 0]
];
*/

function comprobarVertical(){
    for (let i = 0; i < 7; i++) {
        for (let z = 0; z < 6; z++) {
            if(matrizArrays[z][i] != 0){
                if((matrizArrays[z][i] == matrizArrays[z-1][i])&&
                (matrizArrays[z][i] == matrizArrays[z-2][i])&&
                (matrizArrays[z][i] == matrizArrays[z-3][i])){
                    dibujarCuadricula();
                    gana('comprobarVertical');
                }
            }
        }
    }
}

function comprobarHorizontal(){
    console.log('////////////////////////////////////////////////');
    for (let i = 0; i < matrizArrays.length; i++) {
        for (let z = 0; z < 7; z++) {
            console.log(matrizArrays[i][z]);
            if(matrizArrays[i][z] != 0){
                if((matrizArrays[i][z] == matrizArrays[i][z+1])&&
                (matrizArrays[i][z]== matrizArrays[i][z+2])&&
                (matrizArrays[i][z]== matrizArrays[i][z+3])){
                    dibujarCuadricula();
                    gana('comprobarHorizontal');
                }
            }
        }
        console.log('---------------------------------------------');

    }
}


function gana(nombreFuncionComprobar){
    if(turno == 1){
        alert('Gana azul');
    }else{
        alert('Gana rojo');
    }
    console.log(nombreFuncionComprobar);
}

function comporbarDiagonal(){
    let columnas = 4;
    let filas = 3;

    for (let i = 0; i < filas; i++) {
        for (let z = 0; z < columnas; z++) {
            console.log(matrizArrays[i][z]);
            if(matrizArrays[i][z] !== 0){
                if((matrizArrays[i][z] == matrizArrays[i+1][z+1]) && (matrizArrays[i][z] == matrizArrays[i+2][z+2])&& (matrizArrays[i][z] == matrizArrays[i+3][z+3])){
                    gana('comporbarDiagonal');
                }
            }
        }
    }

    let columna2 = 7;
    let fila2 = 3;
    for (let i = 0; i < filas; i++) {
        for (let z = 3; z < columna2; z++) {
            console.log(matrizArrays[i][z]);
            if(matrizArrays[i][z] !== 0){
                if((matrizArrays[i][z] == matrizArrays[i+1][z-1]) && (matrizArrays[i][z] == matrizArrays[i+2][z-2]) && (matrizArrays[i][z] == matrizArrays[i+3][z-3])){
                    gana('comporbarDiagonal');
                }
            }
        }
    }
}


function reset(){
    location.reload();
}

/* Diagonal 1(izquierda a derecha) 
let columnas = 4;
let filas = 3;

for (let i = 0; i < filas; i++) {
    for (let z = 0; z < columnas; z++) {
        console.log(matrizArrays[i][z]);
        if(matrizArrays[i][z] !== 0){
            if((matrizArrays[i][z] == matrizArrays[i+1][z+1]) && (matrizArrays[i+2][z+2] == matrizArrays[i+3][z+3])){
                console.log('Diagonal localizada');
            }
        }
    }
}
*/
/* Diagonal 2(derecha a izquierda) 
let columna2 = 7;
let fila2 = 3;
for (let i = 0; i < filas; i++) {
    for (let z = 3; z < columna2; z++) {
        console.log(matrizArrays[i][z]);
        if(matrizArrays[i][z] !== 0){
            if((matrizArrays[i][z] == matrizArrays[i+1][z-1]) && (matrizArrays[i+2][z-2] == matrizArrays[i+3][z-3])){
                console.log('Diagonal localizada');
            }
        }
    }
}
*/
