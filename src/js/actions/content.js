import actions from '../config/actions';

const _setGreeting = greeting => {
	return {
		type: actions.content.setGreeting,
		payload: {
			greeting
		}
	}
};

const _setTime = time => {
	return {
		type: actions.content.setTime,
		payload: {
			time
		}
	}
};

const setGreeting = greeting => {
	return (dispatch, getState) => {
		dispatch(_setGreeting(greeting))
	}
};

const setTime = time => {
	return (dispatch, getState) => {
		dispatch(_setTime(time))
	}
};

export default {
	setGreeting,
	setTime
}
