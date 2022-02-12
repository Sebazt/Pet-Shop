
let arrayArticulos = []
let arrayJuguetes = []
async function getDatos() {
    await fetch("https://apipetshop.herokuapp.com/api/articulos")
    .then((response) => response.json())
    .then((dato) => {
        arrayArticulos.push(...dato.response)
        arrayJuguetes = arrayArticulos.filter( juguete => juguete.tipo === "Medicamento" )
       console.log(arrayArticulos)
       console.log(arrayJuguetes)
       showProduct(arrayJuguetes)
      
})
}
getDatos()
function showProduct(arrayJuguetes) {
    let product = ""
    let arrayJuguetesShow = []
    arrayJuguetesShow.push(...arrayJuguetes)
    console.log(arrayJuguetesShow)

    arrayJuguetesShow.map((producto) => {

            product += `
            <div class="  col">
            <div class="card shadow-sm">
            <h5 class="card-title">${producto.nombre} </h5>
            <img src="${producto.imagen}"> </img>
              <div class="card-body">
                <p class="card-text">${producto.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-lg btn-outline-secondary">Agregar al carrito</button>
                    
                  </div>
                  <small class="text-muted">Stock: ${producto.stock} </small>
                </div>
              </div>
            </div>
            </div>
            ` 
            console.log(product)
       })
   document.querySelector(".productos").innerHTML = product
}
