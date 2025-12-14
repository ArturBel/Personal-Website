import './aboutme.css'
import areeb from './images/areeb.jpeg'


function AboutMe() {
    return(
        <div className='aboutme'>
            <div className='separator'></div>
            <div className='section-container'>
                <h1>About me</h1>
            </div>
            <div className='content'>
                <div className='picture-part'>
                    <figure className='snip'>
                        <img src={areeb} alt="Avatar" class="image"></img>
                    </figure>
                </div>
                <div className='text-part'>
                    <h1 class="cyberpunk glitched">I am Artur, a beginner Full-Stack Developer with big goals and a growing skill set.</h1>
                    <p className='cyberpunk'>I might still be a beginner, but I approach every challenge with focus, responsibility, and the determination to improve. Think of me as a dev in “early access mode” — already functional, constantly updating.</p>
                    <p className='cyberpunk'>And yes, i have a long surname. Just call me Artur if you wish.</p>
                </div>
            </div>
        </div>
    )
}


export default AboutMe