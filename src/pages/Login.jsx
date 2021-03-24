import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginEmail } from '../redux/actions/loginActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      disabledBtn: true,
      redirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }), () => {
      this.verifyInputs();
    });
  }

  validateEmail(email) {
    const re = new RegExp([
      '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)',
      '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])',
      '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    ].join(''));
    return re.test(String(email).toLowerCase());
  }

  verifyInputs() {
    const { email, senha } = this.state;
    const passwordLenght = 6;
    if (this.validateEmail(email) && senha.length >= passwordLenght) {
      this.setState({ disabledBtn: false });
    } else {
      this.setState({ disabledBtn: true });
    }
  }

  handleLogin() {
    const { efetuarLogin } = this.props;
    const { email } = this.state;
    efetuarLogin(email);
    this.setState({ redirect: true})
  }

  renderLogin() {
    const { email, senha, disabledBtn } = this.state;
    return (
      <main>
        <h1>Login</h1>
        <section>
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
          />
          <button
            type='button'
            disabled={ disabledBtn }
            onClick={ this.handleLogin }
          >
            Entrar
          </button>
        </section>
      </main>
    );
  }

  render() { 
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/clientes" />
    }
    return this.renderLogin();
  }
}

Login.propTypes = {
  efetuarLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  efetuarLogin: (email) => dispatch(loginEmail(email)),
})
 
export default connect(null, mapDispatchToProps)(Login);