import actions from '../config/actions';

const _setName = name => {
	return {
		type: actions.content.setName,
		payload: {
			name: name
		}
	}
};

const setName = name => {
	return (dispatch) => {
		dispatch(_setName(name))
	}
};

export default {
	setName
}
