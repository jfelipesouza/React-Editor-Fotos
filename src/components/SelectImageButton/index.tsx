import React from 'react';
import { Container } from './styled';



const SelectImageButton: React.FC = () => {
  return (
    <Container>
      <label htmlFor='file' >UPLOAD</label>
      <input
        type="file"
        name="imageInput"
        id="imageInput"
        className = 'imageInput'
      />
    </Container>
  );
}

export default SelectImageButton;
