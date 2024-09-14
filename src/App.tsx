
import { NavLink } from 'react-router-dom';
import Center from './Components/Center/Center';
import Footer from './Components/Footer/Footer';
import Left from './Components/Left/Left'
import Right from './Components/Right/Right';
import { RiSearch2Line } from "react-icons/ri";
import { RiMenu4Fill } from "react-icons/ri";
import './App.css';
import './Components/Center/Center.css'
import { useState } from 'react';

const App = () => {

  const [comeGo, setComeGo] = useState<Boolean>(false);

  const callMenu = () => {
    setComeGo(!comeGo);
  }

  return (
    <div className="main">
      <div className='main-head'>
        <NavLink to={'/'}>
          T.I.ViAl
        </NavLink>
        <div>
          <input type="search" placeholder='axtar: ' />
          <div className='search-icon'>
            <RiSearch2Line />
          </div>
        </div>
        {
          window.innerWidth < 1050 ?
            <RiMenu4Fill className='tag-menu' onClick={callMenu} />
            : ''
        }
      </div>

      <Left comeGo={comeGo} />

      {

        window.innerWidth > 750 ? <>
          <div className='CF'>
            <Center />
            <Footer />
          </div>
          <Right />
        </> :
          <>
            <div className='CF'>
              <Center />
              <Right />
              <Footer />
            </div>
          </>
      }

    </div>
  )
}

export default App
