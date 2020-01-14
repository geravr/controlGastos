import React from 'react';
import Ingreso from './Ingreso';

function ListadoIngresos({ingresos, eliminarIngreso}) {
    return (
      <div className="presupuestos-realizados row">
        {ingresos.map((ingreso, index) => (
          <Ingreso
            key={ingreso.id}
            ingreso={ingreso}
            index={index}
            eliminarIngreso={eliminarIngreso}
          />
        ))}
      </div>
    );
}

export default ListadoIngresos;