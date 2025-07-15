import { useState } from "react";

function UserForm(){
    const [name,setName] = useState("");
    const[email,setMail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name:${name}, Email: ${email}`);
        setName("");
        setMail("");
        setMsg("");

    }

    return(
        <div style={{ border: '1px solid orange', padding: '15px', margin: '10px' ,borderRadius:'15px'}}>
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div style={{ marginTop: '10px' }}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e)=>{setMail(e.target.value)}} />
                </div>
                <div>
                    <label>MESSAGE:</label>
                    <input type="text" value={msg} onChange={(e)=>{setMsg(e.target.value)}} />
                </div>
                <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
            </form>
            <h4 style={{ marginTop: '10px' }}> Name: {name}</h4>
            <h4> Email: {email}</h4>
            <h4> Message: {msg}</h4>
        </div>
    )
}

export default UserForm;