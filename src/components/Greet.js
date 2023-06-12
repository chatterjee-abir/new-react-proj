import React, {Component} from "react";

class Greet extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    increaseCount(){
            //this.state.count = this.state.count + 1
            this.setState(prevState => ({
              count : prevState.count + 1
            }))
            console.log(this.state.count)
    }

    increaseFive(){
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }

    render(){
        return (
            <div>
                <h1>Count = {this.state.count} </h1>
                <button onClick={()=>this.increaseFive()}>Increment</button>
            </div>
        ) 
    }
        
        
}







export default Greet