import React from "react";
import { Infraestrutura, Predial } from "assets";
import { Container,Title,Destaque,Linha,Descrição,Title2,Text, Infos} from './style';
import Image from 'next/image';

export default function Services
(){
    return (<Container id="Services">
        <Title>Nossos <Destaque>Serviços</Destaque></Title>
        <Linha></Linha>
        <Descrição><Image src={Predial} alt="Atualização"/>
        <Infos><Title2>Instalações Prediais</Title2>
        <Text>Para obras de esgoto ou água fria, a B & B tem a solução. Com tubos, conexões e acessórios adequados para o que você precisa.</Text></Infos></Descrição>
        <Descrição><Image src={Infraestrutura} alt="Atualização"/>
        <Infos><Title2>Infraestrutra</Title2>
        <Text>A B & B oferece todos os itens necessários para obras de infraestrutura, como instalações hidráulicas de saneamento, seja para água ou esgoto.</Text></Infos></Descrição>
        </Container>)
}