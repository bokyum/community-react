import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const TopBlock = styled.div`
    h1 {
        text-align: left;
        text-decoration: none;
        
    }
    h3 {
        //flex-direction: column;
        position: absolute;
        right: 0px;
        top: 1rem;
        padding-right: 1rem;
        padding-left: 1rem;
        text-decoration: none;
        word-spacing: 0.5rem;
    }
`;

const StyledInput = styled.input`
    direction: ltr;
    width: 70%;
    font-size: 1rem;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    float: left;
    //margin-left: 10%;
    

`;

const Button = styled.button`
    width: 8%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    
    font-size: 1rem;
    font-weight: bold;
    background-color: #343a40;
    color: white;
    border-radius: 5px;
    float: left;

`;

const HomeForm = () => {
    const [text, setText] = useState('');
    
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        return;
    }
    
    return (
        <TopBlock>
        <h1><Link to="/">Home</Link></h1>
        <form onSubmit={onSubmit}>
            <StyledInput 
            autoComplete="text"
            placeholder="Search..." 
            onChange={onChange} 
            value={text}>
            </StyledInput>
            <Button>검색</Button>
        </form>
        <h3><Link to="/login">Login </Link>
        <Link to="/join">Join </Link></h3>
        
        </TopBlock>
    )

}

export default HomeForm
