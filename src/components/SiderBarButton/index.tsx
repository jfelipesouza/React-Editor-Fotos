import React from 'react';
import {Container} from './styled';

interface SideBarButtons{
  name: String;
  handleClick: any;

}

const SiderBarButton: React.FC<SideBarButtons> = ({name,handleClick}) => {
  return(
    <Container onClick={handleClick} >
      {name}
    </Container>
  );
}

export default SiderBarButton;
