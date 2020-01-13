import React, { Fragment, useState } from 'react';
import AgregarPresupuestoForm from './AgregarPresupuestoForm'
import { revisarPresupuesto } from './../helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPlus, faMoneyBillWave ,faCoins } from '@fortawesome/free-solid-svg-icons'

function ControlPresupuesto(props) {

    const {presupuestoInicial, totalPresupuestos, restante, setCrearPresupuesto, setPresupuesto} = props;

    const [verificarAgregarPresupuesto, setVerificarAgregarPresupuesto] = useState(false);
    const [error, setError] = useState(false);



    //Form agregar presupuesto condicional
    let formAgregarPresupuesto;
    if(verificarAgregarPresupuesto) {
        formAgregarPresupuesto = <AgregarPresupuestoForm
        setCrearPresupuesto={setCrearPresupuesto}
        setPresupuesto={setPresupuesto}
        setError={setError}
        error={error}
        setVerificarAgregarPresupuesto={setVerificarAgregarPresupuesto}
        />
    } else {
        formAgregarPresupuesto = null
    }

    return ( 
    <Fragment>
        <h2>Presupuesto</h2>
            <div className="alert alert-primary row">
                <div className="twelve columns">
                   <FontAwesomeIcon 
                   icon={faWallet} 
                   size="lg" 
                   className="iconoPresupuesto" 
                   /> Presupuesto Inicial ${presupuestoInicial}
                
                    <div className="agregar-presupuesto">
                        {formAgregarPresupuesto}
                        <span
                        onClick={() => {setVerificarAgregarPresupuesto(true)}}
                        >
                            <FontAwesomeIcon icon={faMoneyBillWave} color="steelblue" size="lg" />
                            <FontAwesomeIcon icon={faPlus} color="steelblue" size="xs" inverse className="add-money" />
                        </span>
                    </div>
                </div>
        </div>
        <div className={revisarPresupuesto(totalPresupuestos, restante)}>
            <FontAwesomeIcon icon={faCoins} size="lg" className="iconoRestante" /> Saldo Restante: ${restante}
        </div>
    </Fragment>

 );
}
 
export default ControlPresupuesto;