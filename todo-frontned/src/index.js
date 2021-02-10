import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './components/App';
import '../src/styles/style.scss';
import store from './store';
import jwtDecode from "jwt-decode";
import setAuthToken from './utils/setAuthToken';
import * as Types from './store/actions/types';
import reportWebVitals from './reportWebVitals';

const token = localStorage.getItem("auth_token");
if (token) {
  let decode = jwtDecode(token)
  setAuthToken(token);
  store.dispatch({
    type: Types.SET_USER,
    payload: {
      user: decode
    }
  })
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
