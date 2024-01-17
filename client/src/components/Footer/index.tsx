import React from "react";
import { FooterContainer, Footera, FooterDiv, Footerp, FooterDiv2} from './style';
import { WhiteIcon, Insta, Map, Zap, Email } from '../../assets';
import Image from 'next/image';

export default function Footer  ()  {
  return (
    <FooterContainer>
      <FooterDiv> 
        <Image src={WhiteIcon} alt="" />
         <Footerp> @ 2024 </Footerp>
      </FooterDiv>
      <FooterDiv2>
       <Footera href="https://www.instagram.com/bebmaterialhidraulico/" target="blank">
            <Image src={Insta} alt="" />
        </Footera>
        <Footera href="https://api.whatsapp.com/send?phone=5584994313279&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20B%26B%20Material%20Hidr%C3%A1ulico!" target="blank">
            <Image src={Zap} alt="" />
        </Footera>
        <Footera href="mailto:contato@bebmaterialhidraulico.com.br" target="blank">
            <Image src={Email} alt="" />
        </Footera>
        <Footera href="https://maps.app.goo.gl/JsLydUEFVXZtAWac7" target="blank">
            <Image src={Map} alt="" />
        </Footera>
      </FooterDiv2>
    </FooterContainer>
  );
}