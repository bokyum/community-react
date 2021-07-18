import React from 'react';
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


const textMap= {
    join: "회원가입",
    login: "로그인"
}

const AuthForm = ({type}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput name="username" placeholder="아이디" />
                <StyledInput name="password" placeholder="비밀번호" />
                {type==='join' && ( 
                    <StyledInput name="checkPassword" placeholder="비밀번호 체크" />
                )}

                <Button>
                    <Link to="/">{text}</Link>
                </Button>
                <Footer>
                {type === 'join' ? (
                        <Link to="login">
                            로그인</Link>
                    ) : (
                        <Link to="join">
                            회원가입</Link>
                    )}
                    </Footer>
            </form>
        </AuthFormBlock>
    );

}

export default AuthForm;