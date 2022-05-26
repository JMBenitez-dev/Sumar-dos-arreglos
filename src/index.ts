let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let posicion: number, indice: number;
//tu solucion esta bien, como comentario aca los 2 for son identicos, esto es ideal para usar un funcion.
for (indice = 0; indice < 6; indice++) {
  posicion = Number(
    prompt(
      `Ingrese el número que desea incorporar en la posición: ${indice}, del arreglo N°1: `
    )
  );
  v1[indice] = posicion;
}

for (indice = 0; indice < 6; indice++) {
  posicion = Number(
    prompt(
      `Ìngrese el número que desea incorporar en la posición: ${indice}, del arreglo N°2:`
    )
  );
  v2[indice] = posicion;
}
// lo ideal para hacer la suma es un for, algo por el estilo: 
//for (i = 0; i < 6; i++) {
//  Suma[i] = v1[i] + v2[i];
//}
let vSuma: number[] = [
  v1[0] + v2[0],
  v1[1] + v2[1],
  v1[2] + v2[2],
  v1[3] + v2[3],
  v1[4] + v2[4],
  v1[5] + v2[5]
];
//
console.log("Valores ingresados del primer arreglo: ", v1);
console.log("Valores ingresados del segundo arreglo: ", v2);
console.log("suma de los arreglo 1 + arreglo 2 : ", vSuma);
