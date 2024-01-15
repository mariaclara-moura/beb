import React from "react";
import { HomeContainer } from "./style";
import { Icon } from "../assets";
import { NavBar,Products } from "components";

export default function Home() {
  return (
    <HomeContainer>
      <NavBar />
      <Products />
      <h1>B&B One-page</h1>
      <p>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by Cla 
      </p>
    </HomeContainer>
  );
}
