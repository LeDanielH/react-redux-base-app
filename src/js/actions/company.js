import actions from '../config/actions';
import axios from 'axios';

const _loadDataSuccess = (isLoaded, companyName) => {
	return {
		type: actions.company.loadDataSuccess,
		payload: {
			isLoaded: isLoaded,
			companyName: companyName
		}
	}
};

const _loadDataFail = (isLoaded, error) => {
	return {
		type: actions.company.loadDataFail,
		payload: {
			isLoaded: isLoaded,
			error: error
		}
	}
};

const _setUserName = (userName) => {
	return {
		type: actions.company.setUserName,
		payload: {
			userName: userName
		}
	}
};

const fetchCompany = (userName) => {
	return (dispatch) => {
		axios({
			url: 'https://api.github.com/graphql',
			method: 'post',
			data: {
				query: `{
					user(login: '${userName}') {
						company
					}
				}`,
			},
			headers: {
				Authorization: `bearer 4e6705585bc2da7ff047e678ee51300797601aa6`
			}
		}).then(
			response => {
				dispatch(_setUserName(userName));
				dispatch(_loadDataSuccess(true, response.data.data.user.company))
			},
			error => dispatch(_loadDataFail(true, error))
		)
	}
};

export default {
	fetchCompany
}
