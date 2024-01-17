import React from "react";
import { Icon } from "../assets";
import { NavBar,Products, Inicio, Services, Footer, Contact} from "components";

import styled from "styled-components";

 const HomeContainer = styled.div`
  background-color:#0066B3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;



export default function Home() {
  return (
    <HomeContainer>
      <NavBar />
      <Inicio />
      <Services />
      <Products />
      <Contact />
      {/* <h1>B&B One-page</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by Cla 
      </p> */}
      <Footer />
    </HomeContainer>
  );
}
