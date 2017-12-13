import React, { Component } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from '../actions/content';
import Timer from './Timer';
import '../../sass/project/components/_app.scss';

class App extends Component {

	constructor() {
		super();
	}

	render() {
		const {setGreeting, greeting} = this.props;
		return (
			<div className={'app'}>
				<button onClick={() => setGreeting('Hello asshole')}>
					Change greeting
				</button>
				<p>{greeting}</p>
				<Timer />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		greeting: state.greeting
	}
};

const mapDispatchToProps = dispatch => {
	const contentActions = bindActionCreators(actionCreators, dispatch);
	return {
		setGreeting: contentActions.setGreeting
	}
};

App.propTypes = {
	greeting: PropTypes.string.isRequired,
	setGreeting: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
