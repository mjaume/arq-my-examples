let x = function(a, b){return a+b}
console.log(x(2,2));

//IIFE (Inmediately Invoked Function Expression)
(function(param){
    console.log("Init..." + param);
})("con el parametro");