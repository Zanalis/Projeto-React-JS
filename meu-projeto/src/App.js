import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Zanalis'

  return (
    <div className="App">
      <h1> OLÁ MUNDO!!</h1>
      <p> Olá, {{ name }}</p>
    </div>
  );
}

export default App;
