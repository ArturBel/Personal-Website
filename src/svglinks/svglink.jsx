import './svglink.css'
import { ReactComponent as GitHub } from './icons/github.svg';
import { ReactComponent as LinkedIn } from './icons/linkedin.svg';


function SvgDashboard() {
    return(
        <ul className='svgdashboard'>
            <li>
                <SvgLink
                url="https://github.com/ArturBel"
                svg={<GitHub></GitHub>} />
            </li>
            <li>
                <SvgLink
                url="https://www.linkedin.com/in/artur-belotserkovskiy-346135274/"
                svg={<LinkedIn></LinkedIn>} />
            </li>
        </ul>
    )
}


function SvgLink({ url, svg }) {
    return(
        <a href={ url } className='svg-link'>
            <div className='icon'>{ svg }</div>
        </a>
    )
}


export default SvgDashboard