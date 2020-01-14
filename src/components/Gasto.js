import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Gasto = ({ gasto, index, eliminarGasto }) => (
  <li className="gastos animated fadeIn fast twelve columns">
    {gasto.nombreGasto}
    <div className="lista-pg">
      <span className="gasto">$ {gasto.cantidadGasto}</span>
      <FontAwesomeIcon
        icon={faTrashAlt}
        size="lg"
        color="orangered"
        className="button-delete"
        onClick={() => eliminarGasto(index, gasto.cantidadGasto)}
      />
    </div>
  </li>
);
 
export default Gasto;