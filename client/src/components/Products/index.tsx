import React from "react";
import { Infraestrutura, Predial } from "assets";
import { Container,Title,Destaque,Linha,Descrição,Title2,Text, Infos, Button, StyledA} from './style';
import Image from 'next/image';

export default function Products (){
    return (<Container id="Products">
        <Title>Nossos <Destaque>Produtos</Destaque></Title>
        <Linha></Linha>
                
        <Button>
            <StyledA href="/catalogo.pdf" target="_blank" title="Catalogo B&B">Catálogo Completo</StyledA>
            </Button>
          </Container>)
}