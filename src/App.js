import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import PresupuestoInicial from './components/PresupuestoInicial'
import GastosForm from './components/GastosForm'
import ListadoGastos from './components/ListadoGastos'
import ControlPresupuesto from './components/ControlPresupuesto'
import ListadoIngresos from './components/ListadoIngresos';


function App() {


  const [presupuestoInicial, setPresupuestoInicial] = useState(0);
  const [totalPresupuestos, setTotalPresupuestos] = useState(0);
  const [crearPresupuesto, setCrearPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState({});
  const [presupuestos, setPresupuestos] = useState([]);
  const [restante, setRestante] = useState(0);
  const [verificarPresupuestoInicial, setVerificarPresupuestoInicial] = useState(true);
  const [crearGasto, setCrearGasto] = useState(false);
  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);

  useEffect(() => {

    //Agregar gastos al state
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


  useEffect(() => {
    //Agregar presupuestos al state
    if(crearPresupuesto) {
      const listadoPresupuestos = [...presupuestos, presupuesto]
      setPresupuestos(listadoPresupuestos);

      //Sumar presupuesto
      const sumaPresupuestoRestante = restante + presupuesto.cantidadPresupuesto;
      setRestante(sumaPresupuestoRestante);

      //suma al presupuesto total
      const sumaTotal = totalPresupuestos + presupuesto.cantidadPresupuesto;
      setTotalPresupuestos(sumaTotal);

      // Una vez agregado, establecemos false
      setCrearPresupuesto(false);
    }
  }, [crearPresupuesto, presupuestos, presupuesto, restante, totalPresupuestos]);

  
  // Eliminar gasto del state y sumar cantidad de gasto a restante
  const eliminarGasto = (index, cantidadGasto) => {
    const nuevosGastos = [...gastos];
    nuevosGastos.splice(index, 1);
    setGastos(nuevosGastos);
    const sumarGastoEliminado = restante + cantidadGasto;
    setRestante(sumarGastoEliminado);
  }

  // Eliminar presupuesto del state y restar cantidad de presupuesto
  const eliminarPresupuesto = (index, cantidadPresupuesto) =>{
    const nuevosPresupuestos = [...presupuestos];
    nuevosPresupuestos.splice(index, 1);
    setPresupuestos(nuevosPresupuestos);
    const restarPresupuestoEliminado = restante - cantidadPresupuesto;
    setRestante(restarPresupuestoEliminado);
    setTotalPresupuestos(totalPresupuestos - cantidadPresupuesto)

  }

  // Componente condicional
  let componente;
  if (verificarPresupuestoInicial) {
    componente =   <PresupuestoInicial
    setPresupuestoInicial={setPresupuestoInicial}
    setVerificarPresupuestoInicial={setVerificarPresupuestoInicial}
    setRestante={setRestante}
    setTotalPresupuestos={setTotalPresupuestos}
    />
  } else {
    componente = <div className="row">
      <div className="one-half column">
        <ControlPresupuesto
          presupuestoInicial={presupuestoInicial}
          totalPresupuestos={totalPresupuestos}
          restante={restante}
          setCrearPresupuesto={setCrearPresupuesto}
          setPresupuesto={setPresupuesto}
        />
        <ListadoIngresos
        presupuestos={presupuestos}
        eliminarPresupuesto={eliminarPresupuesto}
        />
      </div>
      <div className="one-half column">
        <GastosForm 
        setGasto={setGasto}
        setCrearGasto={setCrearGasto}
        />
        <ListadoGastos
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
