import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider } from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index.js'
import theme from './theme/typography.js'
import { ThemeProvider } from '@mui/material/styles';


const store=createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
        <ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />

    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
