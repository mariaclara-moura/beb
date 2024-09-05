import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { Pin, Message, Phone } from "assets";
import {
  Container,
  Title,
  Destaque,
  Linha,
  Descrição1,
  Descrição,
  Title2,
  Text,
  Infos,
  Section,
  Organize, Box, Retangulo, Wrapper, Button, 
} from "./style";
import Image from "next/image";

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isFormValid = () => {
    return (
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.subject.trim() !== '' &&
        formData.message.trim() !== ''
    );
};

const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isFormValid()) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    try {
        const response = await axios.post('/api/sendEmail', formData);
        console.log('Email sent:', response.data.message);
        alert("Email enviado com sucesso!");
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            subject: '',
        });
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


  return (
    <Container id="Contact">
      <Title>
        Entre em <Destaque>Contato</Destaque>
      </Title>
      <Linha></Linha>
      <Section>
        <Descrição1>
          <Title2 style={{marginBottom:"5%"}}>Informações</Title2>
         <Organize> <Infos style={{marginTop:"5%"}}>
            <Image src={Pin} alt="Atualização" />
            <Text>RUA JOSÉ DO PATROCÍNIO, 3500,<br></br>
              Candelária - Natal, RN 59065-210
            </Text>
          </Infos>
          <Infos style={{marginTop:"12%"}}>
            <Image src={Message} alt="Atualização" />
            <Text style={{marginLeft:"-2%", marginTop:"-2%"}}>contato@bebmaterialhidraulico.com.br <br></br> vendas@bebmaterialhidraulico.com.br</Text>
          </Infos>
          <Infos style={{marginTop:"15%"}}>
            <Image src={Phone} alt="Atualização" />
          <Text style={{marginLeft:"-1%", marginTop:"-3%"}}>(84) 3606-0906 <br></br>
          (84) 99105-6245</Text>
          </Infos></Organize>
        </Descrição1>
        <Descrição>
          <Title2>Deixe uma mensagem</Title2>
          <Box onSubmit={handleSubmit} >
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}} >
                    <Wrapper>
                        <Retangulo placeholder="Nome" id="name" value={formData.name} onChange={handleChange} ></Retangulo>
                        <Retangulo placeholder="Email" id="email" value={formData.email} onChange={handleChange} ></Retangulo></Wrapper>
                    <Wrapper>
                        <Retangulo placeholder="Telefone" id="phone" value={formData.phone} onChange={handleChange} />
                        <Retangulo placeholder="Assunto" id="subject" value={formData.subject} onChange={handleChange} /> 
                    </Wrapper>
                    <Retangulo height = "6.18419rem" width="40rem" placeholder="Conteúdo" id="message" value={formData.message} onChange={handleChange}
 ></Retangulo>
               </div> 
                 <Button  type="submit">
                        Enviar
                </Button> 
                </Box> </Descrição>
      </Section>
    </Container>
  );
}
