import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 500px;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 3%;

  @media (max-width: 1024px) {
    height: 780px;
  }

  @media (max-width: 768px) {
    display: block;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 6%;
    height: 750px;
  }
`;

export const Title = styled.h1`
  color: #333;
  font-family: Open Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 66.667% */
  text-transform: uppercase;
  margin-top: 1%;
`;

export const Destaque = styled.span`
  color: #333;
  font-family: Open Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
`;

export const Linha = styled.div`
  width: 100%;
  height: 2px;
  flex-shrink: 0;
  background: linear-gradient(90deg, #333 0%, rgba(255, 255, 255, 0) 100%);
  margin-top: 24px;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    margin-bottom: 10%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15%;
  align-items: flex-start;
  @media (max-width: 1024px) and (min-width: 768px) {
    gap: 5%;
    margin-top: 5% !important;
  }
`;

export const Descrição = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3%;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    display: block;
    gap: 0px;
    margin-bottom:10%;
    text-align: center;
    align-self: center;
  }
`;

export const Title2 = styled.h2`
  color: #333;
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.8px; /* 110% */
`;

export const Text = styled.p`
  color: #333;
  text-align: justify;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 0.92106rem;
  line-height: 1.57894rem;

  @media (max-width: 768px) {
    align-self: center;
  }

`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Organize = styled.div`
  display: flex;
  flex-direction: column;
@media (max-width: 1024px) and (min-width: 768px) {
  margin-bottom:3%;
  margin-top:-6%;}
`;

export const Box = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
  padding: 5% 0;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 10%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -5%;
  gap: 5%;
  padding-bottom: 3%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }
`;
export const Retangulo = styled.input`
  display: flex;
  width: ${(props) => (props.width ? props.width : "19rem")};
  height: ${(props) =>
    props.height ? props.height : "2.23681rem"}; // Adicionado altura como prop
  padding: 0.59213rem 0.85525rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1.053px solid #333;
  background: #fff;
  color: #333;
  font-family: Open Sans;
  font-size: 0.92106rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: var(--Gray-3, #aaa);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 100% */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 3%;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 7.4375rem;
  height: 3.0625rem;
  padding: 0.9375rem 1.8125rem 1rem 1.8125rem;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border-radius: 0.8125rem;
  background: #06f;
  margin-top: 4%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
  text-align: center;
  font-family: Open Sans;
  font-size: 1.05263rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.50394rem;
  &:active {
    border: 1px solid #06f;
    background: white;
    color: #06f;
  }
  @media (max-width: 768px) {
    width: 50%;
    height: 20%;
    padding: 0.5rem;
    gap: 0px;
    font-size: 1rem;
    margin-left: 0px;
  }
`;