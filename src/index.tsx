import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

//стремная конструкция со store!!! нужно перепроверить...
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
