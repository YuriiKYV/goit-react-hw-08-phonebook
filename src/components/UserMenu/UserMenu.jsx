import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/auth-operations";
import { getUserEmail } from "redux/auth/auth-selectors";
import css from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();
    const userEmail = useSelector(getUserEmail);


    const onLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={css.userMenu}>
            <p className={css.userMenuEmail}>{userEmail}</p>
            <button className={css.userMenuBtn} onClick={onLogout}>Logout</button>
        </div>
    )
};