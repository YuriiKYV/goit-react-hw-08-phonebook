import { Navigate } from "react-router-dom";
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import useAuth from 'shared/hooks/useAuth';
import css from '../Contacts/Contacts.module.css'


const Contacts = () => {
    // const isLogin = useAuth();

    // if (!isLogin) {
    //     return <Navigate to="/login" />
    // }

    return (
        <div className={css.contacts}>
            <h1 className={css.contactsTitle}>Phonebook</h1>
            <ContactForm></ContactForm>

            <h2 className={css.contactsFilter}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
};
export default Contacts;
