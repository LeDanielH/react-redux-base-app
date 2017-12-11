import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from '../actions/content';

import '../../sass/project/components/_app.scss';

class App extends Component {

	constructor() {
		super();
		this.state = {
			ready: true
		};
	}

	render() {
		return (
			<div className={'app'}>
				<button onClick={() => this.props.setGreeting('Hello asshole')}>
					Change greeting
				</button>
				<p>{this.props.greeting}</p>
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
	console.log(contentActions);
	return {
		setGreeting: contentActions.setGreeting
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
