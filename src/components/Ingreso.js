import React from 'react';

const Ingreso = ({presupuesto, index, eliminarPresupuesto}) => {
    return ( 
        <li className="gastos animated fadeIn fast twelve columns">
            Ingreso adicional
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
 
export default Ingreso;