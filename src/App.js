import React from 'react';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import girl from './assets/girl.png'
import wedding from './assets/wedding-photography 1.png'
import bike from './assets/bike.png'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='cards'>

      <Card
        img={girl}
        rate={5}
        number={6}
        country="USA"
        text="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img={wedding}
        rate={5.0}
        number={30}
        country="USA"
        text="Learn wedding photograph!"
        price={125}
      />
      <Card
        img={bike}
        rate={4.8}
        number={2}
        country="USA"
        text="Group Mountain Biking"
        price={50}
      />
      </div>
    </div>
  );
}

export default App;
