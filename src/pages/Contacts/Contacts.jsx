import { ContactForm } from 'components/ContactsForm/ContactsForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
// import { useSelector } from 'react-redux';
// import { SelectVisibleContacts } from 'redux/Contacts/selectors';

const Contacts = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </>
  );
};

export default Contacts;
