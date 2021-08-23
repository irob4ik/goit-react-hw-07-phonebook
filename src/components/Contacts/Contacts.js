import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { contactsOperations, contactsSelectors } from '../../redux';
import actions from '../../redux/phonebook-actions';
import styles from './contacts.module.css'

export default function Contacts() {
    const dispatch = useDispatch();
    const { items, filter } = useSelector(contactsSelectors.getContacts);
    const list = filteredContacts(items, filter);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

    return (
        <>
            <ul className={styles.list}>
                {list.map(({ number, name }) => (
                    <li key={number} className={styles.listItem}>
                        <p className={styles.contactName}>{name}: {number}</p>
                        <button
                            className={styles.contactBtn}
                            onClick={() => dispatch(actions.deleteContact(number))}
                        >Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
};

const filteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter));    
};