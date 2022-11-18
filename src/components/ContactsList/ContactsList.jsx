import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { SelectVisibleContacts } from 'redux/Contacts/selectors';

export const ContactList = () => {
  const list = useSelector(SelectVisibleContacts);

  return (
    <>
      {list && (
        <ListContacts>
          {list.map(({ id, name, number }) => (
            <ContactPerson key={id} id={id} name={name} number={number} />
          ))}
        </ListContacts>
      )}
    </>
  );
};
