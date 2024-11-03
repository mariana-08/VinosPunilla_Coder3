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
            this.iniciarCarrito();
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

    iniciarCarrito() {
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
    }

    obtenerVino(cod_vino) {
        return this.vinos.find(vino => vino.id === cod_vino) || null;
    }
}

// Crear una instancia de la tienda y comenzar el proceso
const tienda = new Tienda(user, pass, vinos);
tienda.iniciarTienda();