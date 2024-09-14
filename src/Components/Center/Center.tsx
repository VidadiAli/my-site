import { Route, Routes } from 'react-router-dom';
import Projects from '../Left/Projects';
import Stories from '../Left/Stories';
import './Center.css'
import MainCenter from './MainCenter';
import MyStory from './MyStory';
import MyProjects from './MyProjects';
import OneTwo from '../Left/OneTwo';
import Front from '../Courses/Front';

const Center = () => {
  return (
    <div className='center'>

      <Routes>
        <Route path='/' element={<MainCenter />} />
        <Route path='/courses/front-end' element={<Front />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/one-two' element={<OneTwo />} />
        <Route path='/stories/:story' element={<MyStory />} />
        <Route path='/projects/:project' element={<MyProjects />} />
        <Route path='/:books' element={<Stories />} />
        <Route path='/:films' element={<Stories />} />
        <Route path='/:world' element={<Stories />} />
        <Route path='/courses/front-end' element={<Front />} />
      </Routes>

    </div>
  )
}

export default Center