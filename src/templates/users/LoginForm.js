import React, {useState}  from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { handleLogin } from '../../api/auth/AuthApi';
import { setLogin } from '../../modules/auth';



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

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        checkPassword: '',
     
    })
    const [error, setError] = useState(false);

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
        setError(false);
        handleLogin({
            username: e.target.username.value,
            password: e.target.password.value,
        })
       
    }
   
    return (
        <AuthFormBlock>
            <h3>로그인</h3>
            <form onSubmit={handleSubmit}>   
                <StyledInput 
                autoComplete="username"
                name="username"
                placeholder="아이디"
                onChange={onChange}
            
            />
                <StyledInput
                autoComplete="password"
                name="password"
                placeholder="비밀번호"
                type="password"
                onChange={onChange}
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

export default LoginForm;