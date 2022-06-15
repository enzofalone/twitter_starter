import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  const MAX_CHARACTERS_TWEET = 140;

  // disable TweetSubmitButton button based on the length of the string within the textarea 
  const isTweetSubmittable = !((props.tweetText.length > 0) && (props.tweetText.length <= MAX_CHARACTERS_TWEET)); 

  const handleOnSubmit = () => {
    let newTweet = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    }

    //add new tweet into the state
    props.setTweets(e => [...e, newTweet]);
    //reset textArea by resetting the state
    props.setTweetText('');
  }

  const handleOnTweetTextChange= (e) => {
    props.setTweetText(e.target.value);
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} setTweetText={props.setTweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetLength={props.tweetText.length}/>
        <TweetSubmitButton isTweetSubmittable={isTweetSubmittable} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  const MAX_CHARACTERS = 140;

  let charsLeft = MAX_CHARACTERS - props.tweetLength;

  return charsLeft >= MAX_CHARACTERS ? <span></span> : <span>{charsLeft}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div  className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button disabled={props.isTweetSubmittable} onClick={props.handleOnSubmit} className="tweet-submit-button">Tweet</button>
    </div>
  )
}
