export function reverseArray(array)  {
    const input = document.getElementById("arrayInput14").value;
    const reversed = array.reverse();

    if (!input) {
        document.getElementById("resultado").innerHTML = "Ingresa números válidos.";
        return;
    }

    const array = input.split(",").map(num => num.trim());

    const invertido = [];

    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }

   document.getElementById("resultado").innerHTML = reversed.join(", ");
        `Vector invertido: [ ${invertido.join(", ")} ]`;
}
