
'use client'
import styled from 'styled-components';
import Link from 'next/link';
export default function Home() {
  return (
        <Main>
          <Intro>
              Your superpower is...
          </Intro>
        < Div>
        <Text>
            You're a very loving and caring person <br/> Even if you say you're not, many times it shows how much love <br/> you have to offer. B7al fach jat khtek sghira <br/> ldar wbqiti kat3nqiha wqrebti tbki. <br/>
        </Text>
            
          
        </Div>
        
        <Answer>
              Click to see what makes you amazing
          </Answer>
        </Main>
  );
}


const Div = styled.div` 
    margin:10px;
    margin-left:50px;
    margin-right:50px;
    background-color: #FFAAAB ;
    padding: 80px;
    border-radius:40px;

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
const Text = styled.p` 
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
    margin: 20px;
    margin-left: 350px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;