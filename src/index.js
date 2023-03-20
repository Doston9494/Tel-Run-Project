import React from 'react';
import ReactDom from 'react-dom/client'
import App from "./components/App";
import { Provider } from 'react-redux';
import { store } from './store/storeIndex';
import { BrowserRouter as Router} from 'react-router-dom'


export const backEndUrl = 'http://localhost:3333'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
)