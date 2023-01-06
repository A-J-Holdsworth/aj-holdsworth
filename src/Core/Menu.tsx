import StyledLink from '../Shared/StyledLink';
import './Menu.scss';

const Menu = () => {

    return (
        <nav>
            <ul>
                <li>
                    <StyledLink to='/'>Home</StyledLink>
                </li>
                {/* <li>
                    <StyledLink to='/about'>About</StyledLink>
                </li> */}
                <li>
                    <StyledLink to='/contact'>Contact</StyledLink>
                </li>
                <li>
                    <a href='tel:07968814135' className='phone'>
                        Call: 079 688 141 35
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;