import React from 'react'
import { connect } from 'react-redux'

function Suplentes({suplentes, quitarSuplente}) {
    return (
        <div className="suplentes">
           <h2>Suplentes</h2>
            {
                suplentes.map(j => (
                    <div className="suplentes__info" key={j.id}>
                        <img src={j.foto} alt={j.nombre}/>
                        <button onClick={() => quitarSuplente(j)}>X</button>
                        <p>{j.nombre}</p>
                    </div>

                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    suplentes: state.suplentes

})

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador){
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)
