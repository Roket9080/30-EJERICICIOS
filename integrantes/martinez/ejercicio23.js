export function procesarConvolucion() {
    const x = document.getElementById("vectorXInput").value.split(",").map(Number);
    const y = document.getElementById("vectorYInput").value.split(",").map(Number);

    const resultadoConv = [];
    for(let i=0;i<=x.length-y.length;i++){
        let suma=0;
        for(let j=0;j<y.length;j++){
            suma += x[i+j]*y[j];
        }
        resultadoConv.push(suma);
    }
    document.getElementById("resultado").innerHTML = "Convolución: "+resultadoConv.join(", ");
}