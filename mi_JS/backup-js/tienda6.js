class Tienda {
    constructor(vinos) {     
        this.vinos = vinos;
        this.carrito = [];
    }

    //metodo para iniciar la tienda
    iniciarTienda() {
        alert("Bienvenidos a Vinos Punilla. \n Ingresa tu año de nacimiento para continuar");

        const anioNacimientoIng = prompt("Ingresa tu año de nacimiento");

        if (this.validarEdad(anioNacimientoIng)) {
            alert("Bien, sos mayor de edad.\nA continuación podrás ver un menú con las opciones disponibles.");
            this.mostrarMenuVinos();
        } else {
            alert("Debes ser mayor de 18 años para ingresar a la tienda. Recarga la página.");
        }
    }

    //metodo para validar la edad del usuario
    validarEdad(anioNacimientoIng) {
        const anioNacimiento = parseInt(anioNacimientoIng);
        const anioActual = new Date().getFullYear();    
        const edad = anioActual - anioNacimiento;

        return !isNaN(anioNacimiento) && edad >= 18;
    }

    //metodo para mostrar el menú de opciones
    mostrarMenuVinos() {
        let opcion = "";
        while (opcion !== "4") { 
            opcion = prompt("Selecciona una opción: \n1)-  Filtrar vinos por precio. \n2)- Comprar vinos. \n3)- Mostrar carrito. \n4)- Salir");
            
            switch (opcion) {
                case "1":
                    this.selecionarOrden();
                    break;
                case "2":   
                    this.iniciarCarrito();
                    break;
                case "3":
                    this.mostrarCarrito();
                    break;
                case "4":
                    alert("Gracias por visitar Vinos Punilla.");
                    break;
                default:
                    alert("Opción no válida. Inténtalo de nuevo.");  
            } 
        }   
    }

    //metodo para seleccionar el orden de los precios
    selecionarOrden() {
        const orden = prompt("Selecciona el orden: \n A) de menor a mayor. \n B) de mayor a menor.").toLowerCase();
        if (orden === "a") {
            this.filtrarPrecios(true);
        } else if (orden === "b") {
            this.filtrarPrecios(false);
        } else {
            alert("Opción no válida. Inténtalo de nuevo.");
        } 
    }
    
    //metodo para iniciar la compra de vinos
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
                this.agregarAlCarrito(prod_vino);
                alert("Compraste el vino " + prod_vino.nombre + " a $" + prod_vino.precio);

                lista_vinos += prod_vino.nombre + "\n";
                sumaCarrito += prod_vino.precio;
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

    //metodo para obtener un vino por su código
    obtenerVino(cod_vino) {
        return this.vinos.find(vino => vino.id === cod_vino) || null;
    }

    //metodo para agregar un vino al carrito
    agregarAlCarrito(vino) {
        this.carrito.push(vino);
    }
    
    //metodo para filtrar los vinos por precio
    filtrarPrecios(ascendente) {
        const preciosOrdenados = this.vinos.sort((a, b) => {
            return ascendente ? a.precio - b.precio : b.precio - a.precio;
        });
        let listaPrecios = "";
        preciosOrdenados.forEach(vino => {
            listaPrecios += vino.nombre + " - $" + vino.precio + "\n";
        });
        alert("Vinos ordenados por precio:\n" + listaPrecios);
    }
    
    //metodo para mostrar el carrito de compras
    mostrarCarrito() {
        if (this.carrito.length === 0) {
            alert("No tienes vinos en el carrito.");
            return;
        } else {
            let lista_vinos = "Lista con detalle de cosecha:\n";
            let sumaCarrito = 0;
            this.carrito.forEach(vino => {
                lista_vinos += vino.nombre + ". Tiempo de cosecha: " + vino.calcularAniosCosecha() + " años\n";
                sumaCarrito += vino.precio;
            });
            const fechaActual = new Date();
            alert("Compraste:\n" + lista_vinos + "\nPrecio total: $" + sumaCarrito + "\nFecha y hora actual: " + fechaActual.toLocaleString());
        }        
    }
}

// Crea una instancia de la tienda y empieza el proceso
const tienda = new Tienda(vinos);
tienda.iniciarTienda();


/*
esto es lo mismo q arme en tienda3.js pero le agregue la fecha y hora actual cuando veo el carrito de compras una vez q compro, también
Agregue lo hablado con Walter para usar date y calcular la diferencia de años entre el año actual y el de cosecha del vino.
Ademas de cambiar la forma de ingreso, ya no pido mas el usuario y contraseña, sino el año de nacimiento para validar la edad. 
Esto me sirve para entrega2  y sumare cosas con DOM y eventos para la entrega3
*/