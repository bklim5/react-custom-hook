import logo from './logo.svg';
import './App.css';
import ToggleDemo from './hooks/use-toggle/ToggleDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToggleDemo />
      </header>
    </div>
  );
}

export default App;
