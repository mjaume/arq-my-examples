// named funciones
function una_funcion(a, b) {
    return a + b;
}
console.log(una_funcion(2,2));

// funciones como valores
// first-class citizen
const foo = function bar() {
    return function (){
        console.log("Hola");
    }
}
bar = foo();
bar();

function baz(f, nombre){
    f(nombre);
}
baz(function (nombre){
    console.log(`Hola $(nombre)`);
}, "Juan");