
'use client'
import styled from 'styled-components';
import Link from 'next/link';
export default function Home() {
  return (
        <Main>
          <Intro>
              What makes you amazing?
          </Intro>
        < Div>
        <Ul className={"list-disc list-inside"}>
            <Li>
                You went through many problems but <br/> you're still standing
            </Li>
            <Li>
                You had a problem with your roommates <br/> last year, you've had some school <br/> difficulties, but you still managed to fix all those <br/> complexities and move forward
            </Li>
            <Li>
                This makes you an inspiring woman
            </Li>
            <Li>
                Kepp moving forward, you've got this!
            </Li>
            <Li>
                but this is not your biggest power...
            </Li>
        </Ul>
            
        
        </Div>
        
        <Answer>
        <Link href="/amazing3">Click to see your superpower</Link>
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