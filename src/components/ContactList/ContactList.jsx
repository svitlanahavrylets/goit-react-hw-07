// import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { filterValue } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const value = useSelector(filterValue);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => {
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
