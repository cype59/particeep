import React from 'react';
import '../style/App.css';
import FilmList from './FilmList';
import NavbarMenu from './Navbar';


function App() {
  return (
    <div className="App">
      <NavbarMenu></NavbarMenu>
      <FilmList></FilmList>
    </div>
  );
}

export default App;
