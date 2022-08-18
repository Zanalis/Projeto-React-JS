import logo from './logo.svg';
import './App.css';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {


  return (
    <div className="App">
      <Pessoa 
        nome      = "Zanalis"
        idade     = "26"
        profissao = "Programador"
        foto      ="https://via.placeholder.com/150"
        />
        <List />
    </div>
  );
}

export default App;
