import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title,desc,leftBtnText,rightBtnText,backgroundImg}) => { 
    return ( 
        <Wrap bgImage = {backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
           {desc &&  <p>{desc}</p>}
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
              { rightBtnText && <RightButton>
                {rightBtnText}
                </RightButton>}
            </ButtonGroup>
            </Fade>
            <DownArrow src={`/images/down-arrow.svg`}/>
            </Buttons>
        </Wrap>
    )
} 

const Wrap = styled.div`
z-index:10;
width:100%;
height:100vh;
background:orange;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
// background-image:url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image : ${props => `url('/images/${props.bgImage}')`}

`
const ItemText = styled.div`
padding-top:15vh;
`
const Buttons = styled.div``

const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media(max-width){ 
    flex-direction:column;
}
`
const LeftButton= styled.div`
  background-color:rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`

const DownArrow = styled.img`
// margin-top:20px;
height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;
cursor:pointer;
`

export default Section