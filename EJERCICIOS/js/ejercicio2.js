export function sumarNumeros() {
    let contador = 1;
    let suma = 0;

    while (contador <= 100) {
        suma += contador;
        contador++;
    }

    console.log("La suma del 1 al 100 es: " + suma);
    alert("La suma del 1 al 100 es: " + suma);
}
