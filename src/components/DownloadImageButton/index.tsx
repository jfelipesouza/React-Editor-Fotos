import React from "react";
import downloadImage from "./downloadFuction";
import { Container } from "./styled";


const DonwloadImageButton:React.FC = ()=>{




  return(
    <Container onClick={()=>downloadImage()} >
      Download
    </Container>
  )
}

export default DonwloadImageButton;
