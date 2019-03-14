import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import llama from "./llama.jpg";


class Bar extends Component{ // function sintax
  render(){
  return(
        <div>
          <img className="llama" src={llama} />
        </div> 
  );
  }
}


function Tweets (props){ // function sintax
  return(
    <div className="tweet2">
      <img className="llama" src={llama} />
      <div className="column">
        <div>{props.name}</div>
        <div>{props.message}</div> 
      </div>
      <div className="date">{props.date}</div>
      
    </div>
  );
}



class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      tweets: []
      };
      this.myRef= React.createRef();
  }

handleClick =()=>{
 
   const tweets = this.state.tweets.slice();
    this.myRef.current.focus();
    this.setState({
      tweets: [...tweets, {name:"Gerardo", date:"11-03-2019", message:this.myRef.current.value} ],
    } );
    this.myRef.current.value="";
    
}


 handleChange =()=>{
   this.myRef.current.focus();
}


    render(){
      const array = this.state.tweets;
      const myTweets = array.map((step, index) => {
        return (
          <Tweets 
                className="actualTweet"
                name={this.state.tweets[index].name} 
                date={this.state.tweets[index].date}
                message={this.state.tweets[index].message} 
              />
        );
       });
      return(
          <div >
          <div>
            <div className="tweet">
              <Bar
                ref={this.myRef} 
                onClick={()=> this.handleClick() } 
                onChange={()=> this.handleChange()}
              />
              <div className="upperBar">
                <input className="text"type="text" ref={this.myRef} placeholder="What´s happening?" onChange={()=>this.handleChange()}  />
                <button className="myButton"onClick={()=>this.handleClick()}>Tweet</button>
              </div>
            </div>
            </div>

            <div className="actualTweet">
              {myTweets}
            </div>
          </div>
      );
    }
}

export default Dashboard;

//<input type="text" value={this.state.value} onChange={this.handleChange} />



