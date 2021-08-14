import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu mode='horizontal' theme='dark' >
            <Menu.Item>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/vaccination-places'>Vaccination Places</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/appointments'>Appointment</Link>
            </Menu.Item>
        </Menu>
    );
}
 
export default NavBar;
