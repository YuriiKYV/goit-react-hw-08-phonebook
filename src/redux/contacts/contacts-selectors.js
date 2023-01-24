export const getContacts = ({contacts}) => contacts.items;

export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const getAllContacts = ({ contacts, filter }) => {
        return contacts.items;

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({name, number}) => {
        const normalizedTitle = name.toLowerCase();
        const normalizedAuthor = number.toLowerCase();
        return (normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter));
    });

    return result;
}