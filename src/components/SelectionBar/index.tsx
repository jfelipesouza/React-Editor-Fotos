import React from 'react';
import { Container } from './styled';
import SelectImageButton from '../SelectImageButton';
import DonwloadImageButton from '../DownloadImageButton';



export interface SelecitonBarProps{
  setValue?:any,
}

const SelectionBar: React.FC<SelecitonBarProps> = ({setValue}) => {

  return (
    <Container>
      <SelectImageButton setValue = {setValue} />
      <DonwloadImageButton/>
    </Container>
  );
}

export default SelectionBar;
