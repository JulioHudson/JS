const mug = 300;
const book = 250;
const draw = 500;
const pic = 400;

let msg1 = "Que producto desea adquirir?" + "\n" +
           "1 - Tasa con dibujo y leyenda personalizada" + "\n" +
           "2 - Libro de ilustraciones" + "\n" +
           "3 - Dibujo personalizado" + "\n" +
           "4 - Imagen a eleccion con texto personalizado" + "\n";

let menu1 = () => parseInt(prompt(msg1));
let product = menu1(); 

if (product < 1 || product > 4 || isNaN(product)) {
    alert("La opcion seleccionada es incorrecta");
    product = menu1(); 
}

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
switch (product) {
    case 1:
        product = mug;
        document.write("Usted adquirio una Tasa con dibujo y leyenda personalizada");
        switch (result) {
            case 1:
                alert("El pago por transferencia bancaria tiene un descuento del 30%, el precio final del producto es de " + discount(product,30));
                break;
            case 2: 
                alert("El pago por tarjeta de credito no posee descuento, el precio final del producto es de " + product);
                break;
            case 3:
                alert("El pago por MercadoPago tiene un descuento del 20%, el precio final del producto es de " + discount(product,20));
                break;
            default:
                break;
            }
        break;
    
    case 2:
        product = book;
        document.write("Usted adquirio un libro de ilustraciones");
        switch (result) {
            case 1:
                alert("El pago por transferencia bancaria tiene un descuento del 30%, el precio final del producto es de " + discount(product,30));
                break;
        
            case 2:
                alert("El pago por tarjeta de credito no posee descuento, el precio final del producto es de " + product);
                break;
            
            case 3:
                    alert("El pago por MercadoPago tiene un descuento del 20%, el precio final del producto es de " + discount(product,20));
                    break;
        
            default:
                break;
            }
        break; 

    case 3:
        product = draw;
        document.write("Usted adquirio un dibujo personalizado");
        switch (result) {
            case 1:
                alert("El pago por transferencia bancaria tiene un descuento del 30%, el precio final del producto es de " + discount(product,30));
                break;
        
            case 2:
                alert("El pago por tarjeta de credito no posee descuento, el precio final del producto es de " + product);
                break;
            
            case 3:
                    alert("El pago por MercadoPago tiene un descuento del 20%, el precio final del producto es de " + discount(product,20));
                    break;
        
            default:
                break;
            }
    break;
    
    case 4:
        product = pic;
        document.write("Usted adquirio una imagen a eleccion con texto personalizado");
        switch (result) {
            case 1:
                alert("El pago por transferencia bancaria tiene un descuento del 30%, el precio final del producto es de " + discount(product,30));
                break;
            case 2:
                alert("El pago por tarjeta de credito no posee descuento, el precio final del producto es de " + product);
                break;
            case 3:
                    alert("El pago por MercadoPago tiene un descuento del 20%, el precio final del producto es de " + discount(product,20));
                    break;
            default:
                break;
            }
    break;    
}
