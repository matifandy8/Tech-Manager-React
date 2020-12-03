import React from 'react'
import { connect } from 'react-redux'

function Titulares({titulares, quitarTitular}) {
    return (
        <div className="titulares">
           <h2>Titulares</h2>
            {
                titulares.map(j => (
                    <div className="titulares__info" key={j.id}>
                        <img src={j.foto} alt={j.nombre}/>
                        <button onClick={() => quitarTitular(j)}>X</button>
                        <p>{j.nombre}</p>
                    </div>

                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    titulares: state.titulares

})

const mapDispatchToProps = dispatch => ({
   quitarTitular(jugador){
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)
