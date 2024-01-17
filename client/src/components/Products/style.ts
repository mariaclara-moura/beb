import styled from 'styled-components';


export const Container = styled.div`
background-color:#0066B3;
width:100%;
height:450px;
padding-left:8%;
padding-right:8%;
padding-top:3%;

@media (max-width: 768px) {
    display:block;
    padding-left:2%;
    padding-right:2%;
    padding-top:6%;
    height:700px;}`;

export const Title = styled.h1`color: #FFF;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 66.667% */
text-transform: uppercase;
margin-top: 1%;`;

export const Destaque = styled.span`color: #FFF;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 20px;
text-transform: uppercase;`;

export const Linha = styled.div`
width: 100%;
height: 2px;
flex-shrink: 0;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
margin-top:24px;
margin-bottom:3%;

@media (max-width: 768px) {
    margin-bottom:10%;}`;

export const Infos = styled.div`
display:flex;
flex-direction: column;
`;

export const Descrição = styled.div`
display:flex;
flex-direction:row;
gap:3%;
margin-bottom: 2%;

@media (max-width: 768px) {
    display:block;
    gap:0px;
    margin-bottom:15%;
    text-align: center;

}`;

export const Title2 = styled.h2`
color: #FFF;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 19.8px; /* 110% */
margin-top: 3%;`;

export const Text = styled.p`
color: #FFF;
text-align: justify;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19.8px; /* 110% */
margin-top:3%;

@media (max-width: 768px) {
    width:75%;
align-self:center;}`;

export const Button = styled.button`
  display: inline-flex;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  background: #f1811b;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.1s ease;
  color: var(--Pure-Orange, #ff9100);

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: #fff;
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
  letter-spacing: 0.03125rem;
`;