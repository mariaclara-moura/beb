import styled from 'styled-components';
<<<<<<< HEAD
export const Container = styled.div`
background-color:white;
width:100%;
height:480px;
padding-left:120px;
padding-top:40px;
border-radius: 16px;`;
=======
>>>>>>> 115c817a56893f502038d82203861be7d11ff8aa

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