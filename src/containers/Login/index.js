import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginComponent from '../../components/Login';
import { loginUser } from '../../actions/Login';


class LoginView extends Component {
    state = {
        email: '',
        password: '',
        errors: {},
        redirect: false
    }

    componentDidUpdate() {
        const { history, isLoggedin } = this.props;
        if(isLoggedin){
            history.push('/dashboard')
        }
    }



    handleChange = (e) => {
        this.setState({ errors: {} });
        const { target } = e;
        this.setState({ [target.name]: target.value })
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        const { loginUser: loginAction } = this.props;
        if (this.validate(email, password)) {
            loginAction({ email, password })
        }
    }

    validate = (email, password) => {
        const { errors: errorinfo } = this.state;
        let errors = errorinfo;
        if (email === '') {
            errors = { ...errors, email: 'Email is required!' }
        }
        if (!(/\S+@\S+\.\S+/.test(email))) {
            errors = { ...errors, email: 'Email is invalid!' }
        }

        if (password === '') {
            errors = { ...errors, password: 'Password is required!' }
        }
        this.setState({ errors })
        return Object.keys(errors).length === 0;
    }

    render() {
        const { errors, email, password } = this.state;
        const { loading } = this.props;
        return (
            <LoginComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                email={email}
                password={password}
                errors={errors}
                loading={loading}
            />
        );
    }
}

const mapStateToProps = ({ login }) => ({
    login,
    loading: login.isLoading,
    isLoggedin: login.isLoggedin,
});
const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);