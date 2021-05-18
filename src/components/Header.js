import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { selectUserName, selectEmail, selectPhoto } from "../userSlice/userSlice"
import { auth, provider } from '../Firebase'
import { setSignIn, setSignOut } from "../userSlice/userSlice"

function Header() {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const email = useSelector(selectEmail);
    const photo = useSelector(selectPhoto);
    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setSignIn({
                    username: user.displayName,
                    email: user.email,
                    photo: user.photoURL

                }));
                history.push("/");
            }
        })

    }, [])
    function signin() {
        auth.signInWithPopup(provider)
            .then(res => {
                let user = res.user;
                console.log(res);
                dispatch(setSignIn({
                    username: user.displayName,
                    email: user.email,
                    photo: user.photoURL

                }));
                history.push("/");

            })
    }
    function signout() {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut());
                history.push("/login");
            })
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !username ?
                (<LoginContainer>
                    <Login onClick={signin}>
                        login
                    </Login>
                </LoginContainer>) :
                <>
                    <NavMenu>

                        <a>
                            <img src="/images/home-icon.svg" />
                            <span>HOME</span>

                        </a>

                        <a>
                            <img src="/images/search-icon.svg" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" />
                            <span>SERIES</span>
                        </a>


                    </NavMenu>
                    <UserImg onClick={signout} src={photo} />
                </>}
        </Nav>
    );
}

export default Header;

const Nav = styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow-x:hidden;

`
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
       height:20px;
    }
    span{
       font-size:13px;
       letter-spacing:1.42px;
       position:relative;
       &:after{
           content:"";
           height:2px;
           background:white;
           position:absolute;
           left:0;
           right:0;
           bottom:-6px;
           opacity:0;
           transform-origin:left center;
           transform:scaleX(0);
           transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;

       }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}
  


`
const Logo = styled.img`
width:80px;
`
const UserImg = styled.img`
height:50px;
width:50px;
border-radius:50%;
cursor:pointer;
`
const LoginContainer = styled.div`
display:flex;
flex:1;
justify-content:flex-end;

`
const Login = styled.div`
text-transform:uppercase;
border:1px solid white;
border-radius:4px;
padding:5px 10px;
letter-spacing:1.5px;
cursor:pointer;
&:hover{
    background:white;
    color:#000;
}
`