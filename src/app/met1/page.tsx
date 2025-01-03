
'use client'
import styled from 'styled-components';
import Link from 'next/link';
export default function Home() {
  return (
        <Main>
          <Intro>
              How we met?
          </Intro>
        < Div>
        <Img  src="/assets/conv1.jpg" alt="logo" width="300px" />
        <Img  src="/assets/conv1.jpg" alt="logo" width="300px" />
        <Img  src="/assets/conv1.jpg" alt="logo" width="300px" />
        <Img  src="/assets/conv1.jpg" alt="logo" width="300px" />
          
        </Div>
        <Answer>
        <Link href="/met2">NEXT</Link>
          </Answer>
        </Main>
  );
}


const Div = styled.div` 
    margin:10px;
    margin-left:50px;
    margin-right:50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #FFAAAB ;
    padding: 80px;
    border-radius:40px;

`;
const Img = styled.img` 
margin: 2px;

`;
const Main = styled.div` 
    background-color: #F5E7DE;

`;

const Intro = styled.p` 
    background-color: #FEB300;
    padding: 30px;
    color: black;
    border-radius: 50px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;
const Answer = styled.button` 
    background-color: #FF5E6C;
    padding: 50px;
    color: black;
    border-radius: 50px;
    margin-left: 1200px;
    margin-top: 30px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;