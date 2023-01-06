import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import cardData from "./CardData";

const cards = cardData.map((item) => {
  return (
    <Card
      key= {item.id}
      img={item.img}
      rate={item.rate}
      number={item.number}
      country={item.country}
      text={item.text}
      price={item.price}
    />
  );
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">{cards}</div>
    </div>
  );
}

export default App;
