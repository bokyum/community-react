import React from 'react';
import AuthTemplate from '../../templates/users/AuthTemplate';
import LoginForm from '../../templates/users/LoginForm';


const LoginPage = () => {
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
}

export default LoginPage;