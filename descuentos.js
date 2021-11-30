const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento
}

 function ButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    valuePrice = inputPrice.value;
    valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice,valueDiscount);

    const resultadoPrecio = document.getElementById("Resultado")
    resultadoPrecio.innerText = "El precio con desuento son: $" + precioConDescuento;
}



//  console.log({
//     precioOriginal,
//     descuento,
//     precioConDescuento
// })