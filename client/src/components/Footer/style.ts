import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background: #0066B3;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 6rem;
    @media (max-width: 768px){ 
        display: block;
        text-align: center;
    }
  `;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  gap: 1rem;
`;

export const FooterDiv2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: row;
  gap: 1rem;
    @media (max-width: 768px){ 
        margin-top: 2rem;
        text-align: center;}
`;


export const Footera = styled.a`
`;



export const Footerp = styled.p`
 color: #FFF;
 font-family: Roboto;
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 140%;
`;
