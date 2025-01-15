import { useState } from "react"
import { useEffect } from "react"
export default function Window(){
    const[windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
        setWindowWidth(window.innerWidth)
        })
    },[windowWidth])
    return (
        <div>
            <h1>window width : {window.innerWidth}</h1>
        </div>
    )
}