import logo from './logo.svg';
import './App.css';
import ToggleDemo from './hooks/use-toggle/ToggleDemo';
import OnlineStatusDemo from './hooks/use-online/OnlineStatusDemo';
import LocalStorageDemo from './hooks/use-local-storage/LocalStorageDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ToggleDemo /> */}
        {/* <OnlineStatusDemo /> */}
        <LocalStorageDemo />
      </header>
    </div>
  );
}

export default App;
