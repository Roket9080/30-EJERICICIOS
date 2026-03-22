// ejercicio25.js
export function rotarVector(vector, k = 1) {
    // vector: array de números, k: posiciones a rotar
    const n = vector.length;
    k = k % n; // para que no se pase
    return vector.slice(-k).concat(vector.slice(0, n - k));
}