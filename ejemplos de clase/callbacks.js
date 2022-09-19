//asíncrono
function foo(bar, time){
    console.log('Ini foo...');
    bar(time);
    console.log('Continue foo...');
}

console.log('Ini script...');
foo(function(time){
    setTimeout(() => {
console.log('Vuelta desde bar...')
    }, time);
},5000);
console.log('End script...');
