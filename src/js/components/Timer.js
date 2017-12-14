import React, { Component } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import timerActionCreators from '../actions/timer';
import '../../sass/project/components/_timer.scss';

class Timer extends Component {

	componentDidMount() {
		this.interval = setInterval(() => {
			this.props.setTime(new Date().toLocaleTimeString())
		}, 1000);

		// now I can manipulate DOM
		this.timeInput.classList.add('input__time');
	}

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
		time: state.timer.time
	}
};

const mapDispatchToProps = dispatch => {
	const timerActions = bindActionCreators(timerActionCreators, dispatch);
	return {
		setTime: timerActions.setTime
	}
};

Timer.propTypes = {
	setTime: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
