import React from 'react';
import {
    Button,
    Grid,
    Segment,
    Form,
    Image,
    GridRow,
    Input,
} from 'semantic-ui-react'
import './login.css';
import invest from './save.svg';
import logo from './logo.svg';

const LoginComponent = ({ handleChange, handleSubmit, loading, errors }) => {

    return (
        <Segment placeholder className="login-segment" >
            <Grid columns={2} stackable className="landing-section" textAlign='center'>
                <GridRow className="header">
                    <Image src={logo} className='logo' size='small' verticalAlign='top' />
                </GridRow>
                <Grid.Row verticalAlign='middle' >
                    <Grid.Column className="login-left">
                        <Image src={invest} fluid className="invest-image" />
                    </Grid.Column>

                    <Grid.Column className="right-section" >
                        <div>
                            <span role="img" aria-label="smile" className="welcome-message"> Welcome back 🤗</span>
                        </div>
                        <small>Use a valid email and password to keep yourself connected!</small>
                        <Form className="login-form">
                            <Form.Field>
                                <label>Email</label>
                                <Input
                                    placeholder='Email'
                                    name="email" onChange={(e) => handleChange(e)}
                                    icon={{ name: errors.email ? "close" : "check circle", color: errors.email ? "red" : "green" }}
                                />
                                {errors.email ? (<label className="error-label" >{errors.email}</label>) : ''}
                            </Form.Field>
                            <Form.Field>
                                <label className="form-label">Password</label>
                                <Input
                                    placeholder='password'
                                    type="password" name="password"
                                    onChange={(e) => handleChange(e)}
                                    icon={{ name: errors.password ? "close" : "check circle", color: errors.password ? "red" : "green" }}
                                />
                                {errors.password ? (<label className="error-label">{errors.password}</label>) : ''}
                            </Form.Field>
                            <Button type='submit' className="login-button" onClick={handleSubmit} loading={loading}>Login</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>);
}

export default LoginComponent;
