import React from 'react';
import styled from 'styled-components';
import { handleLogout } from '../../api/auth/AuthApi';

const Button = styled.button`
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    font-size: 20px;
    font-weight: bold;
    background-color: #343a40;
    color: white;
    border-radius: 5px;

`;

const LogoutPage = () => {
    
    const handleSubmitLogout = (e) => {
        e.preventDefault();
        handleLogout()
        window.location.href = "/";
    }
    const handleSubmitHome = (e) => {
        e.preventDefault();
        window.location.href = "/";
    }
    
    return (
        <div>
        <form onSubmit={handleSubmitLogout}>
            <Button>로그아웃</Button>
        </form>
        <form onSubmit={handleSubmitHome}>
            <Button>취소</Button>
        </form>
        </div>
    );
}

export default LogoutPage;