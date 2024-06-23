import React from "react";
import '../css/clientpage.css';
export class Client extends React.Component{
    render(){
        return(
            <div className="regformcontainer">
                <form className="regform">
                    <input type="text" placeholder="Name" />
                    <input typr="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Confirm Password" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}