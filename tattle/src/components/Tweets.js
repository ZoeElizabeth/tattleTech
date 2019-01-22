import React, { Component } from "react";
import '../styles_css/Tweets.css';
import jsonSample from '../sample-tweets.json'

const sampleData = tweets(jsonSample);

function tweets(item) { 
  console.log(item)
  return item.map(item => 

<article>
          <aside>
            <div className="profile"></div>
          <img scr={item.user.avatars.small} height="50px" width="50px"></img>
          <div>{item.user.handle}</div>

          </aside>
          <div>
            <div class="userTweet">{item.content.text}</div>
           <div className="footer">{Date(item.created_at)},  Heart</div> 
</div>
</article>
)
}


class Tweets extends Component {
  render() {
    return (
      <div className="tweet">
      {sampleData}
      </div>
    );
  }
}

export default Tweets;
