const mug = 300;
let msg = "Ingrese el metodo de pago" + "\n" +
           "1 - Transferencia bancaria" + "\n" +
           "2 - Tarjeta de credito" + "\n" +
           "3 - Mercadopago" + "\n";

let menu = () => parseInt(prompt(msg));
let result = menu();

if (result < 1 || result > 3 || isNaN(result)) {
    alert("La opcion seleccionada es incorrecta");
    result = menu(); 
}

function discount(price,percent) {
    return price - ((price * percent) / 100);
}

switch (result) {
    case 1:
        alert("El pago por transferencia bancaria tiene un descuento del 30%, el precio final del producto es de " + discount(mug,30));
        break;

    case 2:
        alert("El pago por tarjeta de credito no posee descuento, el precio final del producto es de " + mug);
        break;
    
    case 3:
            alert("El pago por MercadoPago tiene un descuento del 20%, el precio final del producto es de " + discount(mug,20));
            break;

    default:
        break;
}