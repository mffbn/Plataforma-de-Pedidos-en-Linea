function guardarCarrito() {
    // Recuperar los elementos existentes del carrito guardado
    var carritoGuardado = localStorage.getItem('carritoGuardado');
    var elementosGuardados = carritoGuardado ? JSON.parse(carritoGuardado) : [];

    // Agregar los elementos actuales al carrito guardado (sin duplicados)
    listCart.forEach(function (elemento) {
        var existeEnGuardado = elementosGuardados.some(function (guardado) {
            return guardado.name === elemento.name; // Comparar por algún atributo único
        });

        if (!existeEnGuardado) {
            elementosGuardados.push(elemento);
        }
    });

    // Guardar los elementos del carrito guardado en localStorage
    localStorage.setItem('carritoGuardado', JSON.stringify(elementosGuardados));

    // Limpiar el carrito actual
    listCart = [];
    addCartToHTML(); // Actualizar la representación en la página
}
