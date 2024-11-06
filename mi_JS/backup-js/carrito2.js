// Función para mostrar el carrito en la página carrito.html
function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito-items');
    const resumenCompra = document.querySelector('.suma-carrito');
    contenedorCarrito.innerHTML = '';
    let sumaCarrito = 0;

    tienda.carrito.forEach(vino => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <th scope="row"><img src="${vino.imagen}" alt="${vino.nombre}" class="img-fluid" style="max-width: 50px;"></th>
            <td>${vino.nombre}</td>
            <td>$${vino.precio}</td>
        `;
        contenedorCarrito.appendChild(fila);
        sumaCarrito += vino.precio;
    });

    resumenCompra.textContent = `Total: $${sumaCarrito}`;
}

// Llama a la función para mostrar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);

// Evento para finalizar la compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    alert('Gracias por tu compra!');
    // Aquí puedes agregar la lógica para procesar el pago y vaciar el carrito
    tienda.carrito = [];
    mostrarCarrito();
});