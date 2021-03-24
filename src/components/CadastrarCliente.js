import React from 'react';
// import { Redirect } from 'react-router-dom';

class CadastrarCliente extends React.Component {
  render() { 
    return (
      <>
        <h1>Cadastrar Cliente</h1>
          <form>
            <label for="name_input">
              Nome:
              <input id="name_input" type="text" />
            </label>
            <label for="age_input">
              Idade:
              <input id="age_input" type="number" />
            </label>
            <label for="age_input">
              Email:
              <input id="email_input" type="text" />
            </label>
            <button type='submit'>Cadastrar</button>
          </form>
      </>
    );
  }
}
 
export default CadastrarCliente;