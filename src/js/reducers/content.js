import actions from '../config/actions';

const initialState = {
	name: 'Asshole'
};

const content = (state = initialState, action) => {
	switch (action.type) {

		case actions.content.setName:
			return Object.assign({}, state, {
				name: action.payload.name
			});

		default:
			return state
	}
};

export default content
