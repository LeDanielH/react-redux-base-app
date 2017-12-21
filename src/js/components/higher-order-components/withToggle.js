import React from 'react';
import PropTypes from 'prop-types';
import {TOGGLE_CONTEXT} from "../../constants/toggleContext";

export function withToggle(Component) {
	function Wrapper(props, context) {
		const toggleContext = context[TOGGLE_CONTEXT];
		return (
			<Component {...toggleContext} {...props} />
		)
	}
	Wrapper.contextTypes = {
		[TOGGLE_CONTEXT]: PropTypes.object.isRequired,
	};
	return Wrapper
}
