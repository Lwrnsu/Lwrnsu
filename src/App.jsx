import { Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/Home.jsx';
import ErrorPage from './pages/404/ErrorPage.jsx';
import Projects from './pages/AllProjectsPage/Projects.jsx';

function App() {
  return (
    <Routes>
      <Route path='*' element={<ErrorPage />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects' element={<Projects />}></Route>

    </Routes>
  )
}

export default App;
