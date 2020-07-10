function arreglo1(array){
    let total1=[];
    let propina1;
    for(let i=0; i < array.length; i++){
        total1.push(array[i])
        propina1 = propina(array[i])
        total1.push(propina1);
    }
    return total1;
}

function propina(factura){
    let total;
    if(factura < 50){
        return total = factura * 0.2;
     }
    if(factura >= 50  && factura <= 200 ){
        return total = factura * 0.15
    }
    return total = factura * 0.10;   
} 

console.log(arreglo1([124,48,268]))
