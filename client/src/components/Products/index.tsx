import { Previous, Next, Teste } from "assets";
import {Item1, Item2, Item3, Item4, Item5} from "assets/outros"
import {Item6, Item7, Item8, Item9} from "assets/civil"
import {Item10, Item11, Item12} from "assets/hidro"
import {Item13, Item14} from "assets/pvc"
import {Item19, Item18, Item17, Item16, Item15} from "assets/geomec"
import {Item20, Item21, Item22, Item23, Item24 } from "assets/bombas"
import {Item25, Item26, Item27, Item28, Item29, Item30, Item31, Item32, Item33 } from "assets/pead"
import {Item34, Item35, Item36, Item37, Item38, Item39, Item40, Item41, Item42, Item43, Item44, Item45, 
  Item46, Item47, Item48, Item49, Item50, Item51, Item52, Item53, Item54, Item55, Item56, Item57, Item58, 
  Item59, Item60, Item61, Item62, Item63, Item64, Item65, PrimeiroFerro} from "assets/infra"
import {Item67, Item68, Item69, Item70, Item71, Item72, Item73, Item74, Item75, Item76, Item77, Item78, Item79, 
  Item80, Item81, Item82, Item83, Item84, Item85, Item86, Item87, Item88, Item89, Item90, Item91, Item92, Item93, Item94, 
  Item95, Item96, Item97, Item98, Item99, Item100, Item101, Item102, Item103} from "assets/predial"
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
  Carrossel,
  ButtonDiv
} from "./style";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const acessorios = [Item1, Item2, Item3, Item4, Item5];
const civil = [Item6, Item7, Item8, Item9, Item6, Item7, Item8, Item9];
const hidro = [Item10, Item11, Item12, Item10, Item11, Item12];
const pvc = [Item13, Item14, Item13, Item14, Item13, Item14];
const geomec = [Item15, Item16, Item17, Item18, Item19];
const bombas = [Item20, Item21, Item22, Item23, Item24];
const pead = [Item25, Item26, Item27, Item28, Item29, Item30, Item31, Item32, Item33];
const infra = [Item34, Item35, Item61, Item36, Item37, Item38, Item39, Item40, Item41, Item42, Item43, Item44, Item45, 
  Item46, Item47, Item48, Item49, PrimeiroFerro, Item50, Item51, Item52, Item53, Item54, Item55, Item56, Item57, Item58, 
  Item59, Item60, Item62, Item63, Item64, Item65 ]
const predial = [Item88, Item89, Item90, Item91, Item92, Item93, Item94, Item95, Item71, Item103,Item72, Item73, Item74, Item75, Item76, Item77, Item78, Item79,
  Item80, Item81, Item82, Item83, Item84, Item85, Item86, Item87, Item96, Item97, Item98, Item99, Item100, Item101, Item102, Item67, Item68, Item69, Item70]

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

function Item({ imageName }: { imageName: string }) {
  return (
    <Carrossel>
      <Image src={imageName} alt="" />
    </Carrossel>
  );
}

interface SimpleSliderProps {
  imageNames: string[];
  rows?: number;
  slides?: number;
}

function SimpleSlider({
  imageNames,
  rows = 1, 
  slides = 4// Set default value for rows
}: SimpleSliderProps) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    rows: rows,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
        
        {
          breakpoint: 728,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
    ],
  };

  return (
    <StyledSlider>
      <Slider {...settings}>
        {imageNames.map((imageName, index) => (
          <Item key={index} imageName={imageName} />
        ))}
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
      <SimpleSlider imageNames={predial} rows={2} />
      <Title2>Linha Infraestrutura</Title2>
      <SimpleSlider imageNames={infra} rows={2} />
      <Title2>Linha PEAD</Title2>
      <SimpleSlider imageNames={pead} />
      <Title2>Civil</Title2>
      <SimpleSlider imageNames={civil} />
      <Title2>Geomecânico</Title2>
      <SimpleSlider imageNames={geomec} />
      <Title2>Bombas Hidráulicas</Title2>
      <SimpleSlider imageNames={bombas} />
      <Title2>Registro em PVC</Title2>
      <SimpleSlider imageNames={pvc} slides={2} />
      <Title2>Hidrômetros e Macromediadores</Title2>
      <SimpleSlider imageNames={hidro} slides={3}/>
      <Title2>Acessórios</Title2>
      <SimpleSlider imageNames={acessorios} />
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
