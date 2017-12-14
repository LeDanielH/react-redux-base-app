import actions from '../config/actions';

const _setTime = time => {
	return {
		type: actions.timer.setTime,
		payload: {
			time: time
		}
	}
};

const setTime = time => {
	return (dispatch) => {
		dispatch(_setTime(time))
	}
};

export default {
	setTime
}
