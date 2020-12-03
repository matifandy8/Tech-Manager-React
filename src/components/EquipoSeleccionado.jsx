import React from 'react'
import Suplentes from './Suplentes'
import Titulares from './Titulares'

function EquipoSeleccionado() {
    return (
        <div className="equiposeleccionado">
            <Titulares />
            <Suplentes />
        </div>
    )
}

export default EquipoSeleccionado
