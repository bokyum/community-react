import React from 'react';

import AuthTemplate from '../../templates/users/AuthTemplate';
import JoinForm from '../../templates/users/JoinForm';

const JoinPage = () => {
    return (
        <AuthTemplate>
            <JoinForm />
        </AuthTemplate>
    )
}

export default JoinPage;