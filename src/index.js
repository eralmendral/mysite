import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './styles/index.scss';

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(() => { render() })
  })
}

render();
