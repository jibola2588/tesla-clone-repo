import React,{useState} from 'react'
import styled from 'styled-components'
import {IoMdMenu,IoMdClose} from 'react-icons/io'
import { selectedCars } from '../features/carSlice'
import { useSelector } from 'react-redux'

const Header = () => { 
  const [burgerStatus,setBurgerStatus] = useState(false)
  const cars = useSelector(selectedCars)
  console.log(`cars in header are ${cars}`)

    return(
        <Container>
        <a>
            <img src='/images/logo.svg' alt=''/>
        </a>
        <Menu>
             { 
              cars && cars?.map((car,i) => ( 
                <a href='#' key={i}>{car}</a>
              ))
             }
        </Menu>
        <RightMenu>
            <a href='#'> Shop</a>
            <a href='#'> Tesla Account</a>
            <CustomMenu onClick = {() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show = {burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick = {() => setBurgerStatus(false)}/>
          </CloseWrapper>
          { 
              cars && cars?.map((car,i) => ( 
               <li> <a href='#' key={i}>{car}</a></li>
              ))
          }
            <li><a href=''>Use Inventory</a></li>
            <li><a href=''>Trade-in </a></li>
            <li><a href=''>Cybertruck</a></li>
            <li><a href=''>Roadaster</a></li>
        </BurgerNav>
    </Container>
    )
}

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;

a{ 
    font-weight:600;
    text-transform:upercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media (max-width:768px){ 
  display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;

a{ 
  font-weight:600;
  text-transform:upercase;
  margin-right:10px;
}
`
const CustomMenu = styled(IoMdMenu)`
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
transition:transform 0.2s ease-in ;

li{ 
  padding:15px 0px;
  border-bottom:1px solid rgba(0,0,0,.2);

  a{ 
    font-weight:600;
    color:rgb(52,40,109);
  }
}
`

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
cursor:pointer;
`

const CustomClose = styled(IoMdClose)``

export default  Header