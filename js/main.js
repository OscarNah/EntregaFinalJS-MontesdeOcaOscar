let productos = [];

fetch(`../js/items.json`)
    .then(Response => Response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategorias = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".productoAgregar");

function cargarProductos(productosElegidos) {
    //Primero Vacea el contenedorProductos.innerHTML
    contenedorProductos.innerHTML = "";
    //Ejecuta el forEach de los productos elegidos
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}" />
                <div class="card-body">
                    <p class="card-title text-center">${producto.titulo}</p>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item">Precio: $ ${producto.precio}</li>
                </ul>
                <div class="card-footer">
                    <button class="productoAgregar w-100 btn btn-lg btn-dark" id="${producto.id}" type="submit">Agregar al carrito</button>
                </div>
            </div>
        </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
    //prueba de botones
    // console.log(botonesAgregar);
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach((boton) => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter((producto) => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los Productos";
            cargarProductos(productos);
        }
    })
});



function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".productoAgregar");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")
if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    // prueba de que boton muestra el id del producto
    // console.log(id);
    const productoAgregado = productos.find(producto => producto.id === idBoton);
//     // prueba de que muestra los datos del array
       // console.log(productoAgregado);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        //prueba de que push agrega productos al array vacio productosEnCarrito
        // console.log(productosEnCarrito);
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }
    /*Toastify cuando se agrega un porducto al carrito*/ 
    Toastify({
        text: "Producto agregado a carrito.",
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
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
}

