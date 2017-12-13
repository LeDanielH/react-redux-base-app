import actions from '../config/actions';

const _setName = name => {
	return {
		type: actions.content.setName,
		payload: {
			name
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

const setName = name => {
	return (dispatch, getState) => {
		dispatch(_setName(name))
	}
};

const setTime = time => {
	return (dispatch, getState) => {
		dispatch(_setTime(time))
	}
};

export default {
	setName,
	setTime
}
