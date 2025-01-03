
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
        <Ul className={"list-disc list-inside"}>
            <Li>
                When I recieved your first message I was <br/> very happy
            </Li>
            <Li>
                Then over the days, the weeks and the <br/> months I tried to get closer and closer to <br/> you
            </Li>
            <Li>
                Now I feel closer to you more than ever
            </Li>
            <Li>
                And I want you to know how much <br/> appreciation I have for you
            </Li>
        </Ul>
            
          
        </Div>
        
        <Answer>
        <Link href="/amazing1">Click to see what makes you amazing </Link>
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
const Li = styled.li` 

`;
const Ul = styled.ul` 
margin: 2px;
font-family: Apple Chancery, cursive;
font-size: 44px;
padding-left:120px;

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
    margin: 20px;
    margin-left: 350px;
    text-align: center;
    font-family: Apple Chancery, cursive;
    font-size: 44px;
`;