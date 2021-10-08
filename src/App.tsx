import React, { useState,useEffect } from 'react';
import './app.css';
import SelectionBar from './components/SelectionBar';
import SiderBarButton from './components/SiderBarButton';
import Slide from './components/Slide';


interface OptionsProps{
  [x: string]: any;
  name:string,
  property: string,
  value: number,
  range: {
    min: number,
    max: number
  },
  unit: string

}

const App: React.FC = () => {

  const editorOptions = [
    {
      name: 'Brightness',
      property: 'brightness',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      name: 'Contrast',
      property: 'contrast',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      name: 'Saturation',
      property: 'saturate',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      name: 'Grayscale',
      property: 'grayscale',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },
    {
      name: 'Sepia',
      property: 'sepia',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },
    {
      name: 'Hue Rotate',
      property: 'hue-rotate',
      value: 0,
      range: {
        min: 0,
        max: 360
      },
      unit: 'deg'
    },
    {
      name: 'Blur',
      property: 'blur',
      value: 0,
      range: {
        min: 0,
        max: 20
      },
      unit: 'px'
    }

  ]

  const [image,setImage] = useState();
  const [preview,setPreview] = useState<any>();
  const [index, setIndex] = useState(0)
  const [options,setOptions] = useState<any>(editorOptions)

  const selectOption = options[index];

  useEffect(()=>{
    if(image){
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      }
      reader.readAsDataURL(image as any)
    }else{
      setPreview(null);
    }


  },[image])



  function handleSlideChange(event:{target:HTMLInputElement}){
    setOptions((prevOptions:any) => {
      return prevOptions.map((option: any, id: number) => {
        if (id !== index)
          return option;
        return { ...option, value: event.target.value };
      });
    })
  }

  const getImageStyles = () => {
    const filters = options.map(
      (
        option: { property: string; value: number; unit: string; }) => `${option.property}(${option.value}${option.unit})`
      )
    return {filter: filters.join(' ')}
  }

  return (
    <div className="AppContainer">

      <SelectionBar value={image} setValue={setImage} />

      <div className={'fullContainer'} >

        <div className={'imageContainer'} >

          {
            image!= null
            ?
            <>
            <img src={preview} alt={'imagem'} className='image' style={getImageStyles()}  />

              <Slide
                min = {selectOption.range.min}
                max = {selectOption.range.max}
                value = {selectOption.value}
                handleChange ={handleSlideChange}
              />
            </>
            :
            <div className={'imageUpload'}>
              UPLOAD IMAGE
            </div>
          }


        </div>

        <div className = {'sidebar'} >

          {
            editorOptions.map((option,key)=>(
              <SiderBarButton
                key = {key}
                name = {option.name}
                handleClick={()=>setIndex(key)}
              />
            ))

          }

        </div>

      </div>

    </div>
  )
}

export default App;
