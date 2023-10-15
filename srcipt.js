

//traer div a través de DOM para mostrar la cancion
let traerEspacioCancion = document.getElementById('espacioCancion');

//funcion para que se limpie el div para la próxima canción
function limpiarDivEspacioCancion(){
    traerEspacioCancion.innerHTML = ``
}

let traerEspacioLinkYt = document.getElementById('espacioYt');

function limpiarDivEspacioYt(){
    traerEspacioLinkYt.innerHTML = ``
}
let traerEspacioLinkSp = document.getElementById('espacioSp');

function limpiarDivEspacioSp(){
    traerEspacioLinkSp.innerHTML = ``
}
let traerEspacioArtista = document.getElementById('espacioArtista');

function limpiarDivEspacioArtista(){
    traerEspacioArtista.innerHTML = ``
}


// //Evento que escucha al formulario
// const miFormulario = document.getElementById('formularioCancion');
// miFormulario.addEventListener('submit', verificarForm);


// //funcion Verificar Formulario
// async function verificarForm(e){

    
//     e.preventDefault();
//     let formulario = e.target;

//     //limpieza de todos los divs antes de que se inyecte
//     limpiarDivEspacioCancion()
//     limpiarDivEspacioYt()
//     limpiarDivEspacioSp()
//     limpiarDivEspacioArtista()

//     //Asincronicidad
//     const URLCANCIONES = '/cancionero.json'
//     const resp = await fetch(URLCANCIONES)

//     const data = await resp.json()
    
//     //lógica de la búsqueda
//     let encontrarCancion = data.find((can) => can.cancion == formulario.children[0].value);
//     if(encontrarCancion){ 
        
//         //Creación del contenedor de lo que se va a inyectar
//         let mostrarCancion = document.createElement('p');
//         let mostrarLinkYt = document.createElement('div');
//         let mostrarLinkSp = document.createElement('div');
//         let mostrarArtista = document.createElement('div');
//         //agregar clase a link Spotify
//         mostrarCancion.className = 'parrafo_cancion'
//         mostrarLinkSp.className = 'caja3'
//         mostrarArtista.className = 'div_artista_creado'
//         //cambio de innerHTML de los divs en función de lo que busca el usuario
//         mostrarCancion.innerHTML = `<pre class="parrafo_cancion"> ${encontrarCancion.letra} </pre>`;

//         mostrarLinkYt.innerHTML = `<iframe width="560" height="315" src="${encontrarCancion.youtube_link}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

//         mostrarLinkSp.innerHTML = `<img src="./styles/imagenes/spotify-removebg-preview(1).png" class="imgSP" alt="Spotify">
//                                     <a href="${encontrarCancion.spotify_link}" target="_blank"><button class="btnSP">Perfil de ${encontrarCancion.artista}</button></a>`;

//         mostrarArtista.innerHTML = `<img src="${encontrarCancion.imagen}" class="img_artista"></img>
//                                     <div>${encontrarCancion.artista}<br>${encontrarCancion.info_artista}</div>`;
        
//         //inyección de los datos cambiados en .innerHTML
//         traerEspacioCancion.appendChild(mostrarCancion);
//         traerEspacioLinkYt.appendChild(mostrarLinkYt); 
//         traerEspacioLinkSp.appendChild(mostrarLinkSp);
//         traerEspacioArtista.appendChild(mostrarArtista);

//     }else if (!canciones.includes(formulario.children[0].value)){
//         Swal.fire({
//             icon: 'error',
//             title: 'Esa cancion no se encuentra en la base de datos',
//             text: 'Deberás agregarla en nuestra base de datos en la sección agregar canción.',
//             footer: '<a href="index2.html">clickeá acá</a>',
//             timer: 5000,
//           })
          

//         function guardarCancion () {
//            let cancionAGuardar = document.getElementById('valorCancionAGuardar').value

//            cancioneroPendiente.push(cancionAGuardar);

//            console.log(cancioneroPendiente);
//         }
//     }
// }
//  //lógica cambio de notas (no lo pude concretar aún)
// const notasMayores = {
//     'C': 'C#',
//     'C#': 'D',
//     'D': 'D#',
//     'D#': 'E',
//     'E': 'F',
//     'F': 'F#',
//     'F#': 'G',
//     'G': 'G#',
//     'G#': 'A',
//     'A': 'A#',
//     'A#': 'B',
//     'B': 'C',
// };

// const notasMenores = {
//     'Cm': 'C#m',
//     'C#m': 'Dm',
//     'Dm': 'D#m',
//     'D#m': 'Em',
//     'Em': 'Fm',
//     'Fm': 'F#m',
//     'F#m': 'Gm',
//     'Gm': 'G#m',
//     'G#m': 'Am',
//     'Am': 'A#m',
//     'A#m': 'Bm',
//     'Bm': 'Cm',
// };



