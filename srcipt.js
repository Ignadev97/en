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
// let posicionNota = 0;

// document.getElementById('botonSemitono').addEventListener('click', () => {
//     posicionNota = (posicionNota +1) % notasMenores.length;
//     console.log(posicionNota);

//     const actualizaLetra = document.getElementById('espacioCancion');
//     actualizaLetra.innerHTML = actualizaLetra.innerHTML.replace(
//         `<b>${notasMenores[(posicionNota - 1 + notasMenores.length) % notasMenores.length]}</b>`,
//         `<b>${notasMenores[posicionNota]}</b>`
//     );
// })

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


