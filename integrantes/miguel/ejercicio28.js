export function encontrarPrimos() {
    const limit = Number(document.getElementById("primeLimitInput").value);
    let container = document.getElementById("resultadoPrimos");

    if (!container) {
        container = document.createElement("div");
        container.id = "resultadoPrimos";
        document.getElementById("resultado").appendChild(container);
    }

    if (isNaN(limit) || limit < 2) {
        container.innerHTML = "Error: ingresa un número mayor o igual a 2.";
        return;
    }

    const primes = sieveOfEratosthenes(limit);
    container.innerHTML = "Números primos: " + primes.join(", ");
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