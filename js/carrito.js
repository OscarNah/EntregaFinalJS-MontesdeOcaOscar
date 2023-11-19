let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carritoVacio");
const contenedorCarritoProductos = document.querySelector("#carritoProductos");
const contenedorCarritoAcciones = document.querySelector("#carritoAcciones");
const contenedorCarritoComprado = document.querySelector("#carritoComprado");
let botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");
const botonVaciar = document.querySelector("#carritoAccionesVaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carritoAccionesComprar");

function cargarProductosCarrito() {
  if (productosEnCarrito && productosEnCarrito.length > 0) {

    

    contenedorCarritoVacio.classList.add("desactivado");
    contenedorCarritoProductos.classList.remove("desactivado");
    contenedorCarritoAcciones.classList.remove("desactivado");
    contenedorCarritoComprado.classList.add("desactivado");

    contenedorCarritoProductos.innerHTML = "";

    productosEnCarrito.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add("CarritoProductos");
      div.innerHTML = `
              <div class="row carritoProducto">
              <div class="col-2 col-sm-2 2 p-2 my-auto mx-auto">
                  <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.titulo}" />
              </div>
              <div class="col-3 col-sm-3 p-0 my-auto carritoProductoTitulo">
                  <small>Titulo</small>
                  <h5>${producto.titulo}</h5>
              </div>
              <div class="col-2 col-sm-2 p-0 my-auto carritoProductoCantidad">
                  <small>Cantidad</small>
                  <p>${producto.cantidad}</p>
              </div>
              <div class="col-2 col-sm-2 p-0 my-auto carritoProductoPrecio">
                  <small>Precio</small>
                  <p>$ ${producto.precio}</p>
              </div>
              <div class="col-3 col-sm-2 p-0 my-auto carritoProductoSubtotal">
                  <small>Subtotal</small>
                  <p>$ ${producto.precio * producto.cantidad}</p>
              </div>
              <div class="col-12 col-sm-1 p-0 my-auto">
                  <button class="carritoProductoEliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
              </div>
              </div>
              <hr/>
              `;
      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("desactivado");
    contenedorCarritoProductos.classList.add("desactivado");
    contenedorCarritoAcciones.classList.add("desactivado");
    contenedorCarritoComprado.classList.add("desactivado");
  }
  actualizarBotonesEliminar();
  actualizarTotal();
}
cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad),0);
    total.innerText = `$ ${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("desactivado");
    contenedorCarritoProductos.classList.add("desactivado");
    contenedorCarritoAcciones.classList.add("desactivado");
    contenedorCarritoComprado.classList.remove("desactivado");
}