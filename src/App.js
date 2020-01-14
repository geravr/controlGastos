import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import PresupuestoInicial from './components/PresupuestoInicial';
import GastosForm from './components/GastosForm';
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';
import ListadoIngresos from './components/ListadoIngresos';
import BorrarDatos from './components/BorrarDatos';


function App() {

  /************   STATE'S   ************/

  const [totalIngresos, setTotalIngresos] = useState(0);
  const [crearIngreso, setCrearIngreso] = useState(false);
  const [ingreso, setIngreso] = useState({});
  const [restante, setRestante] = useState(0);
  const [verificarPresupuestoInicial, setVerificarPresupuestoInicial] = useState(true);
  const [crearGasto, setCrearGasto] = useState(false);
  const [gasto, setGasto] = useState({});


  /************   PRESUPUESTO INICIAL - Local Storage - State ************/

  // Cargar presupuestoInicial a localstorage y establecer localstorage como state inicial
  let presupuestoInicialLocalStorage = JSON.parse(localStorage.getItem('presupuestoInicial'));
  if(presupuestoInicialLocalStorage === null) {
    presupuestoInicialLocalStorage = 0;
  }

  const [presupuestoInicial, setPresupuestoInicial] = useState(presupuestoInicialLocalStorage);

  // Se guarda el valor del state presupuestoInicial en localstorage
  useEffect(
    () => {
      let presupuestoInicialLocalStorage = JSON.parse(localStorage.getItem('presupuestoInicial'));
      if(!isNaN(presupuestoInicialLocalStorage)) {
        localStorage.setItem('presupuestoInicial', JSON.stringify(presupuestoInicial));
      }
    }, [presupuestoInicial]);

  // Si local storage tiene presupuesto mayor que 0, verificarPresupuestoInicial se establece a false
  useEffect(
    () => {
      let presupuestoInicialLocalStorage = JSON.parse(localStorage.getItem('presupuestoInicial'));
      if(presupuestoInicialLocalStorage > 0) {
        setVerificarPresupuestoInicial(false);
      }
    }, [setVerificarPresupuestoInicial]);

  // Establecer valor inicial de restante y totalIngresos del local storage desde presupuesto inicial
  useEffect(() => {
    if (presupuestoInicial) {
      setRestante(presupuestoInicial);
      setTotalIngresos(presupuestoInicial);
    }
  }, [presupuestoInicial]);


  /************   INGRESOS - Local Storage - State  ************/

  // cargar ingresos a localstorage y establecer localstorage como state inicial
  let ingresosIniciales = JSON.parse(localStorage.getItem('ingresos'));
  if(!ingresosIniciales) {
    ingresosIniciales = [];
  } 
  
  const [ingresos, setIngresos] = useState(ingresosIniciales);

  // Se guarda el valor del state ingresos en localstorage
  useEffect(
    () => {
      let ingresosIniciales = JSON.parse(localStorage.getItem('ingresos'));
      if(ingresosIniciales) {
        localStorage.setItem('ingresos', JSON.stringify(ingresos));
      } else {
        localStorage.setItem('ingresos', JSON.stringify([]));
      }
    }, [ingresos]);

  // Establecer valor inicial de restante y totalIngresos del local storage desde presupuestoInicial e ingresos
  useEffect(() => {
    if (ingresos) {

      let resultadoIngresos = 0; 
      ingresos.forEach(cantidad => {
        resultadoIngresos += cantidad.cantidadIngreso;
      });

      setRestante(presupuestoInicial + resultadoIngresos);
      setTotalIngresos(presupuestoInicial + resultadoIngresos);  
    }
  }, [presupuestoInicial, ingresos]);
  
  //Agregar ingresos al state
  useEffect(() => {
    if(crearIngreso) {
      const listadoIngresos = [...ingresos, ingreso]
      setIngresos(listadoIngresos);

      //Sumar ingreso
      const sumaIngresoRestante = restante + ingreso.cantidadIngreso;
      setRestante(sumaIngresoRestante);

      //suma al ingreso total
      const sumaTotal = totalIngresos + ingreso.cantidadIngreso;
      setTotalIngresos(sumaTotal);

      // Una vez agregado, establecemos false
      setCrearIngreso(false);
    }
  }, [crearIngreso, ingresos, ingreso, restante, totalIngresos]);
  
  // Eliminar ingreso del state y restar cantidad de ingreso
  const eliminarIngreso = (index, cantidadIngreso) => {
    const nuevosIngresos = [...ingresos];
    nuevosIngresos.splice(index, 1);
    setIngresos(nuevosIngresos);
    const restarIngresoEliminado = restante - cantidadIngreso;
    setRestante(restarIngresoEliminado);
    setTotalIngresos(totalIngresos - cantidadIngreso);
  }


  /************   GASTOS - Local Storage - State   ************/

  // Cargar gastos a localstorage y establecer localstorage como state inicial
  let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
  if(!gastosIniciales) {
    gastosIniciales = [];
  } 
  
  const [gastos, setGastos] = useState(gastosIniciales);

  //Se guarda el valor del state gastos en localstorage
  useEffect(
    () => {
      let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
      if(gastosIniciales) {
        localStorage.setItem('gastos', JSON.stringify(gastos));
      } else {
        localStorage.setItem('gastos', JSON.stringify([]));
      }
    }, [gastos]);

    //Restar gastos de Local Storage a saldo restante
    useEffect(() => {
      if (gastos) {
  
        let resultadoGastos = 0; 
        gastos.forEach(cantidad => {
          resultadoGastos += cantidad.cantidadGasto;
        });
        setRestante(totalIngresos - resultadoGastos);
      }
    }, [gastos, totalIngresos]);

  // Agregar gastos al state
  useEffect(() => {
    if(crearGasto) {
      const listadoGastos = [...gastos, gasto]
      setGastos(listadoGastos);

      // Restar gasto al saldo
      const presupuestoRestante = restante - gasto.cantidadGasto;
      setRestante(presupuestoRestante);

      // Una vez agregado, establecemos false
      setCrearGasto(false);
    }
  }, [crearGasto, gastos, gasto, restante]);

  // Eliminar gasto del state y sumar cantidad de gasto a restante
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
    componente =   <PresupuestoInicial
    setPresupuestoInicial={setPresupuestoInicial}
    setVerificarPresupuestoInicial={setVerificarPresupuestoInicial}
    setRestante={setRestante}
    setTotalIngresos={setTotalIngresos}
    />
  } else {
    componente = <div className="row">
      <div className="one-half column">
        <ControlPresupuesto
          presupuestoInicial={presupuestoInicial}
          totalIngresos={totalIngresos}
          restante={restante}
          setCrearIngreso={setCrearIngreso}
          setIngreso={setIngreso}
        />
        <BorrarDatos />
        <ListadoIngresos
        ingresos={ingresos}
        eliminarIngreso={eliminarIngreso}
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
