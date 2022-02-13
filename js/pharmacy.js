var productosFarmacia = [];
var articulos = [];

async function getDatos(){
  await fetch("https://apipetshop.herokuapp.com/api/articulos")
  .then((response) => response.json())
  .then((datos =>{
    articulos.push(...datos.response);
    productosFarmacia = articulos.filter( farmacia => farmacia.tipo == "Medicamento")
    console.log(articulos)
    console.log(productosFarmacia)
    mostrarFarmacia(productosFarmacia)
  }))
}
getDatos()

function mostrarFarmacia(productosFarmacia){
  let product = ""
  let arregloFarmacia = []
  arregloFarmacia.push(...productosFarmacia)
  console.log(arregloFarmacia);
  
  arregloFarmacia.map((producto) =>{
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