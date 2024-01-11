import styled from 'styled-components';

interface Props {
  toggle: boolean;
}

export const ContainerNav = styled.nav`
  height: 120px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 6.25rem;
  z-index: 3;
  flex-direction: row;
  background-color: #0066B3;
  @media (max-width: 1024px) {
    padding: 0rem 1rem;
  }
`;

export const List = styled.ul<Props>`
  align-items: center;
  flex-direction: row;
  display: flex;
  gap: 3rem;
  list-style-type: none;
  margin: 0;

  li {
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; 
    letter-spacing: 0.5px;
    cursor: pointer;
    list-style: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #F58220;
    }
  }

  @media screen and (max-width: 1024px) {
    background-color: #FAFAFA;
    width: 100%;
    display: ${({ toggle }) => (toggle === true ? 'flex' : 'none')};
    flex-direction: column;
    padding: 1rem;
    position: absolute;
    top:20vw;
    z-index: 15;

    li {
      margin-bottom: 0.5rem;
      color: #0066B3;
      font-size: 1.5rem;
    }
  }
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;