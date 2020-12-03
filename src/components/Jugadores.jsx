import React from 'react'
import { connect } from 'react-redux'

function Jugadores({jugadores, agregarTitular, agregarSuplente}) {
    return (
        <div className="jugadores">
              <h2>Jugadores</h2>
            <div className="jugadores__contenedor">
            {
                jugadores.map(j => (
                  
               <div className="jugadores__info" key={j.id}>
                 <img src={j.foto} alt={j.nombre}/>
                <h3>{j.nombre}</h3>
                 <button onClick={() => agregarTitular(j)}>Titular</button>
                 <button onClick={() => agregarSuplente(j)} >Suplente</button>
               </div>
                ))
            }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    jugadores: state.jugadores

})

const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Jugadores)
