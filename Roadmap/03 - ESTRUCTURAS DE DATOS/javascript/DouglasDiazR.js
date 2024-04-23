/*
//EStructuras de Datos en JavaScript

//Arrays 
var arrayVacio = [];

var arrayString = ['a','b','c','d'];

var arrayNumeros = [1,2,3,4,5,6];

var arrayMixto = ['string',234,['a',3],{}];

//METODOS EN ARRAYS
var colores = ["azul", "amarillo"];
//.push //agraga un elemento al final del array
colores.push ("rojo");
console.log(colores);

//unshift //agrega elementos al princio del array
colores.unshift("verde");
console.log(colores);

//.pop elimina el último elemento del array 
colores.pop();
console.log(colores);

//.shitf //elimina el primer elemento del array
colores.shift();
console.log(colores);

//splice 
colores.splice(1,1)
console.log(colores);

colores.splice(1,0,'negro');
console.log(colores);


//.include //nos sirve para saber si un elemento específico está en el array. Devuelve true si el elemento está incluido, si no, devuelve false
var jugadores = ["yerson","cova","teto","fioravanti","pipo","rios"];
var incluido = jugadores.includes("cova");
console.log(incluido);

//.every // devuelve true si todos los elementos cumplen con una condición, si no, devuelve false.
var numeros = [1,5,8,6,3,9,8,];
var cumplenCondicion = numeros.every( 
    function (num){
        return num >= 1; 
})
console.log(cumplenCondicion);


//.forEach // nos permite recorrer elemento por elemento dentro del array 
var numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.forEach (
    function numeroPares(num){
        if(num % 2 === 0){
            console.log(num);
        }
})

//map // tambien nos permite recorrer los elementos de un array, con la diferencia que map nos permite modificar los elementos y nos devuelve un nuevo array con las modificaciones 
var masUno = numeros.map(
    function agregarUno(num){
        return num + 1;
    }
)
console.log(masUno);

//filter
var numbers = [1,2,3,4,5,6,7,8,9,0];
var numbersPar = numbers.filter(function(num){
    return num % 2 === 0;
})
console.log(numbersPar);



//indexof // busca un elemento dentro de un arreglo y nos devuelve su indice. Si no lo consigue devuelve -1
//console.log(lenguajes.indexOf("c++"));

//findIndex //
const animales = [
    {
        codigo: 0,
        especie: 'perro'
    },
    {
        codigo: 1,
        especie: 'gato'
    },
];

const index = animales.findIndex((animal) =>{
    return animal.especie === 'perro';
});
console.log(index);

//Objetos 
var deportes = {
    conBalor: ['futbol','basket','rugby','boleibol'],
    sinBalon: ['boxeo','atletismo','surf','natacion']
}

var personas = {
    nombre: 'Lucas',
    edad: 29,
    estudio: {esProgramador: true}
}

//llamar una propiedad dentro de un objeto
console.log(personas.edad);

//Agregar o modificar el valor de una propiedad 
console.log(personas.nombre);
personas.nombre = "Javier";
console.log(personas.nombre);

//Agregar una propiedad al objeto
var autos = {};
console.log(autos);
autos.marcas = ["audi",'ford','chevrolet'];
console.log(autos);

//delete// Elimina propiedades del objeto
console.log(personas);
delete personas.estudio;
console.log(personas);

//Mapas 
let empleado = new Map();

// Agregar elementos al Mapa
empleado.set('nombre', 'Juan');
empleado.set('edad', 30);
empleado.set('departamento', 'Ventas');

// Obtener el tamaño del Mapa
console.log('Tamaño del Mapa:', empleado.size);

// Ejemplo 2: Iterar sobre un Mapa
for (let [clave, valor] of empleado) {
    console.log(`${clave}: ${valor}`);
}

// Eliminar un elemento del Mapa usando el método delete()
empleado.delete('edad');
console.log(empleado); //
*/

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */

