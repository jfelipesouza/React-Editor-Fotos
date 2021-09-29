import React from 'react';
import { Container } from './styled';
import SelectImageButton from '../SelectImageButton';
import DonwloadImageButton from '../DownloadImageButton';

const SelectionBar: React.FC = () => {

  return (
    <Container>
      <SelectImageButton/>
      <DonwloadImageButton/>
    </Container>
  );
}

export default SelectionBar;
