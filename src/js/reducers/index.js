import { combineReducers } from 'redux';
import content from './content';
import form from './form';
import timer from './timer';
import company from './company';

const reducers = combineReducers({
	content,
	form,
	timer,
	company
});

export default reducers;
