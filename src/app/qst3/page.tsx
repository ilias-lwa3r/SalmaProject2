'use client'
import Link from 'next/link';
import styled from 'styled-components';
export default function Home() {
  return (
        <Main>
          <Intro>
              In Which City Have You Lived? 
          </Intro>
        < Div>
          <Answer>
            <Link href="/met1">CASA</Link> 
          </Answer>
          <Answer>
            <Link href="/wrong3">FES</Link>
          </Answer>
          <Answer>
            <Link href="/wrong3">TANGER</Link>
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
    margin: 130px;
    margin-top: 50px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;