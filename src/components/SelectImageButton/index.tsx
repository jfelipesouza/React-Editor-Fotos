import React,{useRef} from 'react';
import { Container,Button } from './styled';
import img from '../../assets/image.png'


interface SelectProps{
  value?:any,
  setValue?:any,
}

const SelectImageButton: React.FC<SelectProps> = ({value,setValue}) => {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const open = (event:any) => {
    event.preventDefault();
    if(null!==fileInputRef.current){
      fileInputRef.current?.click()
    }
  }

  const imageHandle = (event:any) =>{
    const file = event.target.files[0]

    if(file && file.type.substr(0,5)==='image'){
      setValue(file);
    }else{
      setValue(img)
    }


  }

  return (
    <Container >
      <Button
        onClick={(event)=>open(event)}
      >
        UPLOAD
      </Button>
      <input
        type="file"
        name="imageInput"
        id="imageInput"
        className = 'imageInput'
        ref={fileInputRef}
        accept='image/*'
        onChange={(event)=>imageHandle(event)}
      />

    </Container>
  );
}

export default SelectImageButton;
