import { combineReducers } from 'redux';
import content from './content';
import form from './form';
import timer from './timer';

const reducers = combineReducers({
	content,
	form,
	timer
});

export default reducers;
