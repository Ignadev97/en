
//constructor "agregar cancion"
class cancion{
    constructor(artista, nombre, letra){
        this.artista = artista;
        this.nombre = nombre;
        this.letra = letra;
    }
 }

cancioneroPendiente = []


 //lógica de guardado de canciones en base de datos


let formularioPedidos = document.getElementById('formularioAgegarCancion');
formularioPedidos.addEventListener('submit', agregarCancionABd);

function agregarCancionABd (ev) {

    ev.preventDefault();
    
    let miFormularioPedidos = ev.target;

    let nombreArtista = document.getElementById('nombreArtista');
    let nombreCancion = document.getElementById('nombreCancion');
    let letraCancion = document.getElementById('letraCancion');

    cancioneroPendiente.push(new cancion(nombreArtista.value, nombreCancion.value, letraCancion.value));

    Swal.fire({
        icon: 'success',
        title: 'Excelente!',
        text: 'La canción fue agregada con éxito',
        timer: 2000,
      });
}