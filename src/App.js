import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
// import Carousel from './Carousel';

const mainMenuNav = [
  'Главная', 'О нас', 'Контакты'
]

const App = () => {
  
  return(
    <div className="conteiner"> 
      <Header navData={mainMenuNav} />
      <Body />
      <Footer />
    </div>
  )
}
export default App;
