import React from 'react';

const Presupuesto = ({presupuesto, index, eliminarPresupuesto}) => {
    return ( 
        <li className="gastos animated fadeIn fast twelve columns">
            Presupuesto Adicional
            <div className="lista-pg">
                <span className="presupuesto">
                    $ {presupuesto.cantidadPresupuesto}
                </span>
                <span
                className="button-delete"
                onClick={() => eliminarPresupuesto(index, presupuesto.cantidadPresupuesto) }
                >X</span>
            </div>
            
    </li>
     );
}
 
export default Presupuesto;