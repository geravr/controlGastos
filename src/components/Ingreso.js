import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Ingreso = ({ingreso, index, eliminarIngreso}) => {
    return (
      <li className="gastos animated fadeIn fast twelve columns">
        Ingreso adicional
        <div className="lista-pg">
          <span className="presupuesto">
            $ {ingreso.cantidadIngreso} 
          </span>
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="lg"
            color="orangered"
            className="button-delete"
            onClick={() =>
              eliminarIngreso(index, ingreso.cantidadIngreso)
            }
          />
        </div>
      </li>
    );
}
 
export default Ingreso;