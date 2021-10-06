import React from 'react';
import {Container} from './styled';

interface SideBarButtons{
  name: String;
}

const SiderBarButton: React.FC<SideBarButtons> = ({name}) => {
  return(
    <Container onClick={()=>alert(`Clicou em ${name}`)} >
      {name}
    </Container>
  );
}

export default SiderBarButton;
