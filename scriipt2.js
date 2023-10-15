



  document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('formularioInicial');
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Evitar el envío del formulario
  
      // Obtener el valor ingresado por el usuario
      const songName = document.getElementById('valorCancion').value;
  
      const URLCANCIONES = '/cancionero.json'
  
            fetch (URLCANCIONES)
  
            .then((res) => res.json())
            .then((data) => {

                let encontrarCancion = data.find((can) => can.cancion == songName)

                if (encontrarCancion) {
                   window.location.href = `index.html?input_texto=${songName}`
                }

            })

            
  
      // Realizar una solicitud AJAX para obtener la información de la canción
      // y mostrarla en index.html (como se mencionó en respuestas anteriores)
      
      // Después de completar la solicitud AJAX y mostrar la información en index.html
    //   // redirige al usuario a index.html
    //   window.location.href = 'index.html';
    });
  });

