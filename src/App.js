import React from 'react';
//import Animatedlabel from "./component/animatedlabel";
import TextTransition from "./component/TextTransition";


const app = () => {
  return (
    <div>
    <div class="container">
        <h1>Please Login</h1>
        <form>
            <div className="form-control">
                <input type="text" required></input>
                <label> <TextTransition text="Email"/> </label>
            </div>

            <div className="form-control">
                <input type="password" required></input>
                <label><TextTransition text="Password"/>  </label>
            </div>

            <button className="btn">Login</button>

            <p className="text">Don't have an account? <a href="#Register">Register</a></p>

        </form>
    </div>
      
    </div>
  )
}

export default app