var agenda = [];
const operacion = (ope) =>{
    ope = prompt('Indique el número de la operación a realizar: 1.Agregar | 2.Buscar | 3.Eliminar | 4.Actualizar | 5.Finalizar');
    switch(ope){
        case '1':
            agregarContacto();
            break;
        case '2':
            buscarContacto();
            break;
        case '3':
            eliminarContacto();
            break;
        case '4':
            actualizarContacto();
            break;
        case '5':
            finalizar();
            break;
        default:
            alert('Opción incorrecta, Intente de Nuevo.');
            operacion();
            break;
    }
    return ope;
};

var finalizar = () => {
    alert('Operación Finalizada');
};

var mensaje = () =>{
    var msj = prompt('Desea Realizar Otra Operación: 1.Si | 2.No');
    if(msj === '1'){
        operacion();
    }
    else if(msj === '2'){
        finalizar();
    }
    else{
        alert('Operación Incorrecta');
    }
};

var validarTelefono = (numero) =>{
    var regex = /^[0-9]+$/;
    return regex.test(numero);
};

var agregarContacto = () =>{
    contacto = {
        nombre: prompt('Nombre del Contacto: ')
    }

    var telefonoValido = false;
    while (!telefonoValido){

        var numeroTelefono = prompt('Numero de Teléfono: ');
        if(validarTelefono(numeroTelefono) && numeroTelefono.length <= 11){
            contacto.telefono = numeroTelefono;
            telefonoValido = true;
        }
        else{
            alert('Número de Teléfono Incorrecto. Vuelva a Intentar');
        }
    }
    
    agenda.push(contacto);
    alert('Contacto Guardado Con Éxito');
    var continuar = prompt('¿Desea Guardar otro Contacto? 1.Si | 2.No');
    if(continuar == '1'){
        agregarContacto();          
    }
    else if (continuar == '2'){
        mensaje();
    }
    else{
        alert('Opción Incorrecta');
    } 
};

var buscarContacto = () =>{
    nombre = prompt('Nombre del Contacto: ');
    var busqueda = agenda.find(contacto => contacto.nombre === nombre);
    if(busqueda){
        alert(`Contacto encontrado.\nNombre: ${busqueda.nombre}\nTeléfono: ${busqueda.telefono}`);
    }
    else{
        alert('Contacto no Existe');
    }
    mensaje();
};

var eliminarContacto = () =>{
    nombre = prompt('Nombre del Contacto: ');
    var personas = agenda.find(contacto => contacto.nombre === nombre);
    if(personas){
        var index = agenda.indexOf(personas);
        if(index !== -1){
            agenda.splice(index,1);
            alert('Contacto Eliminado con Éxito');
        }
    }
    else{
        alert('Contacto no Existe');
    }
    mensaje();
    
};

var actualizarContacto = () =>{
    nombre = prompt('Nombre del Contacto: ');
    var actualizar = agenda.find(contacto => contacto.nombre === nombre);
    
    if(actualizar){
        var item = prompt(`¿Que Campo Desea Actualizar? \n1.Nombre: ${actualizar.nombre}.\n2.Teléfono: ${actualizar.telefono}.`);
        if(item === '1'){
            actualizar.telefono = prompt('Nuevo Número: ');            
        }
        else if(item === '2'){
            var telefonoValido = false;
            while (!telefonoValido){
                var numeroTelefono = prompt('Numero de Teléfono: ');
                if(validarTelefono(numeroTelefono) && numeroTelefono.length <= 11){
                    actualizar.telefono = numeroTelefono;
                    telefonoValido = true;
                }
                else{
                    alert('Número de Teléfono Incorrecto. Vuelva a Intentar');
                }
            }
        }
        else{
            alert('Opción Incorrecta');
        } 
        alert(`Contacto Actualizado con Éxito:\n1.Nombre: ${actualizar.nombre}\n2.Teléfono: ${actualizar.telefono}`);
        mensaje();  
    }
    else{
        alert('Contacto no Existe');
    }
}
console.log(agenda);
operacion();


