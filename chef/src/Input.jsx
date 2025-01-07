import { useState } from "react"
export default function Input() {
    const ingredients = ["a","b","c"]
    const ingredientsList = ingredients.map(ingredient=>(
        <li key={ingredients}>{ingredient}</li>
    ))
    const [result,fn] = useState("Yes")
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
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
