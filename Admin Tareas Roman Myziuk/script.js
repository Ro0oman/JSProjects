/* 
                COSAS QUE HACER

Un listado que se mostrarán las tareas creadas.

Cambiar estado de tarea

Eliminar tarea

Modificar la tarea.

El listado se deberá permitir ordenar las tareas por tiempo estimado de trabajo
y por fecha de finalización (tanto ascencente como descendentemente).

Se deberá mostrar un resumen de tareas por estado, así como el tiempo total.


function encontrarIndice(indice){
    return(arrayTareas.filter(tarea => tarea.id == indice));
}

*/


/* Variables globales */
var indice = 0;
var arrayTareas = [];
var objetoAux = 0;
var camposTareas = 0;

/* Validador de datos */
function validaDatosCorrectos(camposTareas){
    let camposCorrectos = true;
    camposTareas.forEach(element =>{
        if(element.value==''){/* Comprobar que no haya valores vacios */
            alert("El elemento "+element.name + " esta vacio!!");
            console.log("El elemento "+element.name + " esta vacio!!");
            camposCorrectos = false;
        }

        /* Comprobar que la fecha de finalizacion no sea inferior a la de alta */
        if (element.name == 'alta') {
            valorInicio = element.value;
        }
        if(element.name == 'finalizacion'){
            valorFinalizacion = element.value;
            if (valorFinalizacion<valorInicio) {
                alert("La fecha de finalizacion debe ser superior a la de inicio");
                camposCorrectos = false;
            }
        }
    });

    return camposCorrectos;
}

function aniadirDatos(camposTareas){
    var nombreTarea=camposTareas[0].value;
    var tiempoEstimado=camposTareas[1].value;
    var fechaInicio=camposTareas[2].value;
    var fechaFinalizacion=camposTareas[3].value;
    var estadoTarea=camposTareas[4].value;
    var descripcionTarea=camposTareas[5].value;

    arrayTareas.push(
        {
            id: indice,
            nombre : nombreTarea,
            tiempo : tiempoEstimado,
            plazo : fechaInicio,
            alta : fechaFinalizacion,
            estado :estadoTarea,
            descripcion :  descripcionTarea
        }
    )
    
    indice++;
    console.log(arrayTareas)
}

function encontrarIndice(indice){ //Devuelve el la posicion de la tarea con id == indice
    return(arrayTareas.findIndex((element) => element.id == indice));
}

function borrarObjeto(objeto, id){ //Borra tanto el objeto en el array como el objeto en la tabla
    arrayTareas.splice(encontrarIndice(id), 1)

    var indiceFila = objeto.parentNode.parentNode.rowIndex; //Busca el indice en la tabla
    document.getElementById("tablaTareas").deleteRow(indiceFila); //Elimina la fila
}

function borrarTabla(){ //Usaremos esta funcion para "redibujar" la tabla
    var tabla = document.getElementById("tablaTareas");
    
    var contFilasTabla = tabla.rows.length;
    /* Borra todas las filas (1) de la tabla, ya que cuando borras
     una fila la siguiente adquiere la posicion (1) y se repite el bucle
     tantas filas tenga la tabla */
    for (var i = 1; i < contFilasTabla; i++) { 
        tabla.deleteRow(1);
    }
}

function modificarObjeto(objeto, id) { //Borraremos la tarea, pero añadiremos sus valores a los campos
    camposTareas[0].value = arrayTareas[encontrarIndice(id)].nombre;
    camposTareas[1].value = arrayTareas[encontrarIndice(id)].tiempo;
    camposTareas[2].value = arrayTareas[encontrarIndice(id)].plazo;
    camposTareas[3].value = arrayTareas[encontrarIndice(id)].alta;
    camposTareas[4].value = arrayTareas[encontrarIndice(id)].estado;
    camposTareas[5].value = arrayTareas[encontrarIndice(id)].descripcion;
    borrarObjeto(objeto, id);
}

function dibujarTabla(camposTareas){
    var table = document.getElementById("tablaTareas");
    
    arrayTareas.forEach(element => {
        var row = table.insertRow();
        var celda1 = row.insertCell();
        var celda2 = row.insertCell();
        var celda3 = row.insertCell();
        var celda4 = row.insertCell();
        var celda5 = row.insertCell();
        var celda6 = row.insertCell();
        var celda7 = row.insertCell();
        celda1.innerHTML = element.nombre,
        celda2.innerHTML = element.tiempo,
        celda3.innerHTML = element.plazo;
        celda4.innerHTML = element.alta;
        celda5.innerHTML = element.estado;
        celda6.innerHTML = '<button class="eliminar" onclick="borrarObjeto(this,'+element.id+')"> Borrar </button>';
        celda7.innerHTML = '<button class="modificar" onclick="modificarObjeto(this,'+element.id+')"> Modificar </button>';
    });

}

function mostrarDatos(){

    camposTareas = document.querySelectorAll('.tareas');

    /* if(validaDatosCorrectos(camposTareas)){
        alert("Tarea creada con exito master 😎");
        // Una vez comprobamos que los datos son correctos los almacenamos 
    } */

    aniadirDatos(camposTareas);
    borrarTabla();
    dibujarTabla(camposTareas);

    camposTareas[0].value = '';
    camposTareas[1].value = '';
    camposTareas[2].value = '';
    camposTareas[3].value = '';
    camposTareas[4].value = '';
    camposTareas[5].value = '';
}


function ordenarTiempoEstimado(){

    var btn = document.querySelector('.botonOrdenar');
    if(btn.value == 1){
        arrayTareas.sort((element1,element2) => element1.tiempo - element2.tiempo);
        btn.value = 0;
    }else{
        arrayTareas.sort((element1,element2 ) => element2.tiempo - element1.tiempo);
        btn.value = 1;
    }
    borrarTabla();
    dibujarTabla(camposTareas);
    
}

function ordenarFechaAlta(){

    var btn2 = document.querySelector('.botonOrdenar2');
    if(btn2.value == 1){
        arrayTareas.sort((element1,element2 ) => element1.plazo - element2.plazo);
        btn2.value = 0;
    }else{
        arrayTareas.sort((element1,element2 ) => element2.plazo - element1.plazo);
        btn2.value = 1;
    }
    borrarTabla();
    dibujarTabla(camposTareas);
    
}

