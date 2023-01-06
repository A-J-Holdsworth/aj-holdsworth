import { Avatar } from '@mui/material';
import './Header.scss';
import Menu from './Menu';

const Header = () => {

    return (
        <div className='header-cont'>
            <div className="header">
                <Avatar className='avatar'>AH</Avatar>
                <span className='name'>COMP NAME</span>
                <Menu />
            </div>
        </div>
    )
}

export default Header;