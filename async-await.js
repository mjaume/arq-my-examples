function invocar_api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Vuelvo de invocar API...")
        }, 3000)
    })
}

async function iniciar() {
    console.log("A");
    console.log("B");
    console.log("C");
    await invocar_api().then(response => console.log(response));
    console.log("D");
    console.log("E");
} iniciar();

console.log('Continúa la ejecución...');
