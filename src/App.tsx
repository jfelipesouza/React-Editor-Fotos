import React, { useState, useEffect } from "react";
import "./app.css";
import SelectionBar from "./components/SelectionBar";
import SiderBarButton from "./components/SiderBarButton";
import Slide from "./components/Slide";
import { editorOptions } from "./data/editorDefaultOpitions";

const App: React.FC = () => {


  const [image, setImage] = useState();
  const [preview, setPreview] = useState<string>();
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState<any>(editorOptions);

  const selectOption = options[index];

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image as any);
    }
  }, [image]);

  function handleSlideChange(event: { target: HTMLInputElement }) {
    setOptions((prevOptions: any) => {
      return prevOptions.map((option: any, id: number) => {
        if (id !== index) return option;
        return { ...option, value: event.target.value };
      });
    });
  }

  const getImageStyles = () => {
    const filters = options.map(
      (option: { property: string; value: number; unit: string }) =>
        `${option.property}(${option.value}${option.unit})`
    );
    return { filter: filters.join(" ") };
  };

  return (
    <div className="AppContainer">
      <SelectionBar setValue={setImage} downloadPath = {preview} />

      <div className={"fullContainer"}>
        <div className={"imageContainer"}>
          {image != null ? (
            <>
              <img
                src={preview}
                alt={"imagem"}
                id={'img'}
                className="image"
                style={getImageStyles()}
              />

              <Slide
                min={selectOption.range.min}
                max={selectOption.range.max}
                value={selectOption.value}
                handleChange={()=>handleSlideChange}
              />
            </>
          ) : (
            <div className={"imageUpload"}>UPLOAD IMAGE</div>
          )}
        </div>

        <div className={"sidebar"}>
          {editorOptions.map((option, key) => (
            <SiderBarButton
              key={key}
              name={option.name}
              handleClick={() => setIndex(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
