import { ButtonTweet } from '../components';
import {TweetEditorActions} from '../components';

function TweetEditorButtons() {
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions/>
            <ButtonTweet style={"button"}/>
        </div>
    )
}

export default TweetEditorButtons ;