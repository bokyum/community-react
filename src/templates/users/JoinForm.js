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

const JoinForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const onChangeUsername = e => {
        setUsername(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }
    const onChangeCheckPassword = e => {
        setCheckPassword(e.target.value);
    }

    return (
        <AuthFormBlock>
            <h3>회원가입</h3>
            <form>   
                <StyledInput 
                autoComplete="username"
                id="username"
                placeholder="아이디"
                onChange={onChangeUsername}
               />
                <StyledInput
                autoComplete="password"
                id="username"
                placeholder="비밀번호"
                type="password"
                onChange={onChangePassword}
                />
             
                <StyledInput
                autoComplete="checkPassword"
                id="password"
                placeholder="비밀번호 확인"
                type="password"
                onChange={onChangeCheckPassword}
                />
                

                <Button value="로그인" />
                </form>
                <Footer>
             
                    <Link to="login">로그인</Link>
                
                </Footer>
            
        </AuthFormBlock>
    );

}

export default JoinForm;