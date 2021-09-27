import React from 'react';
import {Heade,Container,Left,Right} from './styled'


const Header: React.FC = () => {
  return(
    <Heade>
      <Container>
        <Left>
          <h3>Editor de fotos</h3>
        </Left>
        <Right>
          <a href='https://github.com/jfelipesouza'>By Felipe souza</a>
        </Right>
      </Container>
    </Heade>
  );
}

export default Header;
