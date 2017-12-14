import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import contentActionCreators from '../actions/content';
import formActionCreators from '../actions/form';
import '../../sass/project/components/_form.scss';

class Form extends Component {


	getErrorMessage = value => {
		const hasNumbers = /\d/.test(value);
		const isTooShort = value.length < 3;

		switch (true) {
			case hasNumbers:
				this.props.setErrorMessage('There is a number in your name.');
				this.props.validateForm(false);
				break;
			case isTooShort:
				this.props.setErrorMessage('Value must be at least 3 characters.');
				this.props.validateForm(false);
				break;
			default:
				this.props.setErrorMessage('');
				this.props.validateForm(true);
		}
	};

	handleInputChange = () => {
		this.getErrorMessage(this.nameInput.value);
	};


	handleSubmit = event => {
		event.preventDefault();
		this.getErrorMessage(this.nameInput.value);
		this.props.setName(`stupid ${this.nameInput.value}`);
		this.nameForm.reset();
		this.props.validateForm(false);
	};

	render() {
		return (
			<form ref={nameForm => this.nameForm = nameForm} onSubmit={this.handleSubmit}>
				<label htmlFor="username">Name</label>
				<input type="text" name="username" onChange={this.handleInputChange} ref={input => this.nameInput = input}/>
				<div>{!this.props.formValid ? <p>{this.props.errorMessage}</p> : ''}</div>
				<button type="submit" disabled={!this.props.formValid} >Submit</button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		errorMessage: state.form.errorMessage,
		formValid: state.form.formValid
	}
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
	validateForm: PropTypes.func.isRequired,
	errorMessage: PropTypes.string.isRequired,
	formValid: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
