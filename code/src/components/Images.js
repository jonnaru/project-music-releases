import React from "react"
import "./images.css"
import { Play, Heart, Dots } from "./Icons"


export const Images = (props) => {

  const img = props.img
  
  // const cardStyle = { 
  //   backgroundImage: `url(${img})`
  // }

  // style={cardStyle}

  return (
    <div className="imageContainer">
      <img className="albumCover" alt="album cover" src={img}></img>
      <div className="icons">
        <span className="heart">
          <Heart />
        </span>
        <span className="play">
          <Play />
        </span>
        <span className="dots">
          <Dots />
          </span>
      </div>
    </div>
  )

}