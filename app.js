let gondolas = [
    {id : 1, nombre : "Parrilla de 90 cm", precio : 1000, marca : "parrillas zona sur", imagen : "./imagenes/parrilla-completa.jpg",},
    {id : 2, nombre : "Brasero De Mesa Enlozado", precio : 1200, marca : "parrillas zona sur", imagen : "./imagenes/Brasero-De-Mesa-Enlozado-Clasico.jpg",},
    {id : 3, nombre : "Tabla AL Recta (50X30)", precio : 800, marca : "parrillas zona sur", imagen : "./imagenes/Tabla-Recta.jpg",},
    {id : 4, nombre : "Juego Parrillero Forjado", precio : 4500, marca : "parrillas zona sur", imagen : "./imagenes/Juego-Parrillero-Forjado-Triple-Gris-con-Soporte.jpg",},
    {id : 5, nombre : "fogon tamaño medio", precio : 2350, marca : "parrillas zona sur", imagen : "./imagenes/fogon tamaño medio.jpg",},
    {id : 6, nombre : "Disco c/patas Desmontables", precio : 1890, marca : "parrillas zona sur", imagen : "./imagenes/Disco c patas desmontable.jpg",},
    {id : 7, nombre : "Asador Redondo 120 cm", precio : 3700, marca : "parrillas zona sur", imagen : "./imagenes/Asador Redondo 120 cm.jpg",},
];

let botones2 = document.getElementById("boton2")
botones2.addEventListener("click", respuesta2)

let botones3 = document.getElementById("boton3")
botones3.addEventListener("click", respuesta2)

function respuesta2 () {
    Swal.fire({
        title: 'En construcción',
        text: 'probá ingresando a la tienda =)',
        imageUrl: './imagenes/mono.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
}


let boton = document.getElementById("tienda");
boton.addEventListener("click", respuesta);


function respuesta() {
    let cambio = document.getElementById("cartelIngreso");
    cambio.innerHTML = "";

    insertarCards();
}



const insertarCards = () => {

    let contenedor = document.getElementById("container");
    gondolas.forEach((gondola,indice)=>{
        let card=document.createElement("div")
        card.classList.add("card", "col-sm-12","col-lg-3", "m-3")
        card.innerHTML = `<img src="${gondola.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${gondola.nombre}</h5>
          <h6 class="card-title">marca: ${gondola.marca}</h6>
          <p class="card-text">$${gondola.precio}</p>
          <a href="#" id="botonAccion" class="btn btn-info" onclick="agregado()">Comprar</a>
        </div>`

        contenedor.appendChild(card);
    })

}

const agregado = () => {
    alert("agregaste este articulo al carrito!")
}