document.addEventListener('DOMContentLoaded', () => {
    const carritoItems = document.getElementById('carrito-items');
    const sumaCarrito = document.querySelector('.suma-carrito');
    const finalizarCompraBtn = document.getElementById('finalizar-compra');

    // Cargar el carrito desde el localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para mostrar los productos en el carrito
    function mostrarCarrito() {
        carritoItems.innerHTML = '';
        let total = 0;

        carrito.forEach(vino => {
            const row = document.createElement('tr');
            const imgCell = document.createElement('th');
            imgCell.scope = 'row';
            const img = document.createElement('img');
            img.src = vino.imagen;
            img.alt = vino.nombre;
            img.width = 50;
            imgCell.appendChild(img);

            const nameCell = document.createElement('td');
            nameCell.textContent = vino.nombre;

            const priceCell = document.createElement('td');
            priceCell.textContent = `$${vino.precio}`;

            row.appendChild(imgCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);

            carritoItems.appendChild(row);
            total += vino.precio;
        });

        sumaCarrito.textContent = `Total: $${total}`;
    }

    // Función para finalizar la compra
    function finalizarCompra() {
        if (carrito.length === 0) {
            alert("No tienes productos en el carrito.");
            return;
        }

        let listaVinos = "\n";
        let sumaCarrito = 0;
        carrito.forEach(vino => {
            listaVinos += `${vino.nombre} - $${vino.precio}\n`;
            sumaCarrito += vino.precio;
        });

        const fechaActual = new Date();
        alert(`Compraste:\n${listaVinos}\nPrecio total: $${sumaCarrito}\nFecha y hora actual: ${fechaActual.toLocaleString()}`);

        // Vaciar el carrito después de la compra
        localStorage.removeItem('carrito');
        carritoItems.innerHTML = '';
        sumaCarrito.textContent = 'Total: $0';

        // Redirigir al index.html
        window.location.href = 'index.html';
    }

    // Mostrar el carrito al cargar la página
    mostrarCarrito();

    // Agregar evento al botón de finalizar compra
    finalizarCompraBtn.addEventListener('click', finalizarCompra);
});