//
class Tienda {
    constructor(vinos) {
        this.vinos = vinos;
        this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        this.contadorCarrito = document.getElementById('carrito-contador');
        this.actualizarContadorCarrito();
    }

    // Método para iniciar la tienda
    iniciarTienda() {
        alert("Bienvenidos a Vinos Punilla. \n Ingresa tu año de nacimiento para continuar");

        const anioNacimientoIng = prompt("Ingresa tu año de nacimiento");

        if (this.validarEdad(anioNacimientoIng)) {
            alert("Bien, sos mayor de edad.\nPodrás visitar la pagina y comprar vinos.");
            this.mostrarVinos();
        } else {
            alert("Debes ser mayor de 18 años para ingresar a la tienda. Recarga la página.");
        }

        // Agregar eventos a los selectores de orden y filtro por precio
        document.getElementById('ordenar-precios').addEventListener('change', (event) => {
            this.ordenarVinos(event.target.value);
        });

        // Agregar eventos a los selectores de orden y filtro por bodega
        document.getElementById('filtrar-bodega').addEventListener('change', (event) => {
            this.filtrarPorBodega(event.target.value);
        });
    }

    // Método para validar la edad del usuario
    validarEdad(anioNacimientoIng) {
        const anioNacimiento = parseInt(anioNacimientoIng);
        const anioActual = new Date().getFullYear();
        const edad = anioActual - anioNacimiento;

        return !isNaN(anioNacimiento) && edad >= 18;
    }

    // Método para mostrar los vinos en la pagina
    mostrarVinos(vinos = this.vinos) {
        const contenedor = document.querySelector('.contenedor-vinos');
        const plantilla = document.querySelector('.plantilla-vino');
        contenedor.innerHTML = ''; // Limpiar el contenedor antes de mostrar los vinos

        // Recorre los vinos y agrega al contenedor
        vinos.forEach(vino => {
            const vinoDiv = plantilla.cloneNode(true);
            vinoDiv.classList.remove('d-none');
            vinoDiv.querySelector('.img-vinos').src = vino.imagen;
            vinoDiv.querySelector('.img-vinos').alt = vino.nombre;
            vinoDiv.querySelector('.tit-card').textContent = vino.nombre;
            vinoDiv.querySelector('.descripcion').textContent = vino.bajada;
            vinoDiv.querySelector('.anio-anios').innerHTML = `Año de Producción: ${vino.anioProduccion} <br> Maduración: ${vino.calcularAniosCosecha ? vino.calcularAniosCosecha() : '\n'} años`;
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
    }

    //metodo para agregar al carrito
    agregarAlCarrito(id) {
        const vino = this.vinos.find(v => v.id === id);
        if (vino) {
            const vinoEnCarrito = this.carrito.find(v => v.id === id);
            if (vinoEnCarrito) {
                vinoEnCarrito.cantidad++;
            } else {
                this.carrito.push({ ...vino });
            }
            alert(`${vino.nombre} ha sido agregado al carrito.\nPrecio: $${vino.precio}`);
            this.actualizarContadorCarrito();
            localStorage.setItem('carrito', JSON.stringify(this.carrito));
        }
    }

    // Método para actualizar el contador del carrito
    actualizarContadorCarrito() {
        this.contadorCarrito.textContent = this.carrito.reduce((acc, vino) => acc + vino.cantidad, 0);
    }

    // Método para ordenar los vinos por precio Llama al método filtrarPrecios con el parámetro ascendente o descendente
    ordenarVinos(orden) {
        if (orden === 'asc') {
            this.filtrarPrecios(true);
        } else if (orden === 'desc') {
            this.filtrarPrecios(false);
        } else {
            this.mostrarVinos(this.vinos);
        }
    } // cuando el usuario selecciona una opción de ordenamiento, se llama al método ordenarVinos con el valor del select como parámetro.

    // Método para filtrar los vinos por precio / realiza el ordenamiento de los vinos y luego actualiza la vista  llamando a mostrarVinos.
    filtrarPrecios(ascendente) {
        const preciosOrdenados = this.vinos.sort((a, b) => {
            return ascendente ? a.precio - b.precio : b.precio - a.precio;
        });
        this.mostrarVinos(preciosOrdenados);
    }

    // Método para filtrar los vinos por bodega
    filtrarPorBodega(bodega) {
        if (bodega === "") {
            this.mostrarVinos(this.vinos);
        } else {
            const vinosFiltrados = this.vinos.filter(vino => vino.bodega === bodega);
            this.mostrarVinos(vinosFiltrados);
        }
    }

}


// Crear una instancia de Tienda con los datos de vinos.js
const tienda = new Tienda(vinos);
tienda.iniciarTienda();