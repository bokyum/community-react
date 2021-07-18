import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    //위 5 속성 화면 다 채우는 용도 
    display: flex;
    flex-direction: column;
    justify-content: center; // 상하 정렬
    align-items: center; // 좌우 정렬 
    background: #adb5bd;
`;

const WhiteBox = styled.div`
    width: 360px;
    background: white;
    padding: 2rem;
    .logo {
        text-align: center;
        padding-bottom: 1rem;
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: bold;

    }
`;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo">
                    <Link to="/">Home</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );

}

export default AuthTemplate;