import actions from '../config/actions';

const initialState = {
	name: 'Asshole',
	time: new Date().toLocaleTimeString()
};

const content = (state = initialState, action) => {
	switch (action.type) {

		case actions.content.setName:
			return Object.assign({}, state, {
				name: action.payload.name
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
