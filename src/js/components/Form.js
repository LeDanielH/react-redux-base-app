import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import contentActionCreators from '../actions/content';
import formActionCreators from '../actions/form';
import '../../sass/project/components/_form.scss';

class Form extends Component {

	getErrorMessage = value => {
		if (value.length < 2) {'Value must be at least 3 characters.'}
		if (value.match('\d')) {return 'Value contains numbers.'}
	};

	handleSubmit = event => {
		event.preventDefault();
		const {value} = this.nameInput;
		const error = this.getErrorMessage(value);
		error ? alert(`error ${error}`) : this.props.setName(`stupid ${value}`)
	};

	handleChange = event => {
		const {value} = event.target;

	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="username">Name</label>
				<input type="text" name="username" ref={input => this.nameInput = input}/>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {}
};

const mapDispatchToProps = dispatch => {
	const contentActions = bindActionCreators(contentActionCreators, dispatch);
	const formActions = bindActionCreators(formActionCreators, dispatch);
	return {
		setName: contentActions.setName,
		validateForm: formActions.validateForm,
		setErrorMessage: formActions.setErrorMessage
	}
};

Form.propTypes = {
	setName: PropTypes.func.isRequired,
	validateForm: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
