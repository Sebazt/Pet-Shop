const search = document.querySelector(".input")
search.addEventListener('keyup', searchInput)

var productosFarmacia = [];
var articulos = [];
var valor = ""
var filtrado = [];

async function getDatos(){
  await fetch("https://apipetshop.herokuapp.com/api/articulos")
  .then((response) => response.json())
  .then((datos =>{
    articulos.push(...datos.response);
    productosFarmacia.push(...articulos.filter( farmacia => farmacia.tipo == "Medicamento"))
    mostrarFarmacia()
    
   
  }))
}
getDatos()

function searchInput(e){
   let val = event.target.value
   filtrado = productosFarmacia.filter(medic => medic.nombre.toLowerCase().includes(val.toLowerCase()))
   console.log(filtrado)
   mostrarFarmacia()
}
function mostrarFarmacia(){
  let product = ""
  let arregloFarmacia = []

  if(filtrado && filtrado.length > 0){
    arregloFarmacia = []
    arregloFarmacia.push(...filtrado)
  console.log(filtrado)
  }else{
    arregloFarmacia = []
    arregloFarmacia.push(...productosFarmacia)
  }
  
  arregloFarmacia.map((producto) =>{
    if(producto.stock < 5){
       product +=

    `
        <div class="card">
          <img src="${producto.imagen}" alt="">
          <h3>${producto.nombre}</h3>
          <span class="ultimos-items">Ultimos Productos</span>
    
          <p class="precio">${producto.precio + "$"}</p>
          <b><a href="#" class="boton-carro">Añadir al carrito</a></b>
        </div> 
        `
    }else {
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
    }
       
  })

  document.querySelector(".contenedor").innerHTML = product
}