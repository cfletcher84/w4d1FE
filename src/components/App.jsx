import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import ImageOne from './Image1';
import ImageTwo from './Image2';
import ImageThree from './Image3';

function App() {

  return (
    <>
      <div>
          <Header/>
          <About/>
          <Contact/>
          <h1>Image Gallery</h1>
          <ImageOne />
          <ImageTwo />
          <ImageThree />
      </div>

    </>
  )
}

export default App