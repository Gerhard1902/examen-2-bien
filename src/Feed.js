import React, { Component } from 'react';
import './App.css';
import Tweet from './Tweet';

function EmptyState(props) {


  return (
    <div className="dummy-tweet row">
      Loading...
    </div>
  )
}


class Feed extends Component {

  constructor(props){
    super(props);
    
  }
  
  render() {
    return(
      <ul className="feed">
        {/* CONDITIONAL RENDERING */}
        {!this.props.isLoaded && <EmptyState />}

        {
          this.props.tweets.map((tweet, index) => (
            <div>
            <Tweet 
              key={tweet.id}
              obj={tweet}
              
              // user={tweet.user_name}
              // userPic={tweet.avatar}
              // content={tweet.description}
              // createdAt={tweet.created_at}
            />
            <button onClick={(e)=>this.props.handleDelete(tweet.id, index)}>Delete</button>
            </div>
          ))
        }
      </ul>
    )
  }
}

export default Feed;
