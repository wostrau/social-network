import React from 'react';
import {state} from './redux/state';
import {rerenderEntireTree} from './render';

rerenderEntireTree(state);
/*subscribe(rerenderEntireTree);*/
