import { useDispatch, useSelector } from "react-redux";
import { signup } from "redux/auth/auth-operations";
import { isLogin } from "redux/auth/auth-selectors";
// react-router
import { Navigate } from "react-router-dom";
// components
import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from '../RegisterPage/RegisterPage.module.css';

export default function RegisterPage() {
    const dispatch = useDispatch();
    const isUserLogin = useSelector(isLogin);

    const onRegister = (data) => {
        dispatch(signup(data));
    }

    if (isUserLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <div className='container'>
            <h1 className={css.registerTitle}>Register page</h1>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
}