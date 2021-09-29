import React from 'react';
import './app.css';
import SelectionBar from './components/SelectionBar';
import img from './assets/image.png';



const App: React.FC = () => {
  return (
    <div className="AppContainer">

      <SelectionBar/>

      <div className={'fullContainer'} >

        <div className={'imageContainer'} >

          <img src={img} />

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
