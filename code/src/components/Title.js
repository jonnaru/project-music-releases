import React from "react"
import "./title.css"

export const Title = (props) => {

  const title = props.album.name
  const artists = props.album.artists
  const href = props.album.external_urls.spotify
  const artistURL = props.album.artists[0].external_urls.spotify

  const punctuation = (index) => {
    const length = artists.length

    if (index === length - 1) return ""
    if (index === length - 2 ) return " & "

    return ", "
  }

    return (
      <article>
        <a href={href}>
          <h1 className="album-title">{title}</h1>
        </a>
        {artists.map((artist, index) => {
          return (
            
              <p className="artist-title" key={artist.name}>
                <a href={artistURL}>{artist.name}</a>{punctuation(index)}
              {/* envoking punctuation function with artist index (in artists array) */}
              </p>
            
          )
        })}
      </article>
    )
}