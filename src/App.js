import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import ListaUsuariosTryCatch from './components/ListaUsuariosTryCatch';
import Mensaje from './components/Mensaje';
import TemporizadorRegresivo from './components/TemporizadorRegresivo';
import TemporizadorRoto from './components/TemporizadorRoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mensaje />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Temporizador</h1>
          <TemporizadorRegresivo />
          <TemporizadorRoto />
        </div>
        <ListaUsuarios />
        <br/>
        <ListaUsuariosTryCatch />
        <br/><br/>
      </header>
    </div>
  );
}

export default App;
