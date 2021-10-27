import React from "react";
import { Container } from "./styled";
import SelectImageButton from "../SelectImageButton";
import DonwloadImageButton from "../DownloadImageButton";

export interface SelecitonBarProps {
  setValue?: any;
  downloadPath?:string;
}

const SelectionBar: React.FC<SelecitonBarProps> = ({ setValue,downloadPath }) => {
  return (
    <Container>
      <SelectImageButton setValue={setValue} />
      <DonwloadImageButton downloadPath = {downloadPath} />
    </Container>
  );
};

export default SelectionBar;
