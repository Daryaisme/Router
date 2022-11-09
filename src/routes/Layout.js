import { Outlet, NavLink } from 'react-router-dom'

function Layout () {
  return (
    <div className='container'>
      <header className='header'>
        <NavLink to='/albums' 
          end={true}
          className={({ isActive }) => isActive ? 'link-active' : 'link-passive'}>
            Albums
        </NavLink>
        <NavLink to='/'
          end={true}
          className={({ isActive }) => isActive ? 'link-active' : 'link-passive'}>
            Users
        </NavLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className='line'></div>
        <div className='footer'>
          <p>Created by: Suravtsova Darya</p>
          <p>BSU: 2022</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
