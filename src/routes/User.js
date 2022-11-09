import { Link, useLoaderData } from 'react-router-dom'
import albumIcon from '../images/album-icon.png'

export const loader = async ({ params }) => {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((response) => {
    if (!response.ok)
      throw new Error()
    return response.json()
  })
  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${params.id}`
  ).then((response) => response.json())
  return { user, albums }
}

function User () {
  const data = useLoaderData()
  const user = data.user
  const albums = data.albums

  if(!data) return <div>Loading...</div>

  return (
    <div className='user'>
        <h2 className='name'> {user.name} </h2>
        <p> Username: {user.username} </p>
        <p> Email: <span> </span>
          <a className='email' href={'mailto:' + user.email}>{user.email} </a>
        </p>
        <p> Phone: {user.phone} </p>
        <p> Site: <span> </span>
          <a className='website' href={'http://' + user.website}>{user.website} </a>
        </p>
        <div className='albums'>
          <h4> Albums </h4>
          {
            albums.map(album => (
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
    </div>
  )
}

export default User