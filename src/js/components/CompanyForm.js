import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../sass/project/components/_company.scss';
import companyActionCreators from "../actions/company";
import Company from './Company';
const CompanyForm = props => {
	let userNameInput;

	const handleSubmit = e => {
		e.preventDefault();
		props.fetchCompany(userNameInput.value)
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					ref={element => userNameInput = element}
					placeholder="enter user name"
				/>
			</form>
			{ props.userName === 'undefined' || props.userName === '' ? ( <Company/>) : null }
		</div>
	)
};

const mapStateToProps = state => {
	return {
		userName: state.company.userName
	}
};

const mapDispatchToProps = dispatch => {
	const companyActions = bindActionCreators(companyActionCreators, dispatch);
	return {
		fetchCompany: companyActions.fetchCompany
	}
};

CompanyForm.propTypes = {
	userName: PropTypes.string.isRequired,
	fetchCompany: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyForm);
