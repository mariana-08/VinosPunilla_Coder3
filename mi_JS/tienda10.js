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

    mostrarVinos(vinos = this.vinos) {
        const contenedor = document.querySelector('.contenedor-vinos');
        const plantilla = document.querySelector('.plantilla-vino');
        contenedor.innerHTML = ''; // Limpiar el contenedor antes de mostrar los vinos

        vinos.forEach(vino => {
            const vinoDiv = plantilla.cloneNode(true);
            vinoDiv.classList.remove('d-none');
            vinoDiv.querySelector('.img-vinos').src = vino.imagen;
            vinoDiv.querySelector('.img-vinos').alt = vino.nombre;
            vinoDiv.querySelector('.tit-card').textContent = vino.nombre;
            vinoDiv.querySelector('.descripcion').textContent = vino.bajada;
            vinoDiv.querySelector('.anio-anios').innerHTML = `Año de Producción: ${vino.anioProduccion} <br> Maduración: ${vino.calcularAniosCosecha ? vino.calcularAniosCosecha() : 'N/A'} años`;
            vinoDiv.querySelector('.precio-vin').textContent = `Precio: $${vino.precio}`;
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

        document.querySelector('.btn-comprar').addEventListener('click', (event) => {
            event.preventDefault();
            this.comprarAhora();
        });

        document.getElementById('filtrar-precios').addEventListener('click', () => {
            this.selecionarOrden();
        });
    }

    agregarAlCarrito(id) {
        const vino = this.vinos.find(v => v.id === id);
        if (vino) {
            this.carrito.push(vino);
            alert(`${vino.nombre} ha sido agregado al carrito.\nPrecio: $${vino.precio}`);
        }
    }

    comprarAhora() {
        if (this.carrito.length === 0) {
            alert("No tienes productos en el carrito.");
            return;
        }

        localStorage.setItem('carrito', JSON.stringify(this.carrito));
        window.location.href = 'carrito.html';
    }

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

    filtrarPrecios(ascendente) {
        const preciosOrdenados = this.vinos.sort((a, b) => {
            return ascendente ? a.precio - b.precio : b.precio - a.precio;
        });
        this.mostrarVinos(preciosOrdenados);
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

// Cargar los datos de vinos.json y crear una instancia de Tienda
fetch('mi_JS/vinos.json')
    .then(response => response.json())
    .then(data => {
        const tienda = new Tienda(data);
        tienda.iniciarTienda();
    })
    .catch(error => console.error('Error al cargar los datos:', error));
