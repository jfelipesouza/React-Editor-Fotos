import React, { useState,useEffect } from 'react';
import './app.css';
import SelectionBar from './components/SelectionBar';
import img from './assets/montanhas.jpg';
import SiderBarButton from './components/SiderBarButton';



const App: React.FC = () => {

  const [image,setImage] = useState();
  const [preview,setPreview] = useState<any>();

  const editorOptions = [
    {
     name:'Brightness'
    },
    {
      name:'Contrast'
    },
    {
      name:'Saturation'
    },
    {
      name:'Greyscale',
    },
    {
      name:'Sepia',
    },
    {
      name:'Hue Rotate'
    },
    {
      name:'Blur'
    }

  ]

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




  return (
    <div className="AppContainer">

      <SelectionBar value={image} setValue={setImage} />

      <div className={'fullContainer'} >

        <div className={'imageContainer'} >

          {
            image!= null
            ?
            <img src={preview} alt={'imagem'} className='image' />
            :
            <img src={img} alt={'imagem'} className={'image'} />
          }


        </div>

        <div className = {'sidebar'}>

          {
            editorOptions.map((option,key)=>(
              <SiderBarButton key = {key} name = {option.name}/>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default App;
