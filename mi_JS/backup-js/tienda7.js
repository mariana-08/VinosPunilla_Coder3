class Tienda {
    constructor(vinos) {     
        this.vinos = vinos;
        this.carrito = [];
    }

    iniciarTienda() {
        alert("Bienvenidos a Vinos Punilla. \n Ingresa tu año de nacimiento para continuar");

        const anioNacimientoIng = prompt("Ingresa tu año de nacimiento");

        if (this.validarEdad(anioNacimientoIng)) {
            alert("Bien, sos mayor de edad.\nA continuación podrás ver un menú con las opciones disponibles.");
            this.mostrarVinos();
        } else {
            alert("Debes ser mayor de 18 años para ingresar a la tienda. Recarga la página.");
        }
    }

    validarEdad(anioNacimientoIng) {
        const anioNacimiento = parseInt(anioNacimientoIng);
        const anioActual = new Date().getFullYear();    
        const edad = anioActual - anioNacimiento;

        return !isNaN(anioNacimiento) && edad >= 18;
    }

    mostrarVinos() {
        const contenedor = document.querySelector('.contenedor-vinos');
        this.vinos.forEach(vino => {
            const vinoDiv = document.createElement('div');
            vinoDiv.classList.add('col-md-6', 'mb-3'); // col-md-6 para 2 columnas
            vinoDiv.innerHTML = `
                <div class="card h-100">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${vino.imagen}" class="img-fluid rounded-start" alt="${vino.nombre}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">${vino.nombre}</h3>
                                <p class="card-text">Precio: $${vino.precio}</p>
                                <p class="card-text">Año de Producción: ${vino.anioProduccion}</p>
                                <p class="card-text">Años de añejamiento: ${vino.calcularAniosCosecha()}</p>
                                <p class="card-text">${vino.bajada}</p>
                                <button class="btn btn-primary" onclick="tienda.agregarAlCarrito(${vino.id})">Agregar al carrito</button>
                                <button class="btn btn-success" onclick="tienda.comprarAhora(${vino.id})">Comprar ahora</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedor.appendChild(vinoDiv);
        });
    }

    agregarAlCarrito(id) {
        const vino = this.vinos.find(v => v.id === id);
        if (vino) {
            this.carrito.push(vino);
            alert(`${vino.nombre} ha sido agregado al carrito.`);
        }
    }

    comprarAhora(id) {
        const vino = this.vinos.find(v => v.id === id);
        if (vino) {
            alert(`Has comprado ${vino.nombre} por $${vino.precio}.`);
            // Aquí puedes agregar la lógica para procesar la compra inmediata
        }
    }

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
