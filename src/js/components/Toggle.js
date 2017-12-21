import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ToggleOn, ToggleOff, ToggleButton} from './Toggles';
import {TOGGLE_CONTEXT} from "../constants/toggleContext";

import '../../sass/project/components/_toggle.scss';

class Toggle extends Component {
	static defaultProps = {onToggle: () => {}};

	static On = ToggleOn;
	static Off = ToggleOff;
	static Button = ToggleButton;
	static childContextTypes = {[TOGGLE_CONTEXT]: PropTypes.object.isRequired,};

	state = {
		on: false
	};

	getChildContext() {
		return {
			[TOGGLE_CONTEXT]: {
				on: this.state.on,
				toggle: this.toggle,
			}
		}
	}

	toggle = () => {
		this.setState(
			({on}) => ({ on: !on}),
			() => this.props.onToggle(this.state.on)
		)
	};

	render() {
		return <div>{this.props.children}</div>
	}
}

export default Toggle;
