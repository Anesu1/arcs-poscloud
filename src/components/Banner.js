import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
    background:linear-gradient(to bottom, #0000006f, #0000006f), url("./images/banner.jpg");
    background-size:cover;
    background-position:center center;
    height:100vh;
    @media(min-width:768px){
        height:660px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
    img{
        margin:auto;
        width:200px;
        margin-left:5%;
    }
`

function Banner() {
    return (
        <Wrapper>
            <img src="./images/logowhite.png" alt="" />
        </Wrapper>
    )
}

export default Banner
