import React, { useState,useEffect } from 'react';
import './app.css';
import SelectionBar from './components/SelectionBar';
import img from './assets/image.png';



const App: React.FC = () => {

  const [image,setImage] = useState();
  const [preview,setPreview] = useState<any>();


  useEffect(()=>{
    if(image){
      const reader = new FileReader();
      reader.onloadend = () =>{
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
            image!= null? <img src={preview} alt={'image'} className='image' />: <img src={img} alt='image' />
          }


        </div>

        <br/>
        <div className = {'sidebar'}>

          <h1>Sidebar Buttons</h1>

        </div>

      </div>

    </div>
  )
}

export default App;
