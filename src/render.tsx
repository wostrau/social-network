import {addPost, RootStateType, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

export let rerenderEntireTree = (state: RootStateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
};