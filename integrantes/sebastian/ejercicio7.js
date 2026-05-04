export function cargarSuma(inicio, fin) {
    let suma = 0;

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }

    return suma;
}