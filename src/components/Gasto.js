import React from 'react';

const Gasto = ({gasto, index, eliminarGasto}) =>  ( 
    <li className="gastos animated fadeIn fast twelve columns">
        {gasto.nombreGasto}
        <div className="lista-pg">
            <span className="gasto">
                $ {gasto.cantidadGasto}
            </span>
            <span
            className="button-delete"
            onClick={() => eliminarGasto(index, gasto.cantidadGasto) }
            >X</span>
        </div>
    </li>
);
 
export default Gasto;