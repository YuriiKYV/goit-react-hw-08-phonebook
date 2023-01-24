import css from '../Home/Home.module.css'

const HomePage = () => {
    return (
        <div className="container">
            <p className={css.homeTitle}>Hello. To use our application, you need to log in or register</p>
        </div>
    );
};

export default HomePage;
