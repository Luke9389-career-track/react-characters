import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CharacterList from './Character/CharacterList';
import './App.css';



const App = () => (
  <React.Fragment>
    <Header />
    <CharacterList />
    <Footer />
  </React.Fragment>
);

export default App;
