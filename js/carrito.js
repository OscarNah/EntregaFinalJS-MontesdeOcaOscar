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
                  <div class="selector-cantidad">
                    <button class="iconos botonRestar p-1 px-1" id="botonRestar" data-id="${producto.id}">-</button>
                    <input type="text" value="${producto.cantidad}" class="carritoCantidad" id="cantidad-${producto.id}">
                    <button class="iconos botonSumar" id="botonSumar" data-id="${producto.id}">+</button>
                </div>
              </div>
              <div class="col-2 col-sm-2 p-0 my-auto carritoProductoPrecio">
                  <small>Precio</small>
                  <p>$ ${producto.precio}</p>
              </div>
              <div class="col-3 col-sm-2 p-0 my-auto carritoProductoSubtotal">
                  <small>Subtotal</small>
                  <p id="subtotal-${producto.id}">$ ${producto.precio * producto.cantidad}  </p>
              </div>
              <div class="col-12 col-sm-1 p-0 my-auto">
                  <button class="carritoProductoEliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
              </div>
              </div>
              <hr/>
              `;
      contenedorCarritoProductos.append(div);
      // actualizarCantidad();
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
function actualizarCantidad(idProducto, cantidad) {
  const inputCantidad = document.getElementById(`cantidad-${idProducto}`);
  const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idProducto);
  if (productoEnCarrito) {
      productoEnCarrito.cantidad = cantidad;
      inputCantidad.value = cantidad;
      // Actualizar el subtotal del producto
      const subtotal = productoEnCarrito.precio * cantidad;
      const elementoSubtotal = document.querySelector(`#subtotal-${idProducto}`);
      elementoSubtotal.innerText = `$ ${subtotal}`;
      // Actualizar el localStorage
      localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
      // Actualizar el total del carrito
      actualizarTotal();
  }
}
contenedorCarritoProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("botonSumar")) {
    const idProducto = e.target.dataset.id;
    const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idProducto);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
      actualizarCantidad(idProducto, productoEnCarrito.cantidad);
      // Actualizar el array en localStorage después de modificar la cantidad
      localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }
  }
  if (e.target.classList.contains("botonRestar")) {
    const idProducto = e.target.dataset.id;
    const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idProducto);

    if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad--;
      actualizarCantidad(idProducto, productoEnCarrito.cantidad);
      // Actualizar el array en localStorage después de modificar la cantidad
      localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }
  }
});
function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carritoProductoEliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);
  });
}
function eliminarDelCarrito(e) {
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);
  productosEnCarrito.splice(index, 1);
  cargarProductosCarrito();
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  /*Toastify cuando se agrega un porducto al carrito*/
  Toastify({
    text: "Producto eliminado del carrito.",
    duration: 2000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #f99dc6ff, #fccde2ff)",
    },
    offset: {
      x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
  Swal.fire({
    title: "Se vacío el carrito con exito!",
    text: "Vuelva a agregar productos para visualizarlo",
    imageUrl: "../img/carritoVacio.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
  productosEnCarrito.length = 0;
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  cargarProductosCarrito();
}
function actualizarTotal() {
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  total.innerText = `$ ${totalCalculado}`;
}
botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
  Swal.fire({
    title: "Gracias!",
    text: "Vuelva pronto",
    imageUrl: "../img/vuelvaPronto.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
  productosEnCarrito.length = 0;
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  contenedorCarritoVacio.classList.add("desactivado");
  contenedorCarritoProductos.classList.add("desactivado");
  contenedorCarritoAcciones.classList.add("desactivado");
  contenedorCarritoComprado.classList.remove("desactivado");
}

