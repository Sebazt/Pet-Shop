
var juguetes = [];
var articulos = [];

async function getDatos(){
    await fetch("https://apipetshop.herokuapp.com/api/articulos")
    .then((response)=> response.json())
    .then((dato) =>{
        articulos.push(...dato.response)
        juguetes = articulos.filter( juguete => juguete.tipo === "Juguete")
        
        mostrarProducto(juguetes)
    })
}   
getDatos()

function mostrarProducto(juguetes){
    let product = ""
    let arregloJuguetes = []
    arregloJuguetes.push(...juguetes)
    console.log(arregloJuguetes)

    arregloJuguetes.map((producto) => {
        product +=
        `
        <div class="card">
          <img src="${producto.imagen}" alt="">
          <h3>${producto.nombre}</h3>
          <span class="ultimos-items"></span>
    
          <p class="precio">${producto.precio + "$"}</p>
          <b><a href="#" class="boton-carro">Añadir al carrito</a></b>
        </div> 
        `
    })
    document.querySelector(".contenedor").innerHTML = product
}

