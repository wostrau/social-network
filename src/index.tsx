import React from 'react';
import ReactDOM from 'react-dom/client';
import {StoreType} from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {store} from './redux/state';

const rerenderEntireTree = (store: StoreType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    )
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    )
};

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);

//serviceWorker.unregister();