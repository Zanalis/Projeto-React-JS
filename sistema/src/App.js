import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
   <Router>
    <ul>
      <li>Home</li>
      <li>Empresa</li>
      <li>Contato</li>
      <li>Novo Projeto</li>  
    </ul>
    <Switch>
      <Route exact path="/"> <Home /> </Route>
      <Route exact path="/empresa"> <Empresa /> </Route>
      <Route exact path="/contato"> <Contato /> </Route>
      <Route exact path="/novoprojeto"> <NovoProjeto /> </Route>

    </Switch>
    <p>Footer</p>
   </Router>
  );
}

export default App;
