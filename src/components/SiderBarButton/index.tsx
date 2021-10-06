import React from 'react';
import {Container} from './styled';



const SiderBarButton: React.FC = () => {
  return(
    <Container onClick={()=>alert('Clicou em mim')} >
      Button
    </Container>
  );
}

export default SiderBarButton;
