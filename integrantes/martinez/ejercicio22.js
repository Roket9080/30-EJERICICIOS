function dotProduct(vectorA, vectorB) {
    let suma = 0;
    for (let i = 0; i < vectorA.length; i++) {
        suma += Number(vectorA[i]) * Number(vectorB[i]);
    }
    return suma;
}

function ensureOutput(id = "resultado22") {
    let out = document.getElementById(id);
    if (!out) {
        out = document.createElement("p");
        out.id = id;
        const cont = document.getElementById("resultado") || document.body;
        cont.appendChild(out);
    }
    return out;
}

export function calcularProductoPunto() {
    const vectorA = document.getElementById("vectorAInput").value.split(",").map(Number);
    const vectorB = document.getElementById("vectorBInput").value.split(",").map(Number);
    if(vectorA.length !== vectorB.length){
        document.getElementById("resultado").innerHTML = "Los vectores deben tener la misma longitud";
        return;
    }
    let producto = 0;
    for(let i=0;i<vectorA.length;i++) producto += vectorA[i]*vectorB[i];
    document.getElementById("resultado").innerHTML = "Producto punto: " + producto;
}
