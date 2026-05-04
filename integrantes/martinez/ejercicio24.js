export function ejecutarBusquedaBinaria() {
    const vector = document.getElementById("vector24Input").value.split(",").map(Number);
    const target = parseInt(document.getElementById("target24Input").value);
    vector.sort((a,b)=>a-b);

    let left=0, right=vector.length-1;
    let index=-1;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(vector[mid]===target){ index=mid; break; }
        else if(vector[mid]<target) left=mid+1;
        else right=mid-1;
    }
    document.getElementById("resultado").innerHTML = 
        index===-1 ? "No se encontró" : "Encontrado en posición: "+index;
}
