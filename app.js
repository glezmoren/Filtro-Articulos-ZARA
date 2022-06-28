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

//Quiero que cuando haga clic en la imagen me abra un pop up de ESA imagen
let listaImg = document.querySelectorAll ('.zara__img' );
console.log( listaImg )

for (let i=0; i < listaImg.length; i ++){
    //CREAR un evento para cada cuadrado -> Todos los cuadrados
    listaImg[ i ].addEventListener('click', function(){
        console.log( 'Clic en la imagen' );
        
        console.log( this ) 

        // let parent = this.parentNode.parentNode;// accedo a cualquier Padre, en este caso a dos por arriba, el li, si solo lo pusiera una vez accedería al a
        let parent_li = this.closest( '.zara__li' );//esta forma es mejor porque accedo seguro al li, de la manera anterior si quito por ejemplo el a entonces ya con el doble parentNode no accedería al li sino a un elemento en una posición anyerior al mismo 
        console.log( 'parent' ) 
        console.log( parent ) 
        console.log( 'parent_li' ) 
        console.log( parent_li ) 
        let indiceSeleccionado=parent_li.dataset.numeroimagen;
        console.log( items[indiceSeleccionado] );
        let itemSeleccionado = items[indiceSeleccionado];
        //hago que aparezca el popup (le añado la clase activo)
        let nodoPopup = document.querySelector( '.zara__popup');
        nodoPopup.classList.add ('activo');
        
        //con this ya tengo la imagen que clico y ahora tengo que cambiar el atributo de la imagen que voy a pintar por el atriburo de la imagen que clico
        //cojo el atributo src de la imagen que clicamos (this)
        let src_imagen = this.getAttribute('src');
        console.log (src_imagen)

        let nodoImgPopUp = document.querySelector( '.zara__grande' );
        nodoImgPopUp.src = src_imagen;

        //añado el atributro src a la cadena de texto para pintarla
        // let strHTML = `<div class="zara__fondo">${ itemSeleccionado.title} </div><img src="`+ nodoSrc +`" alt="" class="zara__grande"><svg xmlns="http://www.w3.org/2000/svg"  class="zara__close" viewBox="0 0 16 16">
        // <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        // </svg>`;
    
        pintarWeb (itemSeleccionado.material, '#material');
        pintarWeb (itemSeleccionado.title, '#title');
        pintarWeb (itemSeleccionado.description, '#description');
        pintarWeb (itemSeleccionado.color, '#color');
        pintarWeb (itemSeleccionado.price, '#price');
        

        
        //Quiero que cuando haga clic fuera de la imagen me cierre el pop up:
        let nodoFondo = document.querySelector( '.zara__fondo' );
        console.log( nodoFondo )
        
        nodoFondo.addEventListener( 'click' , function(){
        console.log('clic en fondo')
        let nodoPopup = document.querySelector( '#popup');
        nodoPopup.classList.remove('activo');
        });
        let nodoClose = document.querySelector( '.zara__close' );
        console.log( nodoClose )

        nodoClose.addEventListener( 'click' , function(){
        console.log('clic en close')
        let nodoPopup = document.querySelector( '#popup');
        nodoPopup.classList.remove('activo');
        });

    });

};





//función para que me añada la negrita con los parametros: etiqueta (para seleccionar las etiqueta a la que quiero acceder) la clase (que quiero primero quitar a todas y cada una de ellas y luego añadir a la que clico) y el button (es el this, para que me funcione y acceda al que clico tengo que ponerlo como parámetro porque la función esta aparte definida porque la quiero reutilizar y no puede acceder al clic)
function añadirNegrita( etiqueta, clase ,button){
    let listaButton = document.querySelectorAll(etiqueta);
    console.log(listaButton);
    for(let i = 0; i <listaButton.length; i++ ){
        listaButton[i].classList.remove(clase);
    }
    
    button.classList.add(clase);
};

//para que el filtro de imágenes me funcione siempre tengo que, antes de ocultar los que quiero, mostrar todos, para siempre que hago clic en uno de los botones partir del mismo punto porque sino solo me funcionará el boton que pulse primero, si pulso cortos y luego largos, en largos no se va a mostrar nada porque cortos me habrá ocultado los largos y ya no se mostraría ninguno 
//función para que me muestre lo que quiero:

function mostrarElementoDeLaLista( etiqueta ){

    let listaTodos = document.querySelectorAll(etiqueta);
    console.log(listaTodos);
    for(let i = 0; i <listaTodos.length; i++ ){
        listaTodos[i].classList.remove('ocultar');
    }
}

//función para que me oculte los que quiero ( después de aplicar la función de mostrar todos )

function ocultarElementoDeLaLista( etiqueta ){

    let listaEtiqueta = document.querySelectorAll(etiqueta);
    console.log(listaEtiqueta);
    for(let i = 0; i <listaEtiqueta.length; i++ ){
        listaEtiqueta[i].classList.add('ocultar');
    }
}

//función para pintar en la web:
function pintarWeb(mensaje, identificador) {
    let nodoDatos = document.querySelector(identificador);
    console.log(nodoDatos);
    nodoDatos.innerHTML = mensaje;
  }



