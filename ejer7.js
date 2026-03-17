export function cargarSuma() {
    const cont = document.getElementById("inputsContainer");
    cont.innerHTML = ""; // Limpia inputs anteriores

    const inp1 = document.createElement("input");
    inp1.id = "inicioInput";
    inp1.type = "number";
    inp1.placeholder = "Inicio";

    const inp2 = document.createElement("input");
    inp2.id = "finInput";
    inp2.type = "number";
    inp2.placeholder = "Fin";

    cont.appendChild(inp1);
    cont.appendChild(inp2);
}

// EJECUTA LA SUMA DE PARES
export function mostrarSuma() {
    const inicio = Number(document.getElementById("inicioInput").value);
    const fin = Number(document.getElementById("finInput").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(inicio) || isNaN(fin)) {
        resultado.textContent = "Ingresa números válidos.";
        return;
    }

    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) suma += i;
    }

    resultado.textContent = "La suma de pares es: " + suma;
}
