import React from 'react';
import AuthForm from '../../templates/users/AuthForm';
import AuthTemplate from '../../templates/users/AuthTemplate';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login"/>
        </AuthTemplate>
    );
}

export default LoginPage;