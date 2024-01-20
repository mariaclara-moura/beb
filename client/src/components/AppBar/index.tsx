import { useState } from 'react';
import { ContainerNav, List, ToggleButton } from './style';
import Image from 'next/image';
import { WhiteIcon } from '../../assets';
import { Link as ScrollLink } from 'react-scroll'; 

export const Navbar = () => {
  const [toggle, setToggle] = useState(false); 

  const handleToggle = () => {
    setToggle(!toggle); 
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  const listItem = ['Início', 'Quem Somos', 'Serviços', 'Produtos', 'Entrar em contato'];
  const itemLinks = ['Inicio', 'Somos', 'Services', 'Products', 'Contact'];

  return (
    <ContainerNav>
      <Image src={WhiteIcon} alt="Logo" />
      <ToggleButton onClick={handleToggle}>
        {toggle ? (
          <span style={{ fontSize: '24px' }}>&times;</span>
        ) : (
          <span style={{ fontSize: '24px' }}>&#9776;</span>
        )}
      </ToggleButton>
      <List toggle={toggle}>
        {listItem.map((item, index) => (
          <li key={index} style={item === 'Entrar em contato' ? { border: '2px solid #FFF', borderRadius: '8px', display: 'flex', padding: '12px', justifyContent: 'center', alignItems: 'center', textDecoration:"none"        } : {}}>
            <ScrollLink
              to={itemLinks[index]}
              smooth={true}
              duration={500}
              spy={true}
              onClick={handleLinkClick}
            >
              {item}
            </ScrollLink>
          </li>
        ))}
      </List>
    </ContainerNav>
  );
};

export default Navbar;
