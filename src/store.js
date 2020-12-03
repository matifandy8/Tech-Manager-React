import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Jeff Bezos",
      foto:
        "https://www.socialsamosa.com/wp-content/uploads/2020/01/jeff-fi.jpg",
    },
    {
      id: 2,
      nombre: "Mark Zuckerberg",
      foto:
        "https://i.insider.com/5d84ce522e22af4c215743c6?width=1136&format=jpeg",
    },
    {
      id: 3,
      nombre: "Linus Torvalds",
      foto:
        "data:image/jpeg;base64,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",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
