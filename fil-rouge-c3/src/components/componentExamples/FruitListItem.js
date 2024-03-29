export default function FruitListItem({fruitDatas,onFruitDelete}) {
    // state (data)


    // behaviour (functions)
        
    // rendering
    return (
        <li>
            {fruitDatas.name} <button onClick={() => onFruitDelete(fruitDatas.id)}>X</button>
        </li>
        
    )
}