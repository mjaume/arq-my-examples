new Promise((resolve, reject) => {
    pasos = {
        paso1: null,
        paso2: null,
        paso3: null
    };
    resolve(pasos);
})
    .then(function (result) {
        result.paso1 = 'OK';
        return result;
    })
    .then(function (result) {
        result.paso2 = 'OK';
        return result;
    })
    .then(function (result) {
        result['paso3'] = 'OK';
        return result;
    })
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    })