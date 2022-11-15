import React from 'react';
import ReactDOM from 'react-dom/client';
import {StoreType} from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {store} from './redux/redux-store';
import {Provider} from './StoreContext';

const rerenderEntireTree = (store: StoreType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    )
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider value={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
});

//serviceWorker.unregister();