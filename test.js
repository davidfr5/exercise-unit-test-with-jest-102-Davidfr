// Importar la función sum del archivo app.js
const { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound	 } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('convert dollar to yen', () => {
    let yen = fromDollarToYen(5);

    expect(yen).toBe(731.3084112149533);// valor con decimales , se puede poner el valor entero
});

test('convert euro to dollar', () => {
    let dollar = fromEuroToDollar(5);

    expect(dollar).toBe(5.35);
});


test('convert yen to pound', () => {
    let pound = fromYenToPound(10);

    expect(pound).toBe(0.055591054313099041);// valor con decimales , se puede poner el valor entero
});