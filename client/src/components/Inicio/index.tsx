import React from "react";
import Image from "next/image";
import {
  Foto,
  Container,
  Title,
  Destaque,
  Linha,
  Text,
  Linha2,
  Descrição,
  Card,
} from "./style";

export default function Inicio() {
  return (
    <Container id="Inicio">
      <Foto></Foto>
      <Title>
        Nossa <Destaque>História</Destaque>
      </Title>
      <Linha></Linha>
      <div style={{padding:"0 8.5%"}}>
        <Text>
          A B & B Material Hidráulico, foi fundada em 22 de setembro de 2009,
          com o objetivo de fazer parcerias com as construtoras da região,
          viabilizando suas obras de infraestrutura e saneamento, fornecendo
          material de qualidade, com preço e condições comerciais competitivos.
          Trabalhamos com todas as linhas hidráulicas, bombas hidráulicas, tubos
          e conexões de pvc, ferro fundido, prfv, infraestrutura, saneamento,
          distribuição de água, além de EPI. Ao longo dos anos, a empresa vem
          consolidando seu espaço no mercado do Rio Grande do Norte e se
          colocando à nível regional, começando a atender estados como Paraiba,
          Pernambuco e Ceará. Certos de que nosso crescimento contínuo está
          atrelado aos valores e princípios que cercaram esta empresa desde o
          seu fundamento, desejamos continuar expandindo para melhor atender
          nossos clientes.
        </Text>
      </div>
      <Descrição>
        <Card>
          <Destaque>Missão</Destaque>
          <Linha2></Linha2>
          <Text>
            Fornecer solução em material hidráulico com foco em saneamento e
            distribuição de água na região nordeste através da excelência no
            atendimento imediato da necessidade do cliente.
          </Text>
        </Card>
        <Card>
          <Destaque>Visão</Destaque>
          <Linha2></Linha2>
          <Text>
            Ser líder em distribuição de material hidráulico para saneamento e
            distribuição de água do nordeste.
          </Text>
        </Card>
      </Descrição>
    </Container>
  );
}
