import { TemperaturasEscalas, converterTemperatura } from './temperatura'

test('Deve converter 10 °C para 50 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, 10);
  expect(temperatura).toBe(50.00);
});

test('Deve converter 10 °C para 283,15 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, 10);
  expect(temperatura).toBe(283.15);
});

test('Deve converter 10,5 °C para 50,9 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, 10.5);
  expect(temperatura).toBe(50.90);
});

test('Deve converter 10,5 °C para 283,15 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, 10.5);
  expect(temperatura).toBe(283.65);
});



test('Deve connverter 0 °C para 32 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, 0);
  expect(temperatura).toBe(32.00);
});

test('Deve connverter 0 °C para 273,15 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, 0);
  expect(temperatura).toBe(273.15);
});

test('Deve connverter 0,5 °C para 32,9 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, 0.5);
  expect(temperatura).toBe(32.90);
});

test('Deve connverter 0,5 °C para 273,65 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, 0.5);
  expect(temperatura).toBe(273.65);
});

test('Deve connverter -10 °C para 14 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, -10);
  expect(temperatura).toBe(14.00);
});

test('Deve connverter -10 °C para 263,15 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, -10);
  expect(temperatura).toBe(263.15);
});

test('Deve connverter -10,5 °C para 13,1 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, -10.5);
  expect(temperatura).toBe(13.10);
});

test('Deve connverter -10,5 °C para 262,65 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, -10.5);
  expect(temperatura).toBe(262.65);
});

test('Deve connverter -1000 °C para -1768 F', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, -1000);
  expect(temperatura).toBe(-1768.00);
});

test('Deve connverter -1000 °C para -726,85 K', () => {
  const temperatura = converterTemperatura(TemperaturasEscalas.KELVIN, -1000);
  expect(temperatura).toBe(-726.85);
});