import React from 'react';
import styled from 'styled-components';


const HomeTemplateBlock = styled.div`
   position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: #f1f3f5;

`;

const HomeTemplate = ({children}) => {
    return (
        <HomeTemplateBlock>
            {children}
        </HomeTemplateBlock>
    )
}

export default HomeTemplate;