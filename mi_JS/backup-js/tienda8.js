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
        const plantilla = document.querySelector('.plantilla-vino');

        this.vinos.forEach(vino => {
            const vinoDiv = plantilla.cloneNode(true);
            vinoDiv.classList.remove('d-none');
            vinoDiv.querySelector('.img-vinos').src = vino.imagen;
            vinoDiv.querySelector('.img-vinos').alt = vino.nombre;
            vinoDiv.querySelector('.tit-card').textContent = vino.nombre;
            vinoDiv.querySelector('.descripcion').textContent = vino.bajada;
            vinoDiv.querySelector('.anio-anios').innerHTML = `Año de Producción: ${vino.anioProduccion} <br> Maduración: ${vino.calcularAniosCosecha()} años`;
            vinoDiv.querySelector('.precio-vin').textContent = `Precio: $${vino.precio}`;
            vinoDiv.querySelector('.comprar').setAttribute('data-id', vino.id);
            vinoDiv.querySelector('.agregar').setAttribute('data-id', vino.id);

            contenedor.appendChild(vinoDiv);
        });

        // Agregar eventos a los botones
        this.agregarEventos();
    }

    agregarEventos() {
        document.querySelectorAll('.agregar').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const id = parseInt(event.target.getAttribute('data-id'));
                this.agregarAlCarrito(id);
            });
        });

        document.querySelectorAll('.comprar').forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const id = parseInt(event.target.getAttribute('data-id'));
                this.comprarAhora(id);
            });
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
            this.carrito.push(vino);
            this.mostrarCarrito();
        }
    }

    mostrarCarrito() {
        if (this.carrito.length === 0) {
            alert("No tienes vinos en el carrito.");
            return;
        } else {
            let lista_vinos = "Detalle de carrito:\n";
            let sumaCarrito = 0;
            this.carrito.forEach(vino => {
                lista_vinos += `${vino.nombre} - $${vino.precio}\n`;
                sumaCarrito += vino.precio;
            });
            const fechaActual = new Date();
            alert(`Compraste:\n${lista_vinos}\nPrecio total: $${sumaCarrito}\nFecha y hora actual: ${fechaActual.toLocaleString()}`);
        }        
    }
}

// Crea una instancia de la tienda y empieza el proceso
const tienda = new Tienda(vinos);
tienda.iniciarTienda();