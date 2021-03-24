import React from 'react';
import { Link } from 'react-router-dom';
import ClientList from '../components/ClientList';

class ClientesCadastrados extends React.Component {
  render() {
    const loginEmail = 'fulano@xablau.com';
    if ( loginEmail !== '') {
      return (
        <>
          <ClientList />
          <Link to="/cadastro">Cadastrar cliente</Link>
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
 
export default ClientesCadastrados;