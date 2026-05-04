export function reverseArray(array) {
    if (!array || array.length === 0) {
        document.getElementById("resultado").innerHTML = "Ingresa números válidos.";
        return;
    }

    // Invertir el array
    const invertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertido.push(array[i]);
    }

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = "Vector invertido: " + invertido.join(", ");
    
    // También puedes retornar el array invertido si quieres usarlo en JS
    return invertido;
}