// declarar variables constantes
const costo_preparacion = 10;
const ingredientes_extra = 2; 
const costo = 0.03;
const servicio = 1.5;


// Objeto con los tamanos disponibles y el valor de sus medidas 
const size = {
    "pequena": 10,
    "mediana": 14,
    "grande": 16
}

// funcion para calcular el costo total
function costoTotal(costo_preparacion, costo, costo_ingredientes){
    // * servicio agrega el costo de la propina
    return (costo_preparacion + costo + costo_ingredientes) * servicio;
}

function costo_ingredientes(size){
    var ingredientes = document.getElementsByClassName('ingredientes');

// convertimos  nuestros ingredientes en un arreglo
// y lo guardamos en una var
     var arreglo_ingredientes = Array.from(ingredientes);
    // // filtramos para que tome los elementos checked o seleccionados los cuales seran true
     var ingredientes_seleccionados = arreglo_ingredientes.filter(ingredientes => 
        ingredientes.checked  == true).length

    if (size = 'mediana') {
        return (ingredientes_seleccionados * ingredientes_extra) * 2
    }
    else if (size = 'grande') {
        return (ingredientes_seleccionados * ingredientes_extra) * 4
    }
    else {
        // se asume que es la pequena si no es ninguna de las anteriores
        return (ingredientes_seleccionados * ingredientes_extra) 
    }
};

// enviar formulario, calcular valores con tamanos
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    var tamano = document.getElementById('size').value;
    var size_n = size[tamano];
    // costo de are y le aggregamos de parametro size elegida
    var costo_a = costoArea(size_n)

    var costo_ingredientes1 = costo_ingredientes(tamano);
    costo
    // costo total seria la relacion entre costo de costo_preparacion, costo de are y el  tamano elegido
    var total = costoTotal(costo_preparacion, costo_a, costo_ingredientes1);

    document.getElementById('costo').innerHTML = `
        <h1>
            ${total.toFixed(2)}$
        </h1>
    `;
});

// Funcion para calcular el area del radio de la circunferencia de la pizza.
// PI 3,14
function costoArea(size1) {
    // var area = Math.PI * ((size / 2) **2)
    var area = Math.PI * Math.pow(size1 / 2, 2);
    // nuevo costo es area multiplicado por costo
    var costo1 = area * costo;
    // returnamos el nuevo costo
    return costo1;
}