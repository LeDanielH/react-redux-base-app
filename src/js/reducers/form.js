import actions from '../config/actions';

const initialState = {
	formValid: false,
	errorMessage: ''
};

const form = (state = initialState, action) => {
	switch (action.type) {

		case actions.form.validateForm:
			return Object.assign({}, state, {
				formValid: action.payload.formValid
			});

		case actions.form.setErrorMessage:
			return Object.assign({}, state, {
				errorMessage: action.payload.errorMessage
			});

		default:
			return state
	}
};

export default form
