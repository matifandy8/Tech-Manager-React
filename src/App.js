import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./components/Jugadores";
import EquipoSeleccionado from "./components/EquipoSeleccionado";
import "./style.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Tech Manager</h1>
        <Jugadores />
        <EquipoSeleccionado />
      </div>
    </Provider>
  );
}

export default App;
