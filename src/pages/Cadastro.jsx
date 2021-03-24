import React from 'react';
import { Link } from 'react-router-dom';
import CadastrarCliente from '../components/CadastrarCliente';

class Cadastro extends React.Component {
  render() { 
    const loginEmail = 'fulano@xablau.com';
    if ( loginEmail !== '') {
      return (
        <>
          <CadastrarCliente />
          <Link to="/clientes">Clientes Cadastrados</Link>
        </>
      );
    }
    return (
      <main>
        <h1>Login não efetuado</h1>
      </main>
    );
  }
}
 
export default Cadastro;