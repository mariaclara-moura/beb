import styled from "styled-components"
import { Canos } from 'assets';

export const Foto = styled.section`
  width: 100%;
  background-image: url(${Canos.src});
  background-repeat: no-repeat;
  background-size: cover;
  height:590px;
  border-radius: 0px 0px 62px 62px;
  @media (max-width: 768px) {
    height:500px;}`;

export const Container = styled.div`
background-color: #0066B3;
width:100%;
height:1210px;
color:#06F;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:1800px;}`;

export const Title = styled.h1`
color: #FFF;
font-family: Open Sans;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 66.667% */
text-transform: uppercase;
margin-left:9%;
margin-top : 4%;
@media (max-width: 768px) {
    margin-top:10%;
    margin-left: 0%;
    align-self: center;
    text-align: center;}`;

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
margin-left: 9%;
@media (max-width: 768px) {
    width: 80%;
    margin-left:15%;}`;

export const Text = styled.p`
color: #FFF;
text-align: justify;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 19.8px; 
margin-top:16px;
margin-bottom: 2%;
line-height : 28px;
`;


export const Linha2 = styled.div`
width: 280px;
height: 2px;
flex-shrink: 0;
background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
margin-top:22px;
margin-bottom:24px;
@media (max-width: 768px) {
    width: 86%;
    margin-left:12%;}`;



export const Descrição = styled.div`
Display:flex;
flex-direction:row;
gap:40px;
margin-bottom:64px;
margin-top:5%;

@media (max-width: 768px) {
    display: block;
    text-align: center;
    align-self: center;
  }
`;

export const Card = styled.div`
padding-left : 8%;
padding-right : 2%;
width: 45%;
@media (max-width: 768px) {
    width:100%;
    padding: 3% 9%  6% 9%;} `;