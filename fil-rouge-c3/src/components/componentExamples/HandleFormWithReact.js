import { useState } from "react";
import FruitListItem from "./FruitListItem";
import FruitForm from "./FruitForm";

export default function HandleFormWithReact() {
    // state (data)
    const [fruits, setFruits] = useState([
        { id: 1, name: "banane" },
        { id: 2, name: "cerise" },
        { id: 3, name: "mangue" },
    ])
    


    // behaviour (functions)
    const handleDelete = (id)=>{
        console.log(id)
        // copie du state avec spread operator ... ou fruits.slice
        const fruitsCopy = [...fruits]
        // manip du state
        const fruitsCopyFiltered = fruitsCopy.filter(fruit=> fruit.id !== id );
        console.log(fruitsCopyFiltered)
        // modif du state avec setter
        setFruits(fruitsCopyFiltered);

    }
    const handleAdd= (addedFruit)=>{
        const fruitsCopy=[...fruits];
        fruitsCopy.push(addedFruit);
        setFruits(fruitsCopy);
    };
    
    // rendering
    return (
        <div>
            <h1>LISTE DE FRUITS</h1>
            <ul>{fruits.map((fruit) => {
                   return(
                   <FruitListItem fruitDatas={fruit} onFruitDelete ={handleDelete} key={fruit.id} />
                   )
                })}
            </ul>
            <FruitForm handleAdd = {handleAdd}/>
        </div>
    )


}


