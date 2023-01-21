import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';

export default function ContactList() {

  const contacts = useSelector(store => store.contacts.items);
  const filterValue = useSelector(store => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const getFilteredContacts = () => {
    if (!filterValue) {
      return contacts;
    }

    const normalizedFilter = filterValue.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const resault = normalizedName.includes(normalizedFilter);
      return resault;
    });

    return filteredContacts;
  }

  const filterContacts = getFilteredContacts();

  const items = filterContacts.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
    );
  });
  return <ul>{items}</ul>;
}

