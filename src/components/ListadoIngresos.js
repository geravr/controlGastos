import React from 'react';
import Ingreso from './Ingreso';

function ListadoIngresos({presupuestos, eliminarPresupuesto}) {
    return (
        <div className="presupuestos-realizados row">
            {presupuestos.map((presupuesto, index) => (
                <Ingreso
                key={presupuesto.id}
                presupuesto={presupuesto}
                index={index}
                eliminarPresupuesto={eliminarPresupuesto}
                />
            ))}
        </div>
    );
}

export default ListadoIngresos;