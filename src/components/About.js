import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About =()=> {
    return (
        <div>
        <h1>About</h1>
        <h2>
         This is React Web Series</h2>
       <User name={"neha singh" }/>
        <UserClass name={"neha singh (class compo)"} location={"Siwan, Bihar"} />
        </div>
    );
};

export default About;