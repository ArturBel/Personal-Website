import './IconLink.css'
import { ReactComponent as AboutIcon } from './icons/about.svg';
import { ReactComponent as ExpIcon } from './icons/exp.svg';
import { ReactComponent as ConnectIcon } from './icons/connect.svg';

function Dashboard() {
    return(
        <ul className='dashboard'>
            <li>
                <IconLink 
                text="About me" 
                url="/about"
                svg={<AboutIcon></AboutIcon>}
                />
            </li>
            <li>
                <IconLink
                text="Experience"
                url="/experience"
                svg={<ExpIcon></ExpIcon>}
                />
            </li>
            <li>
                <IconLink
                text="Connect"
                url="/connect"
                svg={<ConnectIcon></ConnectIcon>}
                />
            </li>
        </ul>
    )
}

function IconLink({ text, url, svg }) {
    return(
        <a href={ url } className='icon-link'>
            <div className='icon'>{ svg }</div>
            <div className='label'>{ text }</div>
        </a>
    )
}

export default Dashboard