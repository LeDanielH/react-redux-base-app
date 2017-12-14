import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from './Timer';
import Form from './Form';
import CompanyForm from './CompanyForm';
import '../../sass/project/components/_app.scss';

const App = props => {
	return (
		<div className={'app'}>
			<h1>{`Hello ${props.name}!`}</h1>
			<Form />
			<Timer />
			<CompanyForm />
			<div>
				<p>{`${props.userName} works at ${props.companyName}`}</p>
			</div>
		</div>
	)
};

const mapStateToProps = state => {
	return {
		name: state.content.name,
		userName: state.company.userName,
		companyName: state.company.companyName
	}
};

const mapDispatchToProps = () => {
	return {}
};

App.propTypes = {name: PropTypes.string.isRequired};
export default connect(mapStateToProps, mapDispatchToProps)(App);
