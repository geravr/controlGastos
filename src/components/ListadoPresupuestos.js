import React from 'react';
import Presupuesto from './Presupuesto';

function ListadoPresupuestos({presupuestos, eliminarPresupuesto}) {
    return (
        <div className="presupuestos-realizados row">
            {presupuestos.map((presupuesto, index) => (
                <Presupuesto
                key={presupuesto.id}
                presupuesto={presupuesto}
                index={index}
                eliminarPresupuesto={eliminarPresupuesto}
                />
            ))}
        </div>
    );
}

export default ListadoPresupuestos;