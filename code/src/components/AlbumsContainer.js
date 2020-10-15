import React from "react"
import { AlbumCard } from "./AlbumCard"
import "./albumcontainer.css"

export const AlbumsContainer = props => {

  const { albums } = props
  // albums = items
  
  return (
    <section className="albums-container">
      {albums.map(album => {
        return (
          <AlbumCard key={album.id} album={album}/>
      )
      }

      )}
      
    </section>
  )
}