// document.getElementById('botonSemitono').addEventListener('click', () => {
//    const tomandoNotas = document.querySelectorAll('b');
//    // console.log(tomandoNotas[0].textContent);

//    tomandoNotas.forEach(function(elemento){ 
    
//     const contenidoActual = elemento.textContent; 
                                            
                        
//       if (notasMayores.hasOwnProperty(contenidoActual)) {
//         // Cambia el contenido por la nota modificada
//         elemento.textContent = notasMayores[contenidoActual];
//       } else {
//       };
      
//       if (notasMenores.hasOwnProperty(contenidoActual)) {
//         // Cambia el contenido por la nota modificada
//         elemento.textContent = notasMenores[contenidoActual];
//       } else {
//         };  
//     })
// });

//     // historial de búsqueda
// document.getElementById('formularioCancion').addEventListener('submit' , function (ev){
//     ev.preventDefault();
//     const buscarValor = document.getElementById('valorCancion').value

//     let historial = JSON.parse(localStorage.getItem('historial_busqueda')) || [];

//     historial.push(buscarValor);

//     const maxHistorialLength = 5;
//     if (historial.length > maxHistorialLength) {
//       historial.shift(); // Elimina el ultimo elemento para que queden en 5
//     }

//     // Guardar el historial actualizado en el localStorage
//     localStorage.setItem('historial_busqueda', JSON.stringify(historial));


// })


// let historial = JSON.parse(localStorage.getItem('historial_busqueda'))

// let historialDiv = document.getElementById('historialBusqueda');

// for (elemento of historial){
//     const elementoHistorial = document.createElement('p');
//     elementoHistorial.textContent = elemento;
//     historialDiv.appendChild(elementoHistorial);
// }


// window.addEventListener('load', limpiarDivEspacioArtista())

// console.log(logicaInicio)

const urlParams = new URLSearchParams(window.location.search);

const inputTexto = urlParams.get('input_texto');

async function mostrarDatos(){

    const URL = '/cancionero.json';

    const resp = await fetch(URL);

    const data = await resp.json();

    let encontrarCancion = data.find((can) => can.cancion == inputTexto)

    if(encontrarCancion){ 
        
                //Creación del contenedor de lo que se va a inyectar
                let mostrarCancion = document.createElement('p');
                let mostrarLinkYt = document.createElement('div');
                let mostrarLinkSp = document.createElement('div');
                let mostrarArtista = document.createElement('div');
                //agregar clase a link Spotify
                mostrarCancion.className = 'parrafo_cancion'
                mostrarLinkSp.className = 'caja3'
                mostrarArtista.className = 'div_artista_creado'
                //cambio de innerHTML de los divs en función de lo que busca el usuario
                mostrarCancion.innerHTML = `<pre class="parrafo_cancion"> ${encontrarCancion.letra} </pre>`;
        
                mostrarLinkYt.innerHTML = `<iframe width="560" height="315" src="${encontrarCancion.youtube_link}}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        
                mostrarLinkSp.innerHTML = `<img src="./styles/imagenes/spotify-removebg-preview(1).png" class="imgSP" alt="Spotify">
                                            <a href="${encontrarCancion.spotify_link}" target="_blank"><button class="btnSP">Perfil de ${encontrarCancion.artista}</button></a>`;
        
                mostrarArtista.innerHTML = `<img src="${encontrarCancion.imagen}" class="img_artista"></img>
                                            <div>${encontrarCancion.artista}<br>${encontrarCancion.info_artista}</div>`;
                
                //inyección de los datos cambiados en .innerHTML
                traerEspacioCancion.appendChild(mostrarCancion);
                traerEspacioLinkYt.appendChild(mostrarLinkYt); 
                traerEspacioLinkSp.appendChild(mostrarLinkSp);
                traerEspacioArtista.appendChild(mostrarArtista);
        
            }else if (!canciones.includes(formulario.children[0].value)){
                Swal.fire({
                    icon: 'error',
                    title: 'Esa cancion no se encuentra en la base de datos',
                    text: 'Deberás agregarla en nuestra base de datos en la sección agregar canción.',
                    footer: '<a href="index2.html">clickeá acá</a>',
                    timer: 5000,
                  })
                  
        
                function guardarCancion () {
                   let cancionAGuardar = document.getElementById('valorCancionAGuardar').value
        
                   cancioneroPendiente.push(cancionAGuardar);
        
                   console.log(cancioneroPendiente);
                }
            }
        }


mostrarDatos()


