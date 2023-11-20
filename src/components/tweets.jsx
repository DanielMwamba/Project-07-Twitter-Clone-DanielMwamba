import Tweet from "./tweet";
import avatar from "../images/tweet-profile-photo.png";

function tweets() {
    const tweetsDatas = [
        {
            id: 1,
            avatar: "../images/tweet-profile-photo.png" ,
            title: "CNN",
            content: "Contenu du premier tweet",
            
        },

        {
            id: 1,
            avatar: "../images/tweet-profile-photo.png",
            title: "CNN",
            content: "Contenu du premier tweet",
            
        }
    ];

    return(
        <div className="tweets">
            {tweetsDatas.map(tweet =>(
                <Tweet key= {tweet.id} tweet= {tweet} />
            ))}
        </div>
    )
}

export default tweets
