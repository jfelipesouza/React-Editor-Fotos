import React from 'react';
import { Container } from './styled';
import SelectImageButton from '../SelectImageButton';
import DonwloadImageButton from '../DownloadImageButton';



export interface SelecitonBarProps{
  value?:any,
  setValue?:any,
}

const SelectionBar: React.FC<SelecitonBarProps> = ({value,setValue}) => {

  return (
    <Container>
      <SelectImageButton value={value} setValue = {setValue} />
      <DonwloadImageButton/>
    </Container>
  );
}

export default SelectionBar;
