import React from 'react';
import Gasto from './Gasto'

function Listado({gastos, eliminarGasto}) {
    return ( 
        <div className="gastos-realizados">
            {gastos.map((gasto, index) => (
                <Gasto
                key={gasto.id}
                gasto={gasto}
                index={index}
                eliminarGasto={eliminarGasto}
                />
            ))}
        </div>
     );
}
 
export default Listado;