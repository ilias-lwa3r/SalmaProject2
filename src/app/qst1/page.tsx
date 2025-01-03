'use client'
import Link from 'next/link';
import styled from 'styled-components';
export default function Home() {
  return (
        <Main>
          <Intro>
              Do You Like Cheese? 
          </Intro>
        < Div>
          <Answer>
              <Link href='/qst2'>YES</Link> 
          </Answer>
          <Answer>
          <Link href='/wrong1'>No</Link>
          </Answer>
        </Div>
        </Main>
  );
}


const Div = styled.div` 
    style: flex-box;

`;
const Main = styled.div` 
    background-color: #F5E7DE;

`;

const Intro = styled.p` 
    background-color: #FEB300;
    padding: 50px;
    color: black;
    border-radius: 50px;
    margin: 100px;
    margin-top: 50px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
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