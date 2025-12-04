import './header.css'
import LetterLink from './letterlink/LetterLink'
import Dashboard from './dashboard/IconLink'

function Header() {
  return (
    <header className='header'>
      <div>
        <LetterLink text="Artur Belotserkovskiy" url="/"></LetterLink>
      </div>
      <div>
        <Dashboard></Dashboard>
      </div>
    </header>
  )
}

export default Header
