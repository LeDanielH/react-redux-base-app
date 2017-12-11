import actions from '../config/actions';

const initialState = {
	greeting: 'Hello world'
};

const content = (state = initialState, action) => {
	switch (action.type) {

		case actions.content.setGreeting:
			return Object.assign({}, state, {
				greeting: action.payload.greeting
			});

		default:
			return state
	}
};

export default content
