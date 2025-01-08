import { useState } from "react"

export default function Joke(props)
{

    const [isShown,setisShown] = useState(false)

    function toggle()
    {
        setisShown(pre=>!pre)
        console.log(isShown)
    }

    return (
        <>
        <hr></hr>
            { props.setup && <h2> {props.setup} </h2> }
            {isShown && <p> {props.punchline} </p> }
            <button onClick={toggle}>{isShown?"hide":"show"}</button>
        </>
    )
}