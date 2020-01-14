import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BorrarDatos = () => {


    return (
      <button
        className="button-delete-all"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        <FontAwesomeIcon icon={faTrash} color="whitesmoke" />
        <span>Borrar todos los datos</span>
      </button>
    );
}
 
export default BorrarDatos;