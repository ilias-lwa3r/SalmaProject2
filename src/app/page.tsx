'use client'
import styled from 'styled-components';
import Link from 'next/link';
export default function Home() {
  return (
        < Div>
          <Intro>
              Welcome <br/>This is a gift from Ilias to someone<br/> very special<br/>Before we start we need to make sure <br/> you're the right person  
          </Intro>
          <Answer>
              <Link href='/qst1'>Click to start!</Link> 
          </Answer>
        </Div>
  );
}


const Div = styled.div` 
    background-color: #F5E7DE;

`;
const Answer = styled.button` 
    background-color: #FFAAAB;
    padding: 50px;
    color: black;
    border-radius: 50px;
    margin: 250px;
    margin-top: 50px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
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