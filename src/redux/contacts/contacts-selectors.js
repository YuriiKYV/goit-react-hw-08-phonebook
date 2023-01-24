export const getContacts = ({contacts}) => contacts.items;

export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const getAllContacts = ({ contacts }) => {
        return contacts.items;
}