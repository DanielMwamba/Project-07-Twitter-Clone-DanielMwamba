import React from 'react';
import profile from '../images/profile-photo.png';
import media from '../icons/Media.png';
import gif from '../icons/Gif.png';
import poll from '../icons/Poll.png'
import emoji from '../icons/Emoji.png';
import schedule from '../icons/Schedule.png';


function tweetsEditor() {
    return (
        <>
           <div className='tweet-editor'>
                <img src= {profile} alt="" className='avatar'/>
                <div className='tweet-editor-form'>
                    <input type="text" placeholder="What's happenning?" className='tweet-editor-input'/>
                    <div className='tweet-editor-buttons'>
                        <div className='tweet-editor-actions'>
                        <img src={media} alt="" />
                        <img src={gif} alt="" />
                        <img src={poll} alt="" />
                        <img src={emoji} alt="" />
                        <img src={schedule} alt="" />   
                    </div>
                    <button className='button'>Tweet</button>
                </div>
                </div>
                
            
           </div>
        </>
    );
}


export default tweetsEditor