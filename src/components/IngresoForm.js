import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';
import { outsideClic } from '../helper';

function IngresoForm(props) {

    const {setVerificarAgregarIngreso, setCrearIngreso, setIngreso, error, setError} = props;

    const [cantidadIngreso, setCantidadIngreso] = useState('');

    // Remover el form de ingreso
    const handleClick = () => {
      setVerificarAgregarIngreso(false);
      setError(false);
    };

    // Agregar nuevo ingreso
    const handleSubmit = e => {
      e.preventDefault();

      // Validar cantidad ingresada
      if (cantidadIngreso <= 0 || isNaN(cantidadIngreso) || cantidadIngreso === "") {
        setError(true);
        return;
      }

      //Construir objeto nuevo ingreso
      const ingreso = {
        cantidadIngreso,
        id: shortid.generate()
      };

      // Pasar el ingreso al state principal
      setIngreso(ingreso);
      setCrearIngreso(true);

      // Eliminar alerta de error
      setError(false);

      // Remover el Form
      setVerificarAgregarIngreso(false);

      // Resetear el state (input)
      setCantidadIngreso("");
    };

    // Detectar clic fuera del form y removerlo
    outsideClic('modal', setVerificarAgregarIngreso);

    return (
      <div className="modal" id="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span 
            className="close" 
            onClick={handleClick}
            >×</span>
            <h4>Ingreso adicional</h4>
          </div>
          <div className="modal-body container">
          {error ? <Error mensaje="Ingreso incorrecto" /> : null}
            <form 
            onSubmit={handleSubmit}
            className="formulario-presupuesto"
            >
              <input
                type="number"
                name="agregarIngreso"
                className="u-full-width"
                autoFocus={true}
                placeholder="$200"
                value={cantidadIngreso}
                onChange={e =>
                  setCantidadIngreso(parseInt(e.target.value, 10))
                }
              />
                <input 
                type="submit"
                className="button-primary u-full-width" 
                value="Agregar ingreso" />
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default IngresoForm;