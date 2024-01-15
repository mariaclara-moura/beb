import styled from 'styled-components';
export const Container = styled.div`
background-color:white;
width:100%;
height:440px;
padding-left:120px;
padding-top:40px;
border-radius: 16px;`;

export const Title = styled.h1`color: #333;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 66.667% */
text-transform: uppercase;`;

export const Destaque = styled.span`color: #333;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 20px;
text-transform: uppercase;`;

export const Linha = styled.div`
width: 570px;
height: 2px;
flex-shrink: 0;
background: linear-gradient(90deg, #333 0%, rgba(255, 255, 255, 0.00) 100%);
margin-top:24px;
margin-bottom:58px`;

export const Descrição = styled.div`
Display:flex;
flex-direction:row;
gap:40px;
margin-bottom:64px;`;

export const Title2 = styled.h2`
color: #333;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 19.8px; /* 110% */
margin-top: 8px;`;

export const Text = styled.p`
color: #333;
text-align: justify;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19.8px; /* 110% */
margin-top:16px;`;