export function reverseArray() {
    const input = document.getElementById("arrayInput14").value;

    if (!input) {
        document.getElementById("resultado").innerHTML = "Ingresa números válidos.";
        return;
    }

    const array = input.split(",").map(num => num.trim());

    const invertido = [];

    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }

    document.getElementById("resultado").innerHTML =
        `Vector invertido: [ ${invertido.join(", ")} ]`;
}
