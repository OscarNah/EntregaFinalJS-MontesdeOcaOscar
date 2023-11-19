const productos = [
    {
        id: "playera-01",
        titulo: "Playera estampado chica Gorra",
        imagen: "../img/playera1.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 335,
    },
    {
        id: "playera-02",
        titulo: "Playera estampado chica aretes",
        imagen: "../img/playera2.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 258,
    },
    {
        id: "playera-03",
        titulo: "Playera estampado chica telefono",
        imagen: "../img/playera3.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 320,
    },
    {
        id: "playera-04",
        titulo: "Playera estampado gato lentes",
        imagen: "../img/playera4.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 186,
    },
    {
        id: "playera-05",
        titulo: "Playera estampado gatos",
        imagen: "../img/playera5.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 229,
    },
    {
        id: "playera-06",
        titulo: "Playera estampado SCREAM",
        imagen: "../img/playera6.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 219,
    },
    {
        id: "playera-07",
        titulo: "Playera estampado Arizona",
        imagen: "../img/playera7.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 179,
    },
    {
        id: "playera-08",
        titulo: "Playera estampado Alien",
        imagen: "../img/playera8.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 199,
    },
    {
        id: "playera-09",
        titulo: "Playera estampado Tomorrow",
        imagen: "../img/playera9.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 130,
    },
    {
        id: "playera-10",
        titulo: "Playera estampado Meowtallica",
        imagen: "../img/playera10.png",
        categoria: {
            nombre: "Playeras",
            id: "playeras",
        },
        precio: 249,
    },
    {
        id: "jeans-01",
        titulo: "Jeans conicos con cremallera",
        imagen: "../img/jeans1.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 569,
    },
    {
        id: "jeans-02",
        titulo: "Jeans de pierna recta de cuero",
        imagen: "../img/jeans2.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 419,
    },
    {
        id: "jeans-03",
        titulo: "Jeans de pierna recta negros",
        imagen: "../img/jeans3.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 529,
    },
    {
        id: "jeans-04",
        titulo: "Jeans de pierna amplia",
        imagen: "../img/jeans4.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 450,
    },
    {
        id: "jeans-05",
        titulo: "Jeans ajustados con bolsillo oblicuo",
        imagen: "../img/jeans5.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 420,
    },
    {
        id: "jeans-06",
        titulo: "Jeans hombre con bolsillo oblicuo",
        imagen: "../img/jeans6.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 579,
    },
    {
        id: "jeans-07",
        titulo: "Jeans algodón con bolsillo de pierna ancha",
        imagen: "../img/jeans7.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 555,
    },
    {
        id: "jeans-08",
        titulo: "Jeans rectos con bolsillo oblicuo delgado",
        imagen: "../img/jeans8.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 569,
    },
    {
        id: "jeans-09",
        titulo: "Jeans ajustados desgarrados algodón con lavado",
        imagen: "../img/jeans9.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 469,
    },
    {
        id: "jeans-10",
        titulo: "Jeans ajustados con rasguños de gato con lavado",
        imagen: "../img/jeans10.png",
        categoria: {
            nombre: "Jeans",
            id: "jeans",
        },
        precio: 519,
    },
    {
        id: "sudadera-01",
        titulo: "Sudadera chica con calavera",
        imagen: "../img/sudadera1.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 414,
    },
    {
        id: "sudadera-02",
        titulo: "Sudadera coche japones",
        imagen: "../img/sudadera2.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 405,
    },
    {
        id: "sudadera-03",
        titulo: "Sudadera rostro chica rojo",
        imagen: "../img/sudadera3.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 441,
    },
    {
        id: "sudadera-04",
        titulo: "Sudadera rostro chica rosa",
        imagen: "../img/sudadera4.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 347,
    },
    {
        id: "sudadera-05",
        titulo: "Sudadera calaveras",
        imagen: "../img/sudadera5.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 249,
    },
    {
        id: "sudadera-06",
        titulo: "Sudadera ojos tokyo",
        imagen: "../img/sudadera6.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 479,
    },
    {
        id: "sudadera-07",
        titulo: "Sudadera ola",
        imagen: "../img/sudadera7.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 440,
    },
    {
        id: "sudadera-08",
        titulo: "Sudadera Crop con cuello polo",
        imagen: "../img/sudadera8.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 319,
    },
    {
        id: "sudadera-09",
        titulo: "Sudadera LOS ANGELES",
        imagen: "../img/sudadera9.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        precio: 439,
    },
    {
        id: "sudadera-10",
        titulo: "Sudadera esqueleto pedrería",
        imagen: "../img/sudadera10.png",
        categoria: {
            nombre: "Sudaderas",
            id: "sudaderas",
        },
        stock: 2,
        precio: 200,
    },
];
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


cargarProductos(productos);

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
}
