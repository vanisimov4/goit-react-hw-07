import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import css from './ContactList.module.css';

function getFilteredContacts(contList, searchValue) {
  return contList.filter(contact =>
    contact.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
}

const ContactList = () => {
  const contList = useSelector(state => state.contacts.items);
  const searchValue = useSelector(state => state.filters.name);
  const visibleContacts = getFilteredContacts(contList, searchValue);
  return (
    <ul className={css.contactList}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
