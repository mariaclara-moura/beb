import React from "react";
import { Teste } from "assets";
import Image from "next/image";
import { Infos, Carrossel } from "./style";

export function Item1() {
  return (
    <Carrossel>
      <Image src={Teste} alt="Prazos" />
    </Carrossel>
  );
}

export function Item2() {
  return (
    <Carrossel>
      <Image src={Teste} alt="Pedidos de oposição" />
    </Carrossel>
  );
}

export function Item3() {
  return (
    <Carrossel>
      <Image src={Teste} alt="Deferimento" />
    </Carrossel>
  );
}

export function Item4() {
  return (
    <Carrossel>
      <Image src={Teste} alt="Alvo de Pedido" />
    </Carrossel>
  );
}

export function Item5() {
  return (
    <Carrossel>
      <Image src={Teste} alt="Identificação de Protocolo" />
    </Carrossel>
  );
}

export function Item6() {
  return (
    <Carrossel>
      <Image src={Teste} alt="Notificação" />
    </Carrossel>
  );
}
