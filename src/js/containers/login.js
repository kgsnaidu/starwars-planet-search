import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doLogin } from '../actions';
import { FormGroup, FieldGroup, Button, FormControl, Form } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            user: null
        }

        this._validateLogin = this._validateLogin.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!!nextProps.user.error) {
            this.setState({
                error: nextProps.user.error,
                user: null
            });
        } else {
            this.setState({
                error: '',
                user: nextProps.user
            });
        }
    }

    componentDidUpdate() {
        const user = this.state.user;
         
        if (!!user) {
            Cookies.set('username', user.name, { expires: 1, path: '' });
            this.props.history.push('/');
        }
    }

    _validateLogin() {
        this.props.doLogin(this.username.value, this.password.value);
    }

    render() {
        const error = this.state.error;

        return (
            <section className='row'>
                <div className='col-xs-12 col-md-4 col-md-offset-4'>
                    {!!error &&
                        <div className='alert alert-danger' role='alert'>
                            <span className='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span>
                            <span className='sr-only'>Error:</span>
                            {error}
                        </div>
                    }
                    <div className='panel panel-default'>
                        <div className='panel-body'>
                            <FormGroup controlId='formUserName'>
                                <FormControl type='text' inputRef={ref => { this.username = ref }} placeholder='Username' />
                            </FormGroup>
                            <FormGroup controlId='formPassword'>
                                <FormControl type='password' inputRef={ref => { this.password = ref }} placeholder='Password' />
                            </FormGroup>
                            <Button bsStyle='primary' block onClick={this._validateLogin}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        doLogin: doLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);