import { useState } from "react";

export default function FruitForm({handleAdd}){
// state (data)
const [nouveauFruit,setNouveauFruit] = useState("");

  // behaviour (functions)
  const handleSubmit = (event)=>{
    event.preventDefault();
    

    const id=new Date().getTime()
    const name=nouveauFruit;
    const newFruit = {id,name};
    handleAdd(newFruit)
    setNouveauFruit("")
    

}
const handleChange = (event)=>{
    // test console.log(event,event.target,event.target.value)
    setNouveauFruit(event.target.value);

}
  // rendering
  return (
    <form action="submit" onSubmit={handleSubmit}>
                <input type="text" 
                value={nouveauFruit} 
                name="addFruit" 
                id="addFruit" 
                placeholder="Add a fruit"
                onChange={handleChange}
                 />
            <button type="submit">ADD +</button>
            </form>
  )
}