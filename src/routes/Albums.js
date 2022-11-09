import { Link, useLoaderData } from "react-router-dom"
import albumIcon from '../images/album-icon.png'

export const loader = async () => {
  const albums = await fetch (
    `https://jsonplaceholder.typicode.com/albums`
  ).then((response) => response.json())
  return albums
}

function Albums () {
  const albums = useLoaderData()
  return (
    <div>
      {
        albums.map((album) => (
          <div className='album'>
              <img
                width='20px'
                height='20px'
                src={albumIcon}
                alt='Icon of album'
              />
              <Link
                key={album.id}
                to={`/albums/${album.id}`}
              > 
                {album.title[0].toUpperCase() + album.title.slice(1)} 
              </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Albums
