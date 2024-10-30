import React, { useState } from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



const App = () => {
  const[step,setStep] = useState(1);
  const[test,setTest] = useState({name:"vishnu"});
  const[isOpen,SetIsOpen] = useState(true);

  function handlePrevious(){
    setStep((prevStep)=> prevStep>1 ?prevStep-1:prevStep);
    
  }
  function handleNext(){
    setStep((prevStep)=> prevStep<3 ? prevStep+1:1);
     setTest({name:"vishnu"})
  }

  return (
    <div>
      <button className='close' onClick={()=> SetIsOpen(!isOpen)}>&times;</button>
      {isOpen &&(
        <div className='steps'>
        <div className='numbers'>
           <div className={step >= 1 ? "active":"" }>1 </div> 
           <div className={step >= 2 ? "active":"" }>2 </div>
           <div className={step >= 3 ? "active":"" }>3 </div>
        </div>
        <p className='message'>Step:{step}:{messages[step - 1]} {test.name}</p>
        <div className='buttons'>
          <button style={{backgroundColor:'#7950f2', color:'white'}} onClick={handlePrevious} >Previous</button>
          <button style={{backgroundColor:'#7950f2', color:'white'}} onClick={handleNext} >Next</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default App;