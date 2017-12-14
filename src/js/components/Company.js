import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Company extends Component {

	render() {
		return this.props.isLoaded ?
			this.props.error ?
				'ERROR (you probably need your own token)'
				: this.props.companyName || 'Unknown'
			: '...'
	}
}

const mapStateToProps = state => {
	return {
		isLoaded: state.company.isLoaded,
		companyName: state.company.companyName,
		error: state.company.error
	}
};

const mapDispatchToProps = () => {
	return {}
};

Company.propTypes = {
	isLoaded: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
