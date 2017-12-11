import actions from '../config/actions';

const _setGreeting = greeting => {
	return {
		type: actions.content.setGreeting,
		payload: {
			greeting
		}
	}
};

const setGreeting = (greeting) => {
	return (dispatch, getState) => {
		dispatch(_setGreeting(greeting))
	}
};

export default {
	setGreeting
}
