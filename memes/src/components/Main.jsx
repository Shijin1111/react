import { useState } from "react"

export default function Main() {

    const [meme,setmeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    })

    function handleChange(event)
    {
        const {name,value} = event.target
        // or just do this ::  const value = event.target.value
        setmeme((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}