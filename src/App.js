import React, { useContext, useEffect } from 'react';
import {AppContext} from './contexts/context'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import Projects from './pages/Projects'
import ProjectInfo from './pages/ProjectInfo'

function App() {
  const { getIP } = useContext(AppContext)
  useEffect(() => {
    // getIP();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectInfo/:project" element={<ProjectInfo/>}/>
        {/* <Route path="/Project1" element={<Project1 />}/>
        <Route path="/Project2" element={<Project2 />}/>
        <Route path="/Project3" element={<Project3 />}/>
        <Route path="/Project4" element={<Project4 />}/> */}
      </Routes>
    </div>
  );
}

export default App;
