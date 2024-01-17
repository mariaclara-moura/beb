import styled from "styled-components"
import { Canos } from 'assets';

export const Foto = styled.section`
  width: 100%;
  background-image: url(${Canos.src});
  background-repeat: no-repeat;
  background-size: cover;
  height:620px;
  border-radius: 0px 0px 62px 62px;`;

export const Container = styled.div`
background-color: #0066B3;
width:100%;
height:1180px;
color:#06F;`;

export const Title = styled.h1`
color: #FFF;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 66.667% */
text-transform: uppercase;
margin-left: 120px;
margin-top : 64px;`;

export const Destaque = styled.span`
color: #FFF;
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
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
margin-top:24px;
margin-bottom:24px;
margin-left: 120px;`;

export const Text = styled.p`
color: #FFF;
text-align: justify;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19.8px; /* 110% */
margin-top:16px;
margin-left: 120px;
margin-right: 120px;
margin-bottom: 48px;
line-height : 28px;`;

export const Destaque2 = styled.span`
color: #FFF;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 20px;
text-transform: uppercase;
margin-top: 100px;`;

export const Linha2 = styled.div`
width: 280px;
height: 2px;
flex-shrink: 0;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
margin-top:24px;
margin-bottom:24px;`;

export const Text2 = styled.p`
color: #FFF;
text-align: justify;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19.8px; /* 110% */
margin-top:16px;
margin-bottom: 48px;
line-height : 28px;`;

export const Descrição = styled.div`
Display:flex;
flex-direction:row;
gap:40px;
margin-bottom:64px;
paddign-left:5%;`;

export const Destaque3 = styled.span`
color: #FFF;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 20px;
text-transform: uppercase;
margin-top: 100px;`;

export const Linha3 = styled.div`
width: 280px;
height: 2px;
flex-shrink: 0;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
margin-top:24px;
margin-bottom:24px;`;

export const Text3 = styled.p`
color: #FFF;
text-align: justify;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19.8px; /* 110% */
margin-top:16px;
margin-bottom: 48px;
line-height : 28px;`;

export const Card = styled.div`
padding-left : 120px;
width: 45%; `;