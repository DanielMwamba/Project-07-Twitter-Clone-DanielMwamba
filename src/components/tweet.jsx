import React from "react";

function tweet({tweet}) {
    return(
        <div className="tweet-content">
            <img src={tweet.avatar} alt="" className="tweet-avatar" />
            <p className="tweet-title">{tweet.title} </p>
            <p>{tweet.content} </p>
        </div>
    )
}

export default tweet