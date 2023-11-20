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
                    <button class="iconos p-1 px-1" id="botonRestar" data-id="${producto.id}">-</button>
                    <input type="text" value="${producto.cantidad}" class="carritoCantidad" id="cantidad-${producto.id}">
                    <button class="iconos" id="botonSumar" data-id="${producto.id}">+</button>
                </div>
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
      actualizarCantidad();
      modificarCantidad();
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

function actualizarCantidad(idProducto, operacion) {
  const index = productosEnCarrito.findIndex((producto) => producto.id === idProducto);
  if (index !== -1) {
    if (operacion === 'sumar') {
      productosEnCarrito[index].cantidad += 1;
    } else if (operacion === 'restar' && productosEnCarrito[index].cantidad > 1) {
      productosEnCarrito[index].cantidad -= 1;
    } else {
      console.log("La cantidad mínima es 1, no se puede disminuir más.");
    }
    
    const inputCantidad = document.getElementById(`cantidad-${idProducto}`);
    inputCantidad.value = productosEnCarrito[index].cantidad;
    productosEnCarrito[index].subtotal = productosEnCarrito[index].precio * productosEnCarrito[index].cantidad;
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  }
}
// Modificar los eventos de los botones de suma y resta para llamar a la función actualizada
function modificarCantidad() {
  const botonesSumar = document.querySelectorAll('.carritoProductoCantidad #botonSumar');
  const botonesRestar = document.querySelectorAll('.carritoProductoCantidad #botonRestar');

  //console.log(botonesSumar); // Verifica si los botones de suma se están seleccionando correctamente
  //console.log(botonesRestar); // Verifica si los botones de resta se están seleccionando correctamente

  botonesSumar.forEach((botonSumar) => {
    botonSumar.addEventListener("click", (event) => {
      const productoId = event.target.dataset.id;
      actualizarCantidad(productoId, 'sumar');
    });
  });
  console.log(botonesSumar);

  botonesRestar.forEach((botonRestar) => {
    botonRestar.addEventListener("click", (event) => {
      const productoId = event.target.dataset.id;
      actualizarCantidad(productoId, 'restar');
    });
  });
}


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

