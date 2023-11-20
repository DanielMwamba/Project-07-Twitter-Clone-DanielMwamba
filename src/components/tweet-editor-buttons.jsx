import media from '../icons/Media.png';
import gif from '../icons/Gif.png';
import poll from '../icons/Poll.png'
import emoji from '../icons/Emoji.png';
import schedule from '../icons/Schedule.png';

function tweetEditorbuttons() {
   return(
    <div className='tweet-editor-buttons'>
                    <div className='tweet-editor-actions'>
                        <img src={media} alt="" />
                        <img src={gif} alt="" />
                        <img src={poll} alt="" />
                        <img src={emoji} alt="" />
                        <img src={schedule} alt="" />
                    </div>
    </div>
   ) 
}

export default tweetEditorbuttons
