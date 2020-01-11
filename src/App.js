import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import PresupuestoInicial from './components/PresupuestoInicial'
import GastosForm from './components/GastosForm'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {


  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [verificarPresupuestoInicial, setVerificarPresupuestoInicial] = useState(true);
  const [crearGasto, setCrearGasto] = useState(false);
  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    if(crearGasto) {
      const listadoGastos = [...gastos, gasto]
      setGastos(listadoGastos);

      // Restar presupuesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      setRestante(presupuestoRestante);

      // Una vez agregado, establecemos false
      setCrearGasto(false);
    }
  }, [crearGasto, gastos, gasto, restante]);


  
  //Eliminar gasto del state
  const eliminarGasto = (index, cantidadGasto) => {
    const nuevosGastos = [...gastos];
    nuevosGastos.splice(index, 1);
    setGastos(nuevosGastos);
    const sumarGastoEliminado = restante + cantidadGasto;
    setRestante(sumarGastoEliminado);
  }

  // Componente condicional
  let componente;
  if (verificarPresupuestoInicial) {
    componente = 
    <PresupuestoInicial
    setPresupuesto={setPresupuesto}
    setVerificarPresupuestoInicial={setVerificarPresupuestoInicial}
    setRestante={setRestante}
    />
  } else {
    componente = <div className="row">
      <div className="one-half column">
        <GastosForm 
        setGasto={setGasto}
        setCrearGasto={setCrearGasto}
        />
      </div>
      <div className="one-half column">
        <ControlPresupuesto
          presupuesto={presupuesto}
          restante={restante}
        />
        <Listado
        eliminarGasto={eliminarGasto}
        gastos={gastos}
        />
      </div>
   </div>
  }



  return (
      <Fragment>
        <Header />
        <div className="container contenido-principal contenido">
          {componente}
        </div>
      </Fragment>
  );
}

export default App;
