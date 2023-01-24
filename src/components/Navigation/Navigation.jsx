import { Link } from 'react-router-dom';
import { PhoneIcon } from '@chakra-ui/icons'

// import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavigationAuth from './NavigationAuth/NavigationAuth';
import UserMenu from '../UserMenu/UserMenu';
import useAuth from 'shared/hooks/useAuth';
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
    const isLogin = useAuth();


    return (
        <nav>
            <div className="header">
                <div className={css.navigation}>
                    <Link className={css.logo} to="/">PHONE<span><PhoneIcon h={15} /></span>BOOK</Link>
                    {isLogin && <Link className={css.navigationContactsLink} to="/contacts">Contacts</Link>}
                    {isLogin ? <UserMenu /> : <NavigationAuth />}
                </div>
            </div>
        </nav>
    )
}

export default Navigation;