import React, { Fragment, useState } from 'react';
import Error from './Error'

function PresupuestoInicial(props) {

    const { setPresupuestoInicial, setRestante, setTotalIngresos, setVerificarPresupuestoInicial } = props;

    const [cantidad, setCantidad] = useState('');
    const [error, setError] = useState(false);

    // Guardar el presupuesto en el state
    const handleChange = e => {
      setCantidad(parseInt(e.target.value, 10));
      setTotalIngresos(parseInt(e.target.value, 10));
    };

    // Validar presupuesto
    const agregarPresupuesto = e => {
      e.preventDefault();

      //Validación
      if (cantidad <= 0 || isNaN(cantidad)) {
        setError(true);
        return;
      }

      // Si pasa la validación
      setError(false);
      setPresupuestoInicial(cantidad);
      setRestante(cantidad);
      setVerificarPresupuestoInicial(false);
    };

    return (
      <Fragment>
        <h2>Coloca tu Presupuesto</h2>

        {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

        <form onSubmit={agregarPresupuesto}>
          <input
            type="number"
            autoFocus={true}
            className="u-full-width"
            placeholder="Agrega tu presupuesto inicial"
            onChange={handleChange}
            value={cantidad}
          />
          <input
            type="submit"
            className="button-primary u-full-width"
            value="Definir Presupuesto"
          />
        </form>
      </Fragment>
    );
}
 
export default PresupuestoInicial;