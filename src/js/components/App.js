import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from './Timer';
import Form from './Form';
import CompanyForm from './CompanyForm';
import '../../sass/project/components/_app.scss';
import Toggle from './Toggle';
import {MyToggle} from "./Toggles";

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
			<Toggle onToggle={on => console.log('toggle', on)} >
				<Toggle.Button />
				<Toggle.On>The button is On</Toggle.On>
				<Toggle.Off>The button is Off</Toggle.Off>
				<hr/>
				<MyToggle />
			</Toggle>
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
