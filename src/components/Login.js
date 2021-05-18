import React from 'react'
import styled from 'styled-components'


function Login() {

    return (
        <Container>
            <CTA>
                <CTAlogoone src="/images/cta-logo-one.svg" />

                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                    As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTAlogotwo src="/images/cta-logo-two.png" />

            </CTA>
        </Container>
    )
}

export default Login
const Container = styled.div`
min-height: calc(100vh - 70px);
position:relative;
display:flex;
align-items:top;
justify-content:center;

&:before{
    background-image:url("/images/login-background.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    background-position:top;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:-1;
    content:"";
    opacity:0.7;

}
`
const CTA = styled.div`
max-width:650px;
padding:80px 40px;
width:70%;
display:flex;
flex-direction:column;
align-items:center;


`
const CTAlogoone = styled.img`
width:90%;

`
const SignUp = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:12px 0;
border-radius:4px;
text-align:center;
font-size:18px;
letter-spacing:1.45px;
margin-top:9px;
margin-bottom:9px;
cursor:pointer;
&:hover{
  background-color:#338bff;
}


`
const Description = styled.p`
font-size:12px;
text-align:center;
letter-spacing:1.45px;
line-height:1.5;
`
const CTAlogotwo = styled.img`
width:90%;
`
