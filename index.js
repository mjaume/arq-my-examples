x = "un string";
if (x) {
    console.log(x, "verdadero");
}

for (var i = 0; i < 3; i++) {
    console.log('valor i', i);
}
console.log('valor final i', i);

for (let j = 0; j < 3; j++) {
    console.log('valor j', j);
}
//console.log('valor final j', j);

if (true) {
    let foo = "valor foo";
}
else {
    let foo = "otro valor foo";
}
console.log(foo);