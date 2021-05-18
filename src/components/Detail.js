import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import db from '../Firebase';

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then(doc => {
                if (doc.exists) {
                    //save the movie data
                    setMovie(doc.data());
                }
                else {
                    //redirect to home page
                }
            })
    }, [])
    console.log(movie)
    return (
        <Container>
            {movie &&
                <>
                    <Background>
                        <img src={movie.backgroundImg} />
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>}

        </Container>
    )
}

export default Detail
const Container = styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(2vw + 0px);
position:relative;


`
const Background = styled.div`
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`
const ImageTitle = styled.div`
height: 40vh;
min-height:170px;
min-width:200px;
width: 45vw;
margin-top:70px;

img{
    width:100%;
    height:100%;
    object-fit:contain;
}

`
const Controls = styled.div`
margin:35px 70px;
display:flex;
align-items:center;

`
const PlayButton = styled.button`
display:flex;
align-items:center;
padding:9px 24px;
border-radius:5px;
border:none;
cursor:pointer;
margin-right:20px;
img{

}
span{
    font-size:16px;
    letter-spacing:1.45px;

}
&:hover{
    background:#b3b3b3;
}

`
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border:1px solid white;
span{
    color:white;
}
`
const AddButton = styled.button`
background:rgba(0,0,0,0.7);
border:2px solid white;
border-radius:50%;
width:46px;
height:46px;
cursor:pointer;
margin-right:20px;
span{
    font-size:30px;
    color:white;
}
`
const GroupWatchButton = styled(AddButton)`
background:rgba(0,0,0,0.9);
display:flex;
align-items:center;
justify-content:center;
img{
    width:44px;
    height:44px;
}
`
const SubTitle = styled.div`
margin:0 70px;
font-size:15px;
`
const Description = styled(SubTitle)`
margin-top:15px;
width:65%;
font-size:20px;
text-align:justify;
`