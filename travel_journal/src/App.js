import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data";

const cards = data.map(item =>{
  return (
    <Card 
      key={item.id}
      {...item}
      />
  )
})

export default function App() {
  return (
    <div className="App">
      <Header />
      <section>
        {cards}
      </section>
    </div>
  );
}
