'use strict'
let nodoCortos = document.querySelector( '#cortos' );
nodoCortos.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
    
    let listaMidi = document.querySelectorAll('.zara__a.midi');
    console.log(listaMidi);
    for(let i = 0; i <listaMidi.length; i++ ){
        this.classList.add('ocultar');
    }
});
let nodoMidi = document.querySelector( '#midi' );
nodoMidi.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
});
let nodoLargos = document.querySelector( '#largos' );
nodoLargos.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
});
let nodoMonos = document.querySelector( '#monos' );
nodoMonos.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
});
let nodoTodo = document.querySelector( '#todo' );
nodoTodo.addEventListener( 'click' , function(){ 
    console.log( 'Clic')
});