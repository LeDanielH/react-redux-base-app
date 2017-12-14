import actions from '../config/actions';

const initialState = {
	companyName: '',
	isLoaded: false,
	error: '',
	userName: ''
};

const company = (state = initialState, action) => {
	switch (action.type) {

		case actions.company.loadDataSuccess:
			return Object.assign({}, state, {
				isLoaded: action.payload.isLoaded,
				companyName: action.payload.companyName
			});

		case actions.company.loadDataFail:
			return Object.assign({}, state, {
				isLoaded: action.payload.isLoaded,
				error: action.payload.error
			});
		case actions.company.setUserName:
			return Object.assign({}, state, {
				userName: action.payload.userName,
			});

		default:
			return state
	}
};

export default company
