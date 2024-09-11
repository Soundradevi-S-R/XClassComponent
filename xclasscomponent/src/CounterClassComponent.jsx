import React from "react";

class CounterClassComponent extends React.Component{    
   
   constructor(props){
    super(props);
    this.state = {
        count : 0,
    };
   }

    updateCount = (e)=>{
        if(e.target.name === "increment"){
            console.log("clicked increment")
            this.setState(prevState => ({count : prevState.count +1}));

        }else if (e.target.name === "decrement"){
            console.log("clicked decrement")
            this.setState(prevState => ({count : prevState.count-1})); //function call or assignment () =>({}) on 

        }
    };

    render (){
        return <div>
            <h1>Counter App</h1>
            <br/>
        <h3>Count: {this.state.count}</h3>
        <br/>
        <button name="increment" 
                onClick={this.updateCount} 
                style={{width:"100px",height:"40px", }}>Increment</button>
        <button name="decrement" 
                onClick={this.updateCount} 
                style={{width:"100px",height:"40px", }}>Decrement</button>
        </div>
    }
}

export default CounterClassComponent;