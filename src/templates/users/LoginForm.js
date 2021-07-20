import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { handleLogin } from '../../api/auth/AuthApi';



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



class LoginForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();

        handleLogin({
            username: e.target.username.value,
            password: e.target.password.value,
        })
    }
    
    render () {
        return (
            <AuthFormBlock>
                <h3>로그인</h3>
                <form onSubmit={this.handleSubmit}>   
                    <StyledInput 
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                
                
                />
                    <StyledInput
                    autoComplete="password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
            
                    />
                    <Button>로그인
                        </Button>

                    </form>
                    <Footer>
                        <Link to="join">회원가입</Link>
                    </Footer>
                
            </AuthFormBlock>
        )
    }

}

export default LoginForm;