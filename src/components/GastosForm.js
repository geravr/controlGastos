import React, { useState } from 'react';
import Error from './Error'
import shortid from 'shortid'

function GastosForm (props) {

    const { setGasto, setCrearGasto } = props;

    const [nombreGasto, setNombrerGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState('');
    const [error, setError] = useState(false);


    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if( cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === '' ) {
            setError(true);
            return;
        }


        // Construir objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        // Pasar gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // Eliminar alerta
        setError(false);

        // Resetar el form
        setNombrerGasto('');
        setCantidadGasto('');

    }

    return (
        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Comida"
                onChange={e => setNombrerGasto(e.target.value)}
                value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 250"
                onChange={e => setCantidadGasto(parseInt(e.target.value, 10))}
                value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
     );
}
 
export default GastosForm;