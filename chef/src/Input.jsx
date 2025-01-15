import { useState } from "react"
import CloudRecipe from "./cloudRecipe"
import Ingredients from "./Ingredients"
import { useRef } from "react"
import { useEffect } from "react"
export default function Input() {
    const [ingredients,setingredients] = useState(["all the main species","pasta","ground beens","tomato paste"])
    const [recipeShown,setRecipeShown] = useState(false)
    function toggleRecipe(event){
        event.preventDefault();
        setRecipeShown(prev=>!prev)
    }
    const ingredientsList = ingredients.map((ingredient,index)=>(
        <li key={index}>{ingredient}</li>
    ))
    const [result,fn] = useState("Yes")
    console.log(result)
    const recipeSection = useRef(null)
    useEffect(()=>{
        if(recipeShown === true && recipeSection.current !=null)
        {
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
    },[recipeShown])
    function handleSubmit(formdata)
    {
        // event.preventDefault()
        // const formdata = new FormData(event.currentTarget)
        const newingredient = formdata.get("ingredient")
        setingredients(prevIngredients => [...prevIngredients,newingredient])
 
        console.log(formdata.get("ingredient"))
        // formdata.reset()
    }


    return (
        <main>
            <form  action={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    name="ingredient" // Added name attribute
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>{result}</button>
            </form>
            
            {ingredients.length>0 && 
            <Ingredients 
                i_list = {ingredientsList}
                toggleRecipe ={toggleRecipe}
            />
            }

        { recipeShown  && <CloudRecipe 
                            ref = {recipeSection}/>}
        </main>
    )
}
