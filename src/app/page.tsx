'use client'
import styled from 'styled-components';
export default function Home() {
  return (
        < Div>
          <Intro>
              Welcome <br/>This is a gift from Ilias to someone<br/> very special<br/>Before we start we need to make sure <br/> you're the right person  
          </Intro>
        </Div>
  );
}


const Div = styled.div` 
    background-color: #F5E7DE;

`;

const Intro = styled.p` 
    background-color: #F2BFA4;
    padding: 100px;
    color: black;
    border-radius: 50px;
    margin: 100px;
    margin-top: 100px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;