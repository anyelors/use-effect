import './App.css';
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

      </header>
    </div>
  );
}

export default App;
