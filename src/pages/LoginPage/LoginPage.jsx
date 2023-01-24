// import css from '../LoginPage/LoginPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/auth/auth-operations";
import { isLogin } from "redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";
import LoginForm from 'components/LoginForm/LoginForm';
import { nanoid } from 'nanoid';
import css from '../LoginPage/LoginPage.module.css';

export default function LoginPage() {
    const dispatch = useDispatch();
    // const isUserLogin = useSelector(isLogin);

    const onLogin = (data) => {
        dispatch(login(data));
    }

    // if (isUserLogin) {
    //     return <Navigate to="/contacts" />
    // }

    return (
        <div className={css.loginPage}>
            <h1 className={css.loginTitle}>Login page</h1>
            <LoginForm onSubmit={onLogin} />
        </div>
    )
}