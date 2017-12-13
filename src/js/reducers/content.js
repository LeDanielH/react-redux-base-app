import actions from '../config/actions';

const initialState = {
	greeting: 'Hello world',
	time: new Date().toLocaleTimeString()
};

const content = (state = initialState, action) => {
	switch (action.type) {

		case actions.content.setGreeting:
			return Object.assign({}, state, {
				greeting: action.payload.greeting
			});

		case actions.content.setTime:
			return Object.assign({}, state, {
				time: action.payload.time
			});

		default:
			return state
	}
};

export default content
