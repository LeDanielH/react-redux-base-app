import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actionCreators from '../actions/content';
import '../../sass/project/components/_form.scss';

class Form extends Component {

	handleSubmit = event => {
		event.preventDefault();
		this.props.setName(`stupid ${this.nameinput.value}`)
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="username">Name</label>
				<input type="text" name="username" ref={input => this.nameinput = input}/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => {
	const contentActions = bindActionCreators(actionCreators, dispatch);
	return {
		setName: contentActions.setName
	}
};

Form.propTypes = {
	setName: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
