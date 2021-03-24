import { LOGIN } from '../actions/loginActions';

const INITIAL_STATE = {
  email: '',
  clientes: [],
}

export default function loginReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN:
      return {...state, email: action.email};
    default:
      return state;
  }
} 