import actions from '../config/actions';

const _validateForm = formValid => {
	return {
		type: actions.form.validateForm,
		payload: {
			formValid
		}
	}
};

const validateForm = formValid => {
	return (dispatch, getState) => {
		dispatch(_validateForm(formValid))
	}
};

const _setErrorMessage = errorMessage => {
	return {
		type: actions.form.setErrorMessage,
		payload: {
			errorMessage
		}
	}
};

const setErrorMessage = errorMessage => {
	return (dispatch, getState) => {
		dispatch(_setErrorMessage(errorMessage))
	}
};


export default {
	validateForm,
	setErrorMessage
}
