import React from "react";
import "./index.css";
import { pizzaData } from "../src/data.js";

const App = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
function Header() {
  return (
    <div>
      <h1 className="header">The VishnuVaardhan Store</h1>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const count = pizzas.length;
  return (
    <div>
      <h2>Our MENU 📜</h2>

      {count > 0 ? (
        <ul>
          {pizzas.map((pizza) => (
           <Order pizza={pizza}/>
          ))}
        </ul>
      ) : (
        <Closed/>
      )}
    </div>
  );
}

function Order(props){
  return(
  <div key={props.pizza.name}>
  <img src={props.pizza.photoName} width={500} />
  <h2
    style={{
      color: "blue",
      fontSize: "32px",
      textTransform: "uppercase",
    }}
  >
    {props.pizza.name}🍕
  </h2>
  <p>{props.pizza.ingredients}</p>
  <h1>{props.pizza.soldOut}</h1>
</div>
  )
}

function Closed(){
  return(
  <div className="btn">
      <h1>There are no pizzas left</h1>
  </div>
  )
}

function Footer() {
  const openHour = 12;
  const closeHour = 22;
  const overallHours = 12;
  return (
    <div>
      <h1 className="footer">Open only on 3 days</h1>
      <h1>{new Date().toLocaleDateString()}</h1>
      {openHour && ( 
        <div className="order">
          <p>We are open until {closeHour}:00;come visit us!</p>
          <button className="btn">Order</button>
        </div>
      )}
    </div>
  );
}

export default App;
