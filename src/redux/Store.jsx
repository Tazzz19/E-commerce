import React from 'react'
import { createStore } from 'redux';
import rootReducers from './reducers';

const store = createStore(rootReducers);
    <div>Store</div>
export default store;