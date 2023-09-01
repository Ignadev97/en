/* PROYECTO CANCIONERO: Quiero comenzar una web que sirva como 
cancionero para una persona que toca guitarra. Además de
que muestre la letra de una canción. Quiero que se puedan ver/no ver
los acordes, y (que en caso de no ser la tonalidad deseada, se cambie 
con un botón a la tonalidad deseada) <- esto lo agregaré después. */

//traer div a través de DOM para mostrar la cancion
let traerEspacioCancion = document.getElementById('espacioCancion');

//funcion para que aparezca la nueva canción buscada sola
function limpiarDiv(){
    traerEspacioCancion.innerHTML = `<pre> </pre>`
}

//crear nuevo array solo con nombres de canciones. (desde el array Cancionero[])
// let canciones = cancionero.map((can) => can.cancion);

//Evento que escucha al formulario
const miFormulario = document.getElementById('formularioCancion');
miFormulario.addEventListener('submit', verificarForm);


//funcion Verificar Formulario
async function verificarForm(e){
    
    limpiarDiv()

    e.preventDefault();
    let formulario = e.target;
    
    //Asincronicidad
    const resp = await fetch('/cancionero.json')

    const data = await resp.json()
    
    //lógica de la búsqueda
    let encontrarCancion = data.find((can) => can.cancion == formulario.children[0].value);
    if(encontrarCancion){  
        let mostrarCancion = document.createElement('p')
        mostrarCancion.innerHTML = `<pre class="parrafo_cancion"> ${encontrarCancion.letra} </pre>`;

        traerEspacioCancion.appendChild(mostrarCancion);    
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
 //lógica cambio de notas (no lo pude concretar aún)
const notasMayores = {
    'C': 'C#',
    'C#': 'D',
    'D': 'D#',
    'D#': 'E',
    'E': 'F',
    'F': 'F#',
    'F#': 'G',
    'G': 'G#',
    'G#': 'A',
    'A': 'A#',
    'A#': 'B',
    'B': 'C',
};

const notasMenores = {
    'Cm': 'C#m',
    'C#m': 'Dm',
    'Dm': 'D#m',
    'D#m': 'Em',
    'Em': 'Fm',
    'Fm': 'F#m',
    'F#m': 'Gm',
    'Gm': 'G#m',
    'G#m': 'Am',
    'Am': 'A#m',
    'A#m': 'Bm',
    'Bm': 'Cm',
};



document.getElementById('botonSemitono').addEventListener('click', () => {
   const tomandoNotas = document.querySelectorAll('b');
   // console.log(tomandoNotas[0].textContent);

   tomandoNotas.forEach(function(elemento){ 
    
    const contenidoActual = elemento.textContent; 
                                            
                        
      if (notasMayores.hasOwnProperty(contenidoActual)) {
        // Cambia el contenido por la nota modificada
        elemento.textContent = notasMayores[contenidoActual];
      } else {
        // Si la nota actual no se encuentra en el objeto, no la modifica
        console.log("Nota no encontrada: " + contenidoActual);
      };
      
      if (notasMenores.hasOwnProperty(contenidoActual)) {
        // Cambia el contenido por la nota modificada
        elemento.textContent = notasMenores[contenidoActual];
      } else {
        // Si la nota actual no se encuentra en el objeto, no la modifica
        console.log("Nota no encontrada: " + contenidoActual);
      };  
    })
});

    // historial de búsqueda
document.getElementById('formularioCancion').addEventListener('submit' , function (ev){
    ev.preventDefault();
    const buscarValor = document.getElementById('valorCancion').value

    let historial = JSON.parse(localStorage.getItem('historial_busqueda')) || [];

    historial.push(buscarValor);

    const maxHistorialLength = 5;
    if (historial.length > maxHistorialLength) {
      historial.shift(); // Elimina el ultimo elemento para que queden en 5
    }

    // Guardar el historial actualizado en el localStorage
    localStorage.setItem('historial_busqueda', JSON.stringify(historial));


})


let historial = JSON.parse(localStorage.getItem('historial_busqueda'))

let historialDiv = document.getElementById('historialBusqueda');

for (elemento of historial){
    const elementoHistorial = document.createElement('p');
    elementoHistorial.textContent = elemento;
    historialDiv.appendChild(elementoHistorial);
}



