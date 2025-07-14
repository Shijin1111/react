import { useState } from "react";



function Like_togglemsg() {
    const [likes,addLikes] = useState(0);
    const [toggle, setToggle] = useState(true);
    let msg;
    if (toggle=== true) {
        msg = "Hide";
        }
    else {
        msg = "Show";
    }
    return (
        <div className="like-toggle">
            <h4>Likes : {likes}</h4>
            <button onClick={() => {
                addLikes(likes+1);
            }}>👍</button>
            
            <button onClick={()=>{
                        setToggle(!toggle);
                    }}>
                        {msg}
                {/* {toggle ? "Hide" : "Show"} */}
            </button>
            {toggle && <h4 style={{display:{toggle}}}>MESSAGE</h4>}
            </div>
    )
}

export default Like_togglemsg;