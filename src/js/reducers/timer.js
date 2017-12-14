import actions from '../config/actions';

const initialState = {
	time: new Date().toLocaleTimeString()
};

const timer = (state = initialState, action) => {
	switch (action.type) {

		case actions.timer.setTime:
			return Object.assign({}, state, {
				time: action.payload.time
			});

		default:
			return state
	}
};

export default timer
