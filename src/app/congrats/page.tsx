'use client'
import styled from 'styled-components';
import Link from 'next/link';
export default function Home() {
  return (
        <Main>
          <Intro>
              Congratulations! <br/> Welcome Salma. This is your <br/> Website 
          </Intro>
        < Div>
          <Answer>
          <Link href="/met1">Click to start</Link> 
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
    padding: 150px;
    color: black;
    border-radius: 50px;
    margin-left: 100px;
    margin-right: 100px;
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
    margin-left: 600px;
    margin-top: 30px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;