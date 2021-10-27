import React from "react";
import downloadImage from "./downloadFuction";
import { Container } from "./styled";

interface DownloadProps{
  downloadPath?:string;
}


const DonwloadImageButton:React.FC<DownloadProps> = ({downloadPath})=>{




  return(
    <Container onClick={()=>downloadImage()} >
      Download
    </Container>
  )
}

export default DonwloadImageButton;
