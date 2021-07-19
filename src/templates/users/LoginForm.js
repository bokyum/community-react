import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const AuthFormBlock =  styled.div`
    h3 {
        font-weight: bold;
        font-size: 1.2rem;
    
    }
`;

const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #212529;
    outline: none;
    font-size: 20px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    

   

`;

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

const Footer = styled.div`
    text-align: right;
    font-size: 20px;
    padding-top: 1rem;
    font-weight: bold;
`



const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = e => {
        setUsername(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    const callApi = () => {
        axios.post('http://localhost:8080/api/v1/login', {
            "username": username.value,
            "password": password.value
        }
        ).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
            throw new Error(error);
        });
    }
    
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form onSubmit={callApi}>   
                <StyledInput 
                autoComplete="username"
                name="username"
                placeholder="아이디"
                onChange={onChangeUsername}
            
               />
                <StyledInput
                autoComplete="password"
                name="password"
                placeholder="비밀번호"
                type="password"
                onChange={onChangePassword}
            
                />
                <Button>로그인
                    </Button>

                </form>
                <Footer>
                    <Link to="join">회원가입</Link>
                </Footer>
            
        </AuthFormBlock>
    );

}

export default LoginForm;