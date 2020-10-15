import React from "react";
import "./albumcard.css"
import { Images } from "./Images"
import { Title } from "./Title"

export const AlbumCard = props => {

  const img = props.album.images[0].url
  const album = props.album

  return (
    <article className="album-card">
      {/* sending img url as props */}
      <Images img={img} />
      {/* sending albums as props */}
      <div className="title">
        <Title album={album} /> 
      </div>
    </article>
  )
}





