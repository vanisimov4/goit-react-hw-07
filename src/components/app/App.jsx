import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import "./App.css";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="mainWrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length && <ContactList />}
    </div>
  );
}

export default App;