//lista con cada articulo
  let items = [
      {
        title:"Vestido Mini Punto",
        image:"https//...",
        description:"Vestido de escote barco y manga corta. Detalle de frunce en delantero. Tejido efecto arrugado.",
        color: "Fucsia | 1822/059",
        price:"29,95 eur",
        material: "97% poliéster · 2% poliamida · 1% elastodieno"

      },
      {
        title:"Vestido Bordados Perforados Cinturón",
        image:"https//...",
        description:"Vestido midi de escote pico y manga larga. Cinturón lazada en mismo tejido. Detalle de bordados perdorados. Forro interior combinado a tono. Cierre lateral con cremallera oculta en costura.",
        color: "Naranja flúor | 7788/932",
        price:"69,95 eur",
        material: "100% algodón"
      },
      {
        title:"Vestido Satinado Encaje",
        image:"https//...",
        description:"Vestido de escote pico y tiramyes finos. Tejido combinado con encaje.",
        color: "Verde claro | 0219/847",
        price:"29,95 eur",
        material: "Tejido principal: 98% viscosa · 2% elastano"
      },
      {
        title:"Vestido Mini",
        image:"https//...",
        description:"Vestido entallado de escote cuadrado y tirantes",
        color: "Negro | 0264/316",
        price:"19,95 eur",
        material: "52% lino · 48% algodón"
      },
      {
        title:"Vestido Midi Tirantes",
        image:"https//...",
        description:"Vestido confeccionado con tejido en mezcla de lino y algodón. Escote recto y tirantes finos. Cintura elástica. Bajo con aberturas laterales. Cierre frontal con botones forrados a tono",
        color: "Khaki | 8372/073",
        price:"35,95 eur",
        material: "52% lino · 48% algodón"
      },
      {
        title:"Peto Denim Wide Leg",
        image:"https//...",
        description:"Peto de escote recto y tirantes anchos ajustables con botones. Bolsillos de plastrón en delantero y espalda. Pernera ancha.Cierre lateral con cremallera metálica",
        color: "Azul medio | 7484/172",
        price:"39,95 eur",
        material: "100% algodón"
      },
      {
        title:"Peto Pespuntes",
        image:"https//...",
        description:"Peto de escote recto con tirantes ajustables. Bolsillo de plastrón en pecho, en cadera y en espalda. Costuras combinadas a contraste.",
        color: "Blanco roto | 3175/001",
        price:"39,95 eur",
        material: "58% liocel · 42% algodón"
      },
      {
        title:"Vestido Punto Flecos",
        image:"https//...",
        description:"Vestido de punto con escote recto y tirantes. Tejido combinado a contraste en pecho. Bajo acabado en flecos.",
        color: "Negro / Crudo | 3991/029",
        price:"39,95 eur",
        material: "Tejido principal: 100% acrílico · Tejido secundario: 100% algodón"
      },
      {
        title:"Vestido Satinado",
        description:"Vestido de cuello solapa y escote pico con manga larga acabada en puño. Detalle de nudo en delantero. Cierre con cremallera lateral oculta en costura.",
        color: "Naranja | 4688/309",
        price:"29,95 eur",
        material: "97% viscosa · 3% elastano"
      },
      {
        title:"Vestido Satinado Cut Out",
        description:"Vestido midi de escote recto con tirantes finos ajustables. Bajo con abertura en espalda. Cierre con ganchos metálicos en espalda.",
        color: "Rosa | 2662/331",
        price:"39,95 eur",
        material: "Exterior: 100% algodón · Forro: 100% poliester"
      },
      {
        title:"Vestido Largo Satinado",
        description:"Vestido largo satinado de cuello solapa y manga larga acabado en puño. Detalle de abertura en cintura. Bajo acabado en línea evasé. Cierre frontal con botones y en espalda con cremallera oculta en costura.",
        color: "Verdoso | 7563/043",
        price:"59,95 eur",
        material: "97% viscosa · 3% elastano"
      },
      {
        title:"Mono Cut Out Lateral",
        description:"Mono corto de escote pico con solapa y manga larga con hombreras. Detalle de aberturas elásticas en cintura. Cierre frontal con botones",
        color: "Crudo | 2701/688",
        price:"49,95 eur",
        material: "62% poliéster · 33% viscosa · 5% elastano"
      },
      {
        title:"Vestido Volumen frunces",
        description:"Vestido corto ajustado de escote pico y hombros descubiertos. Detalle de aplicación de tejido con volumen y pliegues combinado a tono",
        color: "Amarillo | 1165/293",
        price:"25,95 eur",
        material: "74% viscosa · 23% poliamida · 3% elastano"
      },
      {
        title:"Mono Satinado Cut Out",
        description:"Mono de escote recto con frunces delanteros y tirante fino con botones. Detalle de abertura en cintura. Pernera ancha. Cierre en espalda con cremallera oculta en costura.",
        color: "Fresa | 3683/673",
        price:"45,95 eur",
        material: "Exterior: 100% poliéster · Forro: 100% poliéster"
      },
      {
        title:"Vestido Frunce",
        description:"Vestido de escote pico y tirantes finos ajustables. Detalle de frunce en pecho.",
        color: "Verde | 7901/175",
        price:"19,95 eur",
        material: "96% poliéster · 4% elastano"
      },
      {
        title:"Vestido Largo Red",
        description:"Vestido largo de cuello redondo y manga corta. Detalle de abertura en espalda. Acabados en rib. Bajo asimétrico.",
        color: "Mostaza | 4770/003",
        price:"29,95 eur",
        material: "56% poliéster · 43% algodón · 1% elastano"
      },
  ]

  