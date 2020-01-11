import React, { Fragment, useState } from 'react';
import Error from './Error'

function PresupuestoInicial(props) {

    // props
    const { setPresupuesto, setVerificarPresupuestoInicial, setRestante } = props;

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Guardar el presupuesto en el state
    const presupuestoInicial = e => {
        setCantidad(parseInt(e.target.value, 10));
    }

    // Validar presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validación
        if( cantidad <= 0 || isNaN(cantidad) ) {
            setError(true);
            return;
        }

        // Si pasa la validación
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setVerificarPresupuestoInicial(false);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
            

            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Agrega tu presupuesto inicial"
                onChange={presupuestoInicial}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
            </form>
        </Fragment>
     );
}
 
export default PresupuestoInicial;