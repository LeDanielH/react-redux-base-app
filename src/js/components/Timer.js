import React, { Component } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from '../actions/content';
import '../../sass/project/components/_timer.scss';

class Timer extends Component {

	componentDidMount() {
		this.interval = setInterval(() => {
			this.props.setTime(new Date().toLocaleTimeString())
		}, 1000);

		// now I can manipulate DOM
		this.timeInput.classList.add('input__time');
	}

	// intervals must always be stopped when component unmounted
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	handleOnChange = (event) => {
		return event.target.value
	};

	render() {
		const {time} = this.props;
		return (
			<input ref={input => (this.timeInput = input)} value={time} onChange={this.handleOnChange} />
		)
	}
}

const mapStateToProps = state => {
	return {
		time: state.time
	}
};

const mapDispatchToProps = dispatch => {
	const contentActions = bindActionCreators(actionCreators, dispatch);
	return {
		setTime: contentActions.setTime
	}
};

Timer.propTypes = {
	setTime: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
