import React from "react";
// Class based component

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2:1,
            userInfo: {
                name: "Dummy"
            },
        }
    }

       async componentDidMount() {
        const data = await fetch ("https://api.github.com/users/Nehasingh231")
        const json = await data.json();

       this.setState({
        userInfo: json,
       });

       console.log(json)
       } 

    render () {
       const {name, location} = this.props;
       const {count, count2} = this.state;
        return (
            <div className="user-card">
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <button onClick={ () => {
                  this.setState({
                    count: this.state.count+1,
                  })
            }} >Count Increase</button>
            <h3>{this.state.userInfo.name}</h3>
            
            <h3>Location: {location}</h3>
            <h4>Content: @Nehasingh231</h4>
            </div>
        );
    }
}

export default UserClass;