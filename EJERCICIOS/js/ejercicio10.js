export function procesarTerminos() {
    let terminos = parseInt(document.getElementById("terminosInput").value);

    let listaHTML = generateFibonacci(terminos);

    document.getElementById("resultado").innerHTML = listaHTML;
}

function generateFibonacci(terms) {
    if (isNaN(terms) || terms < 1) {
        return "<li>Error: Ingresa un número válido mayor que 0.</li>";
    }

    let n1 = 0;
    let n2 = 1;
    let contador = 1;
    let lista = "";

    while (contador <= terms) {
        lista += "<li>" + n1 + "</li>";
        let siguiente = n1 + n2;
        n1 = n2;
        n2 = siguiente;
        contador++;
    }

    return lista;
}
