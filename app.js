'use strict'

//Hago CLIC en "CORTOS" y quiero que sólo se vean los cortos, es decir, añadir la class ocultar a todos menos los cortos (midi, largos, monos), para que esto me funcione también cuando he dado clic en largos (y me ha ocultado los cortos) tengo que hacer que primero se me muestren todos  y luego se me quiten los que quiero.
let nodoCortos = document.querySelector( '#cortos' );
nodoCortos.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
    // this-> selecciona el botón

    // //MIDI:
    // let listaMidi = document.querySelectorAll('.midi');
    // console.log(listaMidi);
    // for(let i = 0; i <listaMidi.length; i++ ){
    //     listaMidi[i].classList.add('ocultar');
    //     //aqui no puedo sustituir listaMidi[i] por this porque this me va a coger siempre al contenedor, y en este caso el contendor es nodoCortos no cada elemento de la listaMidi. En este caso no se podría usar this de ninguna forma.
    // }

    //hago una función para mostrar todos y no repetir código

    mostrarElementoDeLaLista( '.zara__li' );

    //hago una función para ocultar los que quiero y no repetir código

    ocultarElementoDeLaLista( '.midi' );
    ocultarElementoDeLaLista( '.largo' );
    ocultarElementoDeLaLista( '.mono' );
    
    //además quiero remove la clase activo (negrita) de todos los button y luego añadir la clase activo al que hace clic (this). Hago una función que me añada la negrita al botón que clico

    añadirNegrita( '.header__button', 'activo' , this );


    
});

//Hago CLIC en "MIDI", quiero añadir la clase ocultar a cortos, largos y monos
let nodoMidi = document.querySelector( '#midi' );
nodoMidi.addEventListener( 'click' , function(){ 
    console.log( 'Clic')

    mostrarElementoDeLaLista( '.zara__li' );

    ocultarElementoDeLaLista( '.corto' )
    ocultarElementoDeLaLista( '.largo' )
    ocultarElementoDeLaLista( '.mono' )

    añadirNegrita( '.header__button', 'activo' , this )
});

//Hago CLIC en "LARGOS", quiero ocultar cortos, midi y monos
let nodoLargos = document.querySelector( '#largos' );
nodoLargos.addEventListener( 'click' , function(){ 
    console.log( 'Clic')

    mostrarElementoDeLaLista( '.zara__li' );

    ocultarElementoDeLaLista( '.corto' )
    ocultarElementoDeLaLista( '.midi' )
    ocultarElementoDeLaLista( '.mono' )

    añadirNegrita( '.header__button', 'activo' , this )
});

//Hago CLIC en "MONOS", quiero ocultar cortos, midi y largos
let nodoMonos = document.querySelector( '#monos' );
nodoMonos.addEventListener( 'click' , function(){ 
    console.log( 'Clic')

    mostrarElementoDeLaLista( '.zara__li' );

    ocultarElementoDeLaLista( '.corto' )
    ocultarElementoDeLaLista( '.midi' )
    ocultarElementoDeLaLista( '.largo' )

    añadirNegrita( '.header__button', 'activo' , this )
});

let nodoTodo = document.querySelector( '#todo' );
nodoTodo.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
    
    mostrarElementoDeLaLista( '.zara__li' );

    añadirNegrita( '.header__button', 'activo' , this );
});


//hago una función que me añada la negrita con los parametros: etiqueta (para seleccionar las etiqueta a la que quiero acceder) la clase (que quiero primero quitar a todas y cada una de ellas y luego añadir a la que clico) y el button (es el this, para que me funcione y acceda al que clico tengo que ponerlo como parámetro porque la función esta aparte definida porque la quiero reutilizar y no puede acceder al clic)
function añadirNegrita( etiqueta, clase ,button){
    let listaButton = document.querySelectorAll(etiqueta);
    console.log(listaButton);
    for(let i = 0; i <listaButton.length; i++ ){
        listaButton[i].classList.remove(clase);
    }
    
    button.classList.add(clase);
};

//para que el filtro de imágenes me funcione siempre tengo que, antes de ocultar los que quiero, mostrar todos, para siempre que hago clic en uno de los botones partir del mismo punto porque sino solo me funcionará el boton que pulse primero, si pulso cortos y luego largos, en largos no se va a mostrar nada porque cortos me habrá ocultado los largos y ya no se mostraría ninguno 

function mostrarElementoDeLaLista( etiqueta ){

    let listaTodos = document.querySelectorAll(etiqueta);
    console.log(listaTodos);
    for(let i = 0; i <listaTodos.length; i++ ){
        listaTodos[i].classList.remove('ocultar');
    }
}

//hago una función para que me oculte los que quiero ( después de aplicar la función de mostrar todos )

function ocultarElementoDeLaLista( etiqueta ){

    let listaEtiqueta = document.querySelectorAll(etiqueta);
    console.log(listaEtiqueta);
    for(let i = 0; i <listaEtiqueta.length; i++ ){
        listaEtiqueta[i].classList.add('ocultar');
    }
}


