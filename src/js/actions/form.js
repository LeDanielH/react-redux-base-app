import actions from '../config/actions';

const _validateForm = formValid => {
	return {
		type: actions.form.validateForm,
		payload: {
			formValid: formValid
		}
	}
};

const _setErrorMessage = errorMessage => {
	return {
		type: actions.form.setErrorMessage,
		payload: {
			errorMessage: errorMessage
		}
	}
};

const validateForm = formValid => {
	return (dispatch) => {
		dispatch(_validateForm(formValid))
	}
};

const setErrorMessage = errorMessage => {
	return (dispatch) => {
		dispatch(_setErrorMessage(errorMessage))
	}
};


export default {
	validateForm,
	setErrorMessage
}
