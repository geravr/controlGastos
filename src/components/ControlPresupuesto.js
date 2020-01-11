import React, { Fragment } from 'react';
import { revisarPresupuesto } from './../helper'

const ControlPresupuesto = ({presupuesto, restante}) => ( 
    <Fragment>
        <h2>Listado</h2>
        <div className="alert alert-primary">
            Presupuesto Inicial $ {presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
            Restante : $ {restante}
        </div>
    </Fragment>

 );

 
export default ControlPresupuesto;