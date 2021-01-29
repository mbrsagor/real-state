import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './components/App';
import '../src/styles/style.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
