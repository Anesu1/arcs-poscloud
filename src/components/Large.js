import React from 'react';
import styled from 'styled-components';

const WrapperLarge = styled.section`
    height:100vh;
    background:url("./images/large.png");
    background-size:cover;
    background-position:center center;
    @media(min-width:768px){
        height:660px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
`

function Large() {
    return (
        <WrapperLarge>
            
        </WrapperLarge>
    )
}

export default Large
