import React from 'react';
import {Container,Slide as InputSlide} from './styled';


interface SlideProps{
  min?:number;
  max?: number;
  value?: number;
  handleChange?: any;
}
const Slide: React.FC<SlideProps> = ({min,max,value,handleChange}) => {
  return (
    <Container>
        <InputSlide
          type="range"
          min={min}
          max={max}
          value = {value}
          onChange = {handleChange}
        />
    </Container>
  );
}

export default Slide;
