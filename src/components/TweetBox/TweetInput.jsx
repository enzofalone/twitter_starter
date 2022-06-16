import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {
  let [expanded, setExpanded] = React.useState(false);
  let textarea = document.querySelector("textarea");

  const inputFocus = (e) => {
    if(!e.target.classList.contains("expanded")){
      setExpanded(true)
      e.target.classList.add("expanded");
    }
  }

  const inputBlur = (e) => {
    if(e.target.classList.contains("expanded")){
      setExpanded(false)
      e.target.classList.remove("expanded");
    }
  }

  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea name="new-tweet-input" type="text" onFocus={inputFocus} onBlur={inputBlur} placeholder="What's Happening?" value={props.value} onChange={props.handleOnChange}></textarea>
      
      {<Icon isExpanded={expanded}/>}
    </div>
  )
}
export const Icon = ({isExpanded = false}) => isExpanded ? <i className="fas fa-image"></i> : <i className="fas fa-smile"></i>
export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>