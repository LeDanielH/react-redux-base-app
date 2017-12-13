import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from './Timer';
import Form from './Form';
import '../../sass/project/components/_app.scss';


const App = (props) => {
	return (
		<div className={'app'}>
			<h1>{`Hello ${props.name}!`}</h1>
			<Form />
			<Timer />
		</div>
	)
};

const mapStateToProps = state => {
	return {
		name: state.name
	}
};

const mapDispatchToProps = dispatch => {
	return {}
};

App.propTypes = {name: PropTypes.string.isRequired};

export default connect(mapStateToProps, mapDispatchToProps)(App);
