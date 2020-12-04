import React from 'react'
import Suplentes from './Suplentes'
import Titulares from './Titulares'
import '../equipoSeleccionado.css'

function EquipoSeleccionado() {
    return (
        <div className="equiposeleccionado">
            <div className="equiposeleccionado__titulares">
               <Titulares />
            </div>
            <div className="equiposeleccionado__suplentes">
                <Suplentes />
            </div>
            
            
        </div>
    )
}

export default EquipoSeleccionado
