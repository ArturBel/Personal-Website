import './frontpage.css'
import Typewriter from './typewriter/typewriter'


function Frontpage() {
    return(
        <div className='frontpage'>
            <Typewriter text="CRAFTING DIGITAL" className="first-row" />
            <Typewriter text="EXPERIENCES_" className="second-row" initialDelay={800}/>
            <p className="description">Hi, I am&nbsp;<span className="ascent"> Artur Belotserkovskiy </span>. Full-Stack Developer, who enjoys building apps that work hard — and look good doing it.</p>
        </div>
    )
}

export default Frontpage