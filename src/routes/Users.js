import { useLoaderData, Link } from "react-router-dom"

export const loader = async () => {
  const users = await fetch (
    `https://jsonplaceholder.typicode.com/users`
  ).then((response) => response.json())
  return users
}

function Users () {
  const users = useLoaderData()

  return (
    <div className="users">
      {
        users.map((user) => (
          <Link
            key={user.id}
            to={`/${user.id}`}
          >
            {user.name}
          </Link>
        ))
      }
    </div>
  )
}

export default Users
