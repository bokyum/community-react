import React from 'react';
import AuthForm from '../../templates/users/AuthForm';
import AuthTemplate from '../../templates/users/AuthTemplate';

const JoinPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="join" />
        </AuthTemplate>
    )
}

export default JoinPage;