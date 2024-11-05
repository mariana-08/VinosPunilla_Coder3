document.addEventListener('DOMContentLoaded', () => {
    const contenedorCarrito = document.getElementById('carrito-items');
    const totalPrecio = document.getElementById('total-precio');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let sumaTotal = 0;

    carrito.forEach(vino => {
        const vinoRow = document.createElement('tr');
        vinoRow.innerHTML = `
            <td><img src="${vino.imagen}" alt="${vino.nombre}" class="img-vinos-carrito"></td>
            <td>${vino.nombre}</td>
            <td>$${vino.precio}</td>
        `;
        contenedorCarrito.appendChild(vinoRow);
        sumaTotal += vino.precio;
    });

    totalPrecio.textContent = `Total: $${sumaTotal}`;

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        alert('Compra finalizada. Gracias por su compra.');
        localStorage.removeItem('carrito');
        window.location.href = 'index.html';
    });
});