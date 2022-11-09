import { Link } from 'react-router-dom'

function Error () {
  return (
    <div className="error">
      <h4> 404 </h4>
      <h3> Page not found </h3>
      <div>
        <p> Go to page </p>
        <Link to='/albums'> Albums </Link>
      </div>
    </div>
  )
}

export default Error
