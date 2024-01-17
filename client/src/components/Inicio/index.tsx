import React from "react";
import { Canos } from "assets";
import Image from 'next/image';
import {Foto, Container, Title, Destaque, Linha, Text, Destaque2, Linha2, Text2, Descrição, Destaque3, Linha3, Text3, Card} from "./style";

export default function Inicio(){return(
<Container><Foto></Foto>
<Title>Nossa <Destaque>História</Destaque></Title>
<Linha></Linha>
<Text>A B & B Material Hidráulico, foi fundada em 22 de setembro de 2009, com o objetivo de fazer parcerias com as construtoras da região, viabilizando suas obras de infraestrutura e saneamento, fornecendo material de qualidade, com preço e condições comerciais competitivos. Trabalhamos com todas as linhas hidráulicas, bombas hidráulicas, tubos e conexões de pvc, ferro fundido, prfv, infraestrutura, saneamento, distribuição de água, além de EPI.
Ao longo dos anos, a empresa vem consolidando seu espaço no mercado do Rio Grande do Norte e se colocando à nível regional, começando a atender estados como Paraiba, Pernambuco e Ceará. Certos de que nosso crescimento contínuo está atrelado aos valores e princípios que cercaram esta empresa desde o seu fundamento, desejamos continuar expandindo para melhor atender nossos clientes.</Text>
<Descrição><Card><Destaque2>Missão</Destaque2>
<Linha2></Linha2>
<Text2>Fornecer solução em material hidráulico com foco em saneamento e distribuição de
água na região nordeste através da excelência no atendimento imediato da
necessidade do cliente.</Text2>
</Card>
<Card>
<Destaque3>Visão</Destaque3>
<Linha3></Linha3>
<Text3>Ser líder em distribuição de material hidráulico para saneamento e distribuição de
água do nordeste.</Text3>
</Card>
</Descrição>
</Container>)}