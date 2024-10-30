import React from 'react'
import { pizzaData } from './data'

const Display = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <Footer/>
        
    </div>
        
  )
}


function Header(){
    return(
        <div>
            <h1>The Pizza Store 🍕</h1>
        </div>
    )
}


function Menu(){
    // const pizzaData = [];
    const pizzas = pizzaData;
    const count = pizzas.length;
    return(
        <div>
            {count>0 ?(
                <>
                <h3>We are happy to serve you🤖</h3>
                <ul>
                {pizzas.map((pizza)=>(
                    <Available pizzaObj={pizza}/>
                    
                ))}
                </ul>
                </>
            ):(
                <>
                <h3>We are currently not ready 🔥</h3>
                <h1>The Store is out of stock💀</h1>
                </>
            )}
     

            
        </div>
    )
    
}


function Available({pizzaObj}){

    return(
        <div className={`pizza ${pizzaObj.soldOut?"sold-out":" "}`}>
            <h1>{pizzaObj.name}</h1>
            <img src={pizzaObj.photoName} alt='photo'/>
            <h1>{pizzaObj.ingredients}</h1>
            {/* <i>price:{pizzaObj.price}</i> */}

           <i>Price: {pizzaObj.soldOut ? <span>SOLD OUT</span>:<span>{pizzaObj.price}</span>}
           </i>
                {/* <p>{pizzaObj.soldOut?'SOLD OUT':pizzaObj.price}</p> */}
        </div>
    )
}


function Footer(){
    const openHour = 12;
    const closeHour = 22;

    return(
        <div>
            <h1>The store is open from {openHour}:00 pm and closed at {closeHour}:00 </h1>
        </div>
    )
}




export default Display