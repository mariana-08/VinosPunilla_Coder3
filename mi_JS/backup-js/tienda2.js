class Tienda {
    constructor(usuario, clave, vinos) {
        this.usuario = usuario;
        this.clave = clave;
        this.vinos = vinos;
        this.carrito = [];
    }

    iniciarTienda() {
        alert("Bienvenidos a Vinos Punilla. \n Ingresa tu usuario y contraseña para continuar");

        const usuarioIngresado = prompt("Ingresa tu usuario");
        const claveIngresada = prompt("Ingresa tu contraseña");

        if (this.validarUsuario(usuarioIngresado, claveIngresada)) {
            alert("Bienvenido " + usuarioIngresado + " a la tienda de Vinos Punilla. \n A continuación podrás ver los vinos disponibles");
            this.mostrarMenu();
        } else {
            alert("Usuario y/o contraseña incorrectos. Recarga la página.");
        }
    }

    validarUsuario(usuarioIngresado, claveIngresada) {
        if (usuarioIngresado !== "" && claveIngresada !== "") {
            return usuarioIngresado === this.usuario && claveIngresada === this.clave;
        } else {
            alert("El usuario y/o contraseña no deben estar vacíos. Recarga la página.");
            return false;
        }
    }

    mostrarMenu() {
        let opcion = "";
        while (opcion !== "7") {
            opcion = prompt("Selecciona una opción:\n1)- Ver todos los vinos\n2)- Filtrar vinos por precio\n3)- Ordenar vinos por nombre\n4)- Ordenar vinos por precio\n5)- Agregar vinos al carrito\n6)- Ver carrito\n7)- Salir");
            switch (opcion) {
                case "1":
                    this.mostrarVinos(this.vinos);
                    break;
                case "2":
                    this.filtrarVinosPorPrecio();
                    break;
                case "3":
                    this.ordenarVinosPorNombre();
                    break;
                case "4":
                    this.ordenarVinosPorPrecio();
                    break;
                case "5":
                    this.agregarVinosAlCarrito();
                    break;
                case "6":
                    this.mostrarResumenCarrito();
                    break;
                case "7":
                    alert("Gracias por visitar Vinos Punilla.");
                    break;
                default:
                    alert("Opción no válida. Inténtalo de nuevo.");
            }
        }
    }

    mostrarVinos(vinos) {
        let listaVinos = vinos.map(function(vino) {  
            return vino.id + ". " + vino.nombre + " - $" + vino.precio;
        }).join("\n");
        alert("Vinos disponibles:\n" + listaVinos);
    }

    filtrarVinosPorPrecio() {
        const precioMinimo = parseFloat(prompt("Ingresa el precio mínimo:"));
        const precioMaximo = parseFloat(prompt("Ingresa el precio máximo:"));
        const vinosFiltrados = this.vinos.filter(vino => vino.precio >= precioMinimo && vino.precio <= precioMaximo);
        this.mostrarVinos(vinosFiltrados);
    }

    ordenarVinosPorNombre() {
        const vinosOrdenados = this.vinos.slice().sort((a, b) => {
            const nombreA = a.nombre.toLowerCase();
            const nombreB = b.nombre.toLowerCase();
            if (nombreA < nombreB) return -1;
            if (nombreA > nombreB) return 1;
            return 0;
        });
        this.mostrarVinos(vinosOrdenados);

    }

    ordenarVinosPorPrecio() {
        
        const vinosOrdenados = this.vinos.slice().sort((a,b) => a.precio - b.precio);
        this.mostrarVinos(vinosOrdenados);

    }
    
    ///agregarVinosAlCarrito Permite al usuario ingresar los códigos de los vinos que desea comprar y los agrega al carrito.
    agregarVinosAlCarrito() {
        let sumaCarrito = 0;
        let lista_vinos = "";

        while (true) {
            let cod_vino = prompt("Ingresa el código del vino que deseas comprar (o presiona Cancelar para finalizar):");

            if (cod_vino === null) {
                break;
            }

            cod_vino = parseInt(cod_vino);

            if (isNaN(cod_vino)) {
                alert("Debe ingresar un número válido.");
                continue;
            }

            const prod_vino = this.obtenerVino(cod_vino);

            if (prod_vino) {
                alert("Compraste el vino " + prod_vino.nombre + " por $" + prod_vino.precio);

                lista_vinos += prod_vino.nombre + "\n";
                sumaCarrito += prod_vino.precio;
                this.carrito.push(prod_vino); 
            } else {
                alert("Código de vino inválido.");
            }
        }

        if (sumaCarrito > 0) {
            alert("Compraste:\n" + lista_vinos + "\nPrecio total: $" + sumaCarrito);
        } else {
            alert("No compraste ningún vino.");
        }
    }//Muestra un resumen de los vinos comprados y el precio total.

    obtenerVino(cod_vino) {
        return this.vinos.find(vino => vino.id === cod_vino) || null;
    }

    mostrarResumenCarrito() {
    if (this.carrito.length > 0) {
        // Crea un array de cadenas de texto con el nombre y precio de cada vino usando concatenación
        const lista_vinos = this.carrito.map(function(vino) {
            return vino.nombre + " - $" + vino.precio;
        }).join("\n"); // Une todas las cadenas en una sola, separadas por saltos de línea

        // Calcula la suma total de los precios de los vinos en el carrito
        const sumaCarrito = this.carrito.reduce(function(acumulador, item) {
            return acumulador + item.precio;
        }, 0);

        // Muestra el resumen del carrito
        alert("Compraste:\n" + lista_vinos + "\n\nPrecio total: $" + sumaCarrito);
    } else {
        alert("No compraste ningún vino.");
    }
}
}

// Crear una instancia de la tienda y comenzar el proceso
const tienda = new Tienda(user, pass, vinos);
tienda.iniciarTienda();
