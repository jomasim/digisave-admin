import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Sidebar from '../../components/Sidebar';
import { logOut } from '../../actions/Login';


class Home extends Component {
    state = {};

    handleSignOut = () => {
        const { history, logOut: logOutAction } = this.props;
        logOutAction();
        // remove access token
        localStorage.removeItem('ACCESS_TOKEN');
        history.push('/')
    }
    render() {
        return (<Sidebar handleSignOut={this.handleSignOut} />)
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logOut }, dispatch);

export default connect(null, mapDispatchToProps)(Home);