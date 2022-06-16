import * as React from "react"
import "./AvatarIcon.css"
import {codepathUserProfile} from "../../constants"

export default function AvatarIcon(props) {
  return (
    <span className="avatar-icon fa-stack">
      <i className="fas fa-circle fa-stack-2x">
        { <img className="fas fa-user fa-stack-1x" src={codepathUserProfile.profilePicture}/> || <i className="fas fa-user fa-stack-1x"></i>}
      </i>
    </span>
  )
}
