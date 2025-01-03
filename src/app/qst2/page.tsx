'use client'
import Link from 'next/link';
import styled from 'styled-components';
export default function Home() {
  return (
        <Main>
          <Intro>
              How Many Siblings Do You Have? 
          </Intro>
        < Div>
          <Answer>
            <Link href="/wrong2">29</Link> 
          </Answer>
          <Answer>
            <Link href="/qst3">3</Link>
          </Answer>
          <Answer>
            <Link href="/wrong2">0</Link>
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
    margin: 150px;
    margin-top: 50px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;