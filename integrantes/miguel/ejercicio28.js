export function encontrarPrimos(limite) {
    if (isNaN(limite) || limite < 2) return [];

    const esPrimo = new Array(limite + 1).fill(true);
    esPrimo[0] = esPrimo[1] = false;

    for (let i = 2; i * i <= limite; i++) {
        if (esPrimo[i]) {
            for (let j = i * i; j <= limite; j += i) {
                esPrimo[j] = false;
            }
        }
    }

    const resultado = [];
    for (let k = 2; k <= limite; k++) {
        if (esPrimo[k]) resultado.push(k);
    }

    return resultado; // <--- importante: devuelve array
}

function sieveOfEratosthenes(limit) {
    let esPrimo = new Array(limit + 1).fill(true);
    esPrimo[0] = false;
    esPrimo[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (esPrimo[i]) {
            for (let j = i * i; j <= limit; j += i) {
                esPrimo[j] = false;
            }
        }
    }

    let resultado = [];
    for (let k = 2; k <= limit; k++) {
        if (esPrimo[k]) resultado.push(k);
    }

    return resultado;
}