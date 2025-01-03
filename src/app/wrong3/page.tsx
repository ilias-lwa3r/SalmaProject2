
'use client'
import styled from 'styled-components';
import Image from 'next/image'
export default function Home() {
  return (
        <Main>
          <Div>
            <Image src="/assets/wrongGif3.webp" alt="A fun gif" width={700} height={700}  />
          </Div>
          
        </Main>
  );
}



const Main = styled.div` 
`;
const Div = styled.div` 
  margin = 200px;
`;

