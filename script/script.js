let valorcompra = 0;
let precio = 3000000;
let descuento = 0;
let totalpagar = 0;
let cantidad = 0;
let Mensaje = 0;

cantidad= Number(prompt('ingrese la cantidad de computadores'));
valorcompra = cantidad *precio;
console.log(valorcompra)
document.getElementById('Valorcompra').value =valorcompra;


if(valorcompra < 6000000){
    descuento = valorcompra * 0.2;
    console.log(descuento);
    
} else{
    if (valorcompra >= 7000000 && valorcompra < 20000000){
        descuento = valorcompra * 0.05;
        console.log(descuento);
    } else{
        descuento = 0;
        console.log(descuento);
    }
}
document.getElementById('Descuento').value =descuento;

totalpagar = valorcompra - descuento;
document.getElementById('Totalpagar').value = totalpagar;

if ( descuento == 0){
    Mensaje = "No hay descuento para esta compra";
    document.getElementById('mensaje').innerHTML = Mensaje;
}
















