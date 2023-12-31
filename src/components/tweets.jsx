import React from 'react';
import { Tweet } from "../components"
import tweetsData from "./tweetsData";


function Tweets() {

  return (

    <>
      <div>
        {tweetsData.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>

    </>
  );
}


export default Tweets;