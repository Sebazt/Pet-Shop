const search = document.querySelector(".boton")
const items = document.querySelector(".ultimos-items")
search.addEventListener("keyup", inputSearch)
var juguetes = [];
var articulos = [];
let filtrado = [];
let alerta = []
async function getDatos(){
    await fetch("https://apipetshop.herokuapp.com/api/articulos")
    .then((response)=> response.json())
    .then((dato) =>{
        articulos.push(...dato.response)
        juguetes.push(...articulos.filter( juguete => juguete.tipo === "Juguete"))
        mostrarProducto()
        showAlert()
    })
}   
getDatos()

function inputSearch(e){
    let valor = event.target.value
    filtrado = juguetes.filter(toy=> toy.nombre.toLowerCase().includes(valor.toLowerCase()))
    mostrarProducto()
}
function showAlert(){
  let alertas = []
  let newObjeto = {};
  alertas.push(...juguetes)
    
}
function mostrarProducto(){
    let product = ""
    let arregloJuguetes = []

    if(filtrado && filtrado.length > 0){
        arregloJuguetes = []
        arregloJuguetes.push(...filtrado)
    }else {
        arregloJuguetes = []
        arregloJuguetes.push(...juguetes)
    }
  
    arregloJuguetes.map((producto) => {
        if(producto.stock < 5) {
           product += `
           <div class="card">
          <img src="${producto.imagen}" alt="">
          <h3>${producto.nombre}</h3>
          <span class="ultimos-items">Ultimas Unidades</span>
    
          <p class="precio">${producto.precio + "$"}</p>
          <b><a href="#" class="boton-carro">Añadir al carrito</a></b>
        </div> 
           
           `
        }else{
            product += `
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