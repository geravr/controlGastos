import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';
import { outsideClic } from './../helper';

function AgregarPresupuestoForm(props) {

    const {setVerificarAgregarPresupuesto, setCrearPresupuesto, setPresupuesto, error, setError} = props;

    const [cantidadPresupuesto, setCantidadPresupuesto] = useState('');

    //Remueve el form de AgregarPresupuesto
    const handleClick = () => {
        setVerificarAgregarPresupuesto(false);
        setError(false);
    }

    // Agregar presupuesto nuevo
    const handleSubmit = e => {

        e.preventDefault();

        // Validar cantidad ingresada
        if( cantidadPresupuesto <= 0 || isNaN(cantidadPresupuesto) || cantidadPresupuesto === '' ) {
            setError(true);
            return;
        }

        //Construir objeto nuevo presupuesto
        const presupuesto = {
            cantidadPresupuesto,
            id: shortid.generate()
        }

        //Pasar el presupuesto al state principal
        setPresupuesto(presupuesto);
        setCrearPresupuesto(true);

        // Eliminar alerta
        setError(false);

        // Remover el Form
        setVerificarAgregarPresupuesto(false);

        // Resetear state 
        setCantidadPresupuesto('');
    }

    outsideClic('modal', setVerificarAgregarPresupuesto);

    return (
      <div className="modal" id="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span 
            className="close" 
            onClick={handleClick}
            >×</span>
            <h4>Presupuesto adicional</h4>
          </div>
          <div className="modal-body container">
          {error ? <Error mensaje="Presupuesto incorrecto" /> : null}
            <form 
            onSubmit={handleSubmit}
            className="formulario-presupuesto"
            >
              <input
                type="number"
                name="agregarPresupuesto"
                className="u-full-width"
                autoFocus={true}
                placeholder="$200"
                value={cantidadPresupuesto}
                onChange={e =>
                  setCantidadPresupuesto(parseInt(e.target.value, 10))
                }
              />
                <input 
                type="submit"
                className="button-primary u-full-width" 
                value="Agregar presupuesto" />
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default AgregarPresupuestoForm;