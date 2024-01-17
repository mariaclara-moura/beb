import React from "react";
<<<<<<< HEAD
import { HomeContainer } from "./style";
import { Icon } from "../assets";
import { NavBar,Products, Inicio } from "components";
=======
import { NavBar,Services, Footer, Products, Contact} from "components";
import styled from "styled-components";

 const HomeContainer = styled.div`
  background-color:#0066B3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

>>>>>>> 115c817a56893f502038d82203861be7d11ff8aa

export default function Home() {
  return (
    <HomeContainer>
      <NavBar />
<<<<<<< HEAD
      <Inicio />
=======
      <Services />
>>>>>>> 115c817a56893f502038d82203861be7d11ff8aa
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
