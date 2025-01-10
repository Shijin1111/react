export default function Ingredients(props)
{
    const i_list = props.i_list

    
    
    return(
        <>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{i_list}</ul>
                {i_list.length>2 &&
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecipe}>Get a recipe</button>
                </div>
                }
            </section> 
        </>
    )
}