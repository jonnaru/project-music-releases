import React from 'react'
import data from './data.json'
import "./app.css"
import { AlbumsContainer } from "./components/AlbumsContainer"
import { Header } from 'components/Header'


console.log("data", data)

export const App = () => {
  // Sending data to AlbumContainer as props named "albums"
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <AlbumsContainer albums={data.albums.items}/> 
      </main>
    </>
  )
};







