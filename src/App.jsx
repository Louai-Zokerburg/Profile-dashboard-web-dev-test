import { useEffect, useState } from 'react';

import {BrowserRouter as Router, Routes, Route, json} from 'react-router-dom'

import SideBar from './components/side-bar/SideBar';
import TopBar from './components/top-bar/TopBar';
import Overview from './pages/Overview';
import Porfolio from './pages/Portfolio'
import Clients from './pages/Clients'
import Experience from './pages/Experience'
import Earnings from './pages/Earnings'
import Ratings from './pages/Ratings'
import Skills from './pages/Skills'
import Settings from './pages/Settings';
import Faq from './pages/Faq';
import Feedback from './pages/Feedback';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(1)

  useEffect(() => {
    const selectedPageFromLocalStorage = localStorage.getItem('selected-page')
    const themeFromLocalStorage = localStorage.getItem('theme')

    if (selectedPageFromLocalStorage === null) {
      localStorage.setItem('selected-page', JSON.stringify(1))
    }

    if (themeFromLocalStorage === null) {
      localStorage.setItem('theme', 'dark')
    }

    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }

    setSelectedPage(Number(localStorage.getItem('selected-page')))
    setTheme(localStorage.getItem('theme'))

  }, [])

  const toggleTheme = async () => {
    document.documentElement.classList.toggle('dark');

    setTheme((prevTheme) => {
      if (prevTheme === 'dark') return 'light';
      return 'dark';
    });

    if (localStorage.getItem('theme').toString() === 'dark') {
      localStorage.setItem('theme','light')
      return
    }

    localStorage.setItem('theme', 'dark')

  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSelectedPageChange = (id) => {
    setSelectedPage(id);
    localStorage.setItem('selected-page', JSON.stringify(id))
  }

  return (
    <main className='bg-light-secondary-bg w-full h-screen dark:bg-dark-secondary-bg'>
      <Router>

      
      {/** Top Bar */}
      <TopBar
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      {/** Side Bar */}
      <SideBar
        isMenuOpen={isMenuOpen}
        toggleTheme={toggleTheme}
        theme={theme}
        selectedPage={selectedPage}
        handleSelectedPageChange={handleSelectedPageChange}
        toggleMenu={toggleMenu}
      />

      {/** Main Content */}
      <Routes>
        <Route exact path='/' element={<Overview/>} />
        <Route path='/portfolio' element={<Porfolio />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/experience' element={<Experience />} />

        <Route path='/earnings' element={<Earnings />} />
        <Route path='/ratings' element={<Ratings />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
      </Router>
    </main>
  );
};

export default App;
