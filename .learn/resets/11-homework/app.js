// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollar) => {
    
   return dollar / 1.07 * 156.5;
     
}
const fromEuroToDollar	= (euro) => {
    return euro * 1.07;
}

const fromYenToPound = (yen) => {
    return yen * 156.5 / 0.87 ;
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };

