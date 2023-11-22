import { profilePhoto, image1, imageTweet} from "../images" ;
import { vector, reply, retweet, react, share} from "../icons";

const tweetsData = [
    {
      id: 1,
      avatar: profilePhoto,
      Image: null,
      title : "CNN",
      titleDescription: 'CNN . 7m',
      imgverified: vector,
      content: 'President Joe Biden touted a new agreement reached whith the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
      details: {
        actionCountRetweets: 144,
        actionCountComments: 57,
        actionCountLikes: 184,
        actionCountShares: null,

      },

      iconAction: {
        iconReply: reply,
        iconRetweet: retweet,
        iconReact: react,
        iconShare: share,

      }
    },

    {
      id: 2,
      avatar: image1,
      Image: imageTweet ,
      title: "The New York Times",
      titleDescription: '@nytimes . 2h',
      imgverified: vector,
      content: 'Gardening boomed during the pandemic. Six Black writers share how has helped re-establish, and reimage, a connection to cultivation and the land.',
      details: {
        actionCountRetweets: 48,
        actionCountComments: 19,
        actionCountLikes: 482,
        actionCountShares: null,

      }
    },
    // ... Autres tweets
  ];

  export default tweetsData
