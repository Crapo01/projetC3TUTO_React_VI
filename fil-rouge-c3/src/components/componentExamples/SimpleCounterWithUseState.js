import { useState } from "react";

export default function SimpleCounterWithUseState() {
  // state (data)
  const [compteur,setCompteur]=useState(1);

  // behaviour (functions)
  const handleClick = ()=>{
    setCompteur(compteur+1)
  }
  // rendering
  return (
  <div>
    <h1>{compteur}</h1>
    <button onClick={handleClick}>"click"</button>
  </div>);

}


