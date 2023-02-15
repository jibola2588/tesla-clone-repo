import React from 'react';
import styled from "styled-components"
import Section from './Section'



const Home = () => {
  return (
    <Container>
         <Section 
         title='Model S'
         desc = 'Order Online for Touchless Delivery'
         backgroundImg = 'model-s.jpg'
         leftBtnText = 'Custom order'
         rightBtnText = 'Existing inventory'
         />
         <Section 
           title='Model Y'
           desc = 'Order Online for Touchless Delivery'
           backgroundImg = 'model-y.jpg'
           leftBtnText = 'Custom order'
           rightBtnText = 'Existing inventory'
         />
         <Section 
          title='Model 3'
          desc = 'Order Online for Touchless Delivery'
          backgroundImg = 'model-3.jpg'
          leftBtnText = 'Custom order'
          rightBtnText = 'Existing inventory'
         />
         <Section 
          title='Model X'
          desc = 'Order Online for Touchless Delivery'
          backgroundImg = 'model-x.jpg'
          leftBtnText = 'Custom order'
          rightBtnText = 'Existing inventory'
         />
         <Section 
        title='Lowest Cost Solar Panels in America'
        desc = 'Money-back guarantee'
        backgroundImg = 'solar-panel.jpg'
        leftBtnText = 'Order now'
        rightBtnText = 'Learn more'
         />
         <Section 
          title='Solar for New Roofs'
          desc = 'Solar Roof Costs Less Than a New Roof'
          backgroundImg = 'solar-roof.jpg'
          leftBtnText = 'Order now'
          rightBtnText = 'Learn more'
         />
         <Section 
          title='Accessories'
          backgroundImg = 'accessories.jpg'
          leftBtnText = 'Shop now'
         />
    </Container> 
  );
}

export default Home;

const Container = styled.div`
   heigth:100vh;
   z-index:10;
`