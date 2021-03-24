import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/clientes" component={ ClientesCadastrados } />
        <Route path="/cadastro" component={ Cadastro } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
