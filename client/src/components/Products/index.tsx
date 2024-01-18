import { Previous, Next } from "assets";
import {
  Container,
  Title,
  Destaque,
  Linha,
  Title2,
  Button,
  StyledA,
  StyledSlider,
  Categories,
  ButtonDiv
} from "./style";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Item1, Item2, Item3, Item4, Item5, Item6 } from "./carrossel";

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Image
      src={Next}
      alt="Próximo"
      className={className}
      onClick={onClick}
      style={{ width: "12px", height: "25px" }}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <Image
      src={Previous}
      alt="Anterior"
      className={className}
      onClick={onClick}
      style={{ width: "12px", height: "25px" }}
    />
  );
}

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlider>
      <Slider {...settings}>
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
        <Item6 />
      </Slider>
    </StyledSlider>
  );
}

export default function Products() {
  return (
    <Container id="Products">
      <Title>
        Nossos <Destaque>Produtos</Destaque>
      </Title>
      <Linha></Linha>
      <Categories>
      <Title2>Linha Predial</Title2>
      <SimpleSlider />
      <Title2>Linha Infraestrutura</Title2>
      <SimpleSlider />
      <Title2>Linha PEAD</Title2>
      <SimpleSlider />
      <Title2>Civil</Title2>
      <SimpleSlider />
      <Title2>Geomecânico</Title2>
      <SimpleSlider />
      <Title2>Bombas Hidráulicas</Title2>
      <SimpleSlider />
      <Title2>Registro em PVC</Title2>
      <SimpleSlider />
      <Title2>Registro de Gaveta Ferro Fundido</Title2>
      <SimpleSlider />
      <Title2>Hidrômetros e Macromediadores</Title2>
      <SimpleSlider />
      <Title2>Acessórios</Title2>
      <SimpleSlider />
    </Categories>
      <ButtonDiv>
        <Button>
          <StyledA href="/catalogo.pdf" target="_blank" title="Catalogo B&B">
            Catálogo Completo
          </StyledA>
        </Button>
      </ButtonDiv>
    </Container>
  );
}
