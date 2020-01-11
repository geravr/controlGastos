import React from 'react';

const Gasto = ({gasto, index, eliminarGasto}) =>  ( 
    <li className="gastos">
        <a
        href="/#"
        rel="noopener noreferrer"
        className="button-delete"
        onClick={() => eliminarGasto(index, gasto.cantidadGasto) }
        >X</a>
        <p>
            {gasto.nombreGasto}
            <span className="gasto">
                $ {gasto.cantidadGasto}
            </span>
        </p>
    </li>
);
 
export default Gasto;