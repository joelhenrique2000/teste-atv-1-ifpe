import React, { useState } from 'react';
import './App.css';

import { TemperaturasEscalas, converterTemperatura } from './temperatura'

function App() {

  const [escalaTemperatura, setEscalaTemperatura] = useState(TemperaturasEscalas.KELVIN);
  const [temperaturaValor, setTemperaturaValor] = useState(0);

  const handleSubmit = () => {
    let valorConvertido;

    if (escalaTemperatura === TemperaturasEscalas.FAHRENHEIT) {
      valorConvertido = converterTemperatura(TemperaturasEscalas.FAHRENHEIT, temperaturaValor);
      alert(`${valorConvertido} °F`)
    } else {
      valorConvertido = converterTemperatura(TemperaturasEscalas.KELVIN, temperaturaValor);
      alert(`${valorConvertido} K`)
    }
  }

  const onChangeEscalaTemperatura = (event: any) =>
    setEscalaTemperatura(event.target.value);
  
  const onChangeTemperaturaValor = (event: any) =>
    setTemperaturaValor(Number(event.target.value))

  return (
    <div>
      <section>
          <label htmlFor="name">Nome</label>
          <input
            value={temperaturaValor}
            onChange={onChangeTemperaturaValor}
            id="name"
            type="text"
            autoFocus
            autoComplete="given-name"
            name="name"
            required
          />
        </section>
        <section>
            <select name="temperatura" onChange={onChangeEscalaTemperatura} value={escalaTemperatura}>
                <option value={TemperaturasEscalas.KELVIN} selected={escalaTemperatura === TemperaturasEscalas.KELVIN}>Kelvin</option>
                <option value={TemperaturasEscalas.FAHRENHEIT} selected={escalaTemperatura === TemperaturasEscalas.FAHRENHEIT}>Fahrenheit</option>
            </select>
        </section>
        <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default App;
