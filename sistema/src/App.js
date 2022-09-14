import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/novoprojeto">Novo Projeto</Link>
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/empresa"><Empresa/></Route>
        <Route exact path="/contato"><Contato /></Route>
        <Route exact path="/novoprojeto"><NovoProjeto /></Route>
      </Switch>
    </Router>
    
  )
}

export default App;
