export const revisarPresupuesto = ( totalPresupuestos, restante ) => {
    let clase;

    // Comprobar el 25% 
    if( (totalPresupuestos / 4) > restante) {
         clase = 'alert alert-danger';
    } else if( (totalPresupuestos / 2) > restante) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 

export const outsideClic = (id, setVerificarAgregarIngreso) => {
    window.onclick = function(event) {
        if (event.target === document.getElementById(id)) {
            setVerificarAgregarIngreso(false);
        }
      }
}