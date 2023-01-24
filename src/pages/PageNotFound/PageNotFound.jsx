import { Link } from "react-router-dom";
import css from '../PageNotFound/PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className="container">
            <h1 className={css.notFoundTitle}>Page not found</h1>
            <Link className={css.notFoundLink} to="/">To home page</Link>
        </div>
    )
}

export default PageNotFound;