import { combineReducers } from 'redux';
import content from './content';
import form from './form';

const reducers = combineReducers({
	content,
	form
});

export default reducers;
