import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"

export const loader = async({ params }) => {
  const album = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.id}`
  ).then((response) => {
    if (!response.ok)
      throw new Error()
    return response.json()
  })
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${album.userId}`
  ).then((response) => response.json())
  const photosPromise = fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
  ).then((response) => response.json())
  return { user, album, photosPromise }
}

function UserAlbum () {
  const data = useLoaderData()
  const user = data.user
  const album = data.album
  const photosPromise = data.photosPromise

  if(!data) return <div>Loading...</div>

  return( 
    <Suspense fallback={
      <div>
        Loading...
      </div>}>
      <div className="user-album">
        <h4> {album.title[0].toUpperCase() + album.title.slice(1)} </h4>
        <p> <span>Created by:</span> {user.name} </p>
        <div className="photos">
          <Await resolve={photosPromise}>
              {(photos) =>
                photos.map(photo => (
                  <img 
                    src={photo.thumbnailUrl}
                    alt='Img'
                  />
                ))
              }
          </Await>
        </div>
      </div>
    </Suspense>
  )
}

export default UserAlbum
