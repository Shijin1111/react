import { useState } from 'react';
import './App.css';

function App() {
  function signUp(event) {
    event.preventDefault(); 
    const formdata = new FormData(event.currentTarget);
    const email = formdata.get("email");
    const password = formdata.get("pswd");
    console.log("Email:", email);
    console.log("Password:", password);
    event.reset()
  }

  return (
    <>
      <h1>Sign up</h1>
      <div className="container">
        <form onSubmit={signUp}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pswd">Password:</label>
            <input type="password" id="pswd" name="pswd" />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
