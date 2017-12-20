import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal, ThemeProvider } from 'styled-components';

const mainTheme = {
    deletec: '#FF584F',
    editc: '#FCB13E',
    addc: '#D2DA44',
    mainc: '#00BBBF'
};

// Global Styles
injectGlobal`
    body {
        font-family: 'Quicksand', sans-serif;
        p {
        line-height: 1.3em;
        text-align: justify;
        }
    }    
`;


ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();


