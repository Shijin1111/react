import { useState } from "react"
export default function Input() {
    const [ingredients,setingredients] = useState([])


    const ingredientsList = ingredients.map((ingredient,index)=>(
        <li key={index}>{ingredient}</li>
    ))
    const [result,fn] = useState("Yes")

    function handleSubmit(event)
    {
        event.preventDefault()
        const formdata = new FormData(event.currentTarget)
        const newingredient = formdata.get("ingredient")
        setingredients(prevIngredients => [...prevIngredients,newingredient])

    }

    



    return (
        <main>
            <form  onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    name="ingredient" // Added name attribute
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>{result}</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>

        </main>
    )
}
