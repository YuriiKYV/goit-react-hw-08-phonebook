// import css from '../LoginPage/LoginPage.module.css';
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";

import LoginForm from 'components/LoginForm/LoginForm';

import css from '../LoginPage/LoginPage.module.css';

export default function LoginPage() {
    const dispatch = useDispatch();


    const onLogin = (data) => {
        dispatch(login(data));
    }



    return (
        <div className={css.loginPage}>
            <h1 className={css.loginTitle}>Login page</h1>
            <LoginForm onSubmit={onLogin} />
        </div>
    )
}