import React from 'react';
import Switch from './Switch';
import {withToggle} from "./higher-order-components/withToggle";

/**
 * @return {null}
 */

const ToggleOn = withToggle(({children, on}) => {
	return !on ? null : children;
});

const ToggleOff = withToggle(({children, on}) => {
	return on ? null : children;
});

const ToggleButton = withToggle(({on, toggle, ...props}) => (
	<Switch on={on} onClick={toggle} {...props} />
));

const MyToggle = withToggle(({on, toggle}) => (
	<button onClick={toggle}>{on ? 'on' : 'off'}</button>
));

export {
	ToggleOn,
	ToggleOff,
	ToggleButton,
	MyToggle
};
