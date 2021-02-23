import {createStore} from 'redux';
import reducer from './reducer';

export const getStore = () => createStore(reducer);
