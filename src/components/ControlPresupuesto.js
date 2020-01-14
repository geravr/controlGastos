import React, { Fragment, useState } from 'react';
import IngresoForm from './IngresoForm'
import { revisarPresupuesto } from './../helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPlus, faMoneyBillWave ,faCoins } from '@fortawesome/free-solid-svg-icons'

function ControlPresupuesto(props) {

    const {presupuestoInicial, totalIngresos, restante, setCrearIngreso, setIngreso} = props;

    const [verificarAgregarIngreso, setVerificarAgregarIngreso] = useState(false);
    const [error, setError] = useState(false);



    //Form agregar presupuesto condicional
    let formAgregarPresupuesto;
    if (verificarAgregarIngreso) {
      formAgregarPresupuesto = (
        <IngresoForm
          setCrearIngreso={setCrearIngreso}
          setIngreso={setIngreso}
          setError={setError}
          error={error}
          setVerificarAgregarIngreso={setVerificarAgregarIngreso}
        />
      );
    } else {
      formAgregarPresupuesto = null;
    }

    return (
      <Fragment>
        <h2>Presupuesto</h2>
        <div className="alert alert-primary row">
          <div className="twelve columns">
            <FontAwesomeIcon
              icon={faWallet}
              size="lg"
            />
            {` Presupuesto Inicial: ${presupuestoInicial}`}
            <div className="agregar-presupuesto">
              {formAgregarPresupuesto}
              <span
                onClick={() => {
                  setVerificarAgregarIngreso(true);
                }}
              >
                <FontAwesomeIcon
                  icon={faMoneyBillWave}
                  color="steelblue"
                  size="lg"
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  color="steelblue"
                  size="xs"
                  inverse
                  className="add-money"
                />
              </span>
            </div>
          </div>
        </div>
        <div className={revisarPresupuesto(totalIngresos, restante)}>
          <FontAwesomeIcon 
          icon={faCoins} 
          size="lg" 
          className="iconoRestante" />
          {` Saldo Restante: ${restante}`}
        </div>
      </Fragment>
    );
}
 
export default ControlPresupuesto;