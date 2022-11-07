let total = 0; 

function agregarAlCarrito(precio){
    return total += precio; 
}


function calcularImpuestos(total){
    return total * 1.21;
}


total = agregarAlCarrito(300);
total = agregarAlCarrito(300);
total = agregarAlCarrito(2000);

totalPagar = calcularImpuestos(total)

console.log(`El precio subtotal a pagar es de ${total}, incluyendo iva es ${totalPagar}`)