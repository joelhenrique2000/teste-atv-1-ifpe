export enum TemperaturasEscalas {
    KELVIN = "KELVIN",
    FAHRENHEIT = "FAHRENHEIT",
}

export const converterTemperatura = (escala: TemperaturasEscalas, valorEmCelsius: number) => {
    switch (escala) {
        case TemperaturasEscalas.FAHRENHEIT:
            return _toFahrenheit(valorEmCelsius);
        case TemperaturasEscalas.KELVIN:
            return _toKelvin(valorEmCelsius);
        default:
            throw new Error("");
    }
}

const _toKelvin = (valorEmCelsius: number) => {
    return Number((valorEmCelsius + 273.15).toFixed(2));
}

const _toFahrenheit = (valorEmCelsius: number) => {
    return Number((valorEmCelsius * 1.8 + 32).toFixed(2));
}


/*

Deve converter 10 ºC para Fahrenheit
Deve converter 10 ºC para Kelvin
Deve converter 10,5 ºC para Fahrenheit
Deve converter 10,5 ºC para Kelvin
Deve connverter 0 ºC para Fahrenheit
Deve connverter 0 ºC para Kelvin
Deve connverter 0,5 ºC para Fahrenheit
Deve connverter 0,5 ºC para Kelvin
Deve connverter -10 ºC para Fahrenheit
Deve connverter -10 ºC para Kelvin
Deve connverter -10,5 ºC para Fahrenheit
Deve connverter -10,5 ºC para Kelvin

Deve retornar erro quando converter para uma escala errada

Deve retornar erro quando converte uma string para Fahrenheit
Deve retornar erro quando converte uma string para Fahrenheit
Deve retornar erro quando converte uma booleano para Fahrenheit
Deve retornar erro quando converte uma booleano para Fahrenheit

*/