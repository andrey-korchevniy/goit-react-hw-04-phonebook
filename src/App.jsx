import { useState, useEffect  } from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // завантажуємо масив контактів з локал сториз
  useEffect(() => {
    const contactsStore = JSON.parse(localStorage.getItem("contacts"));
    if (contactsStore) {
      setContacts(contactsStore);
    };
  }, []);

  // записуємо змінені контакти до локал сторіз
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

  // обробляємо додавання нового контакту
  const addContact = (formName, formNumber) => {
    setContacts([{ id: nanoid(), name: formName, number: formNumber }, ...contacts]
    );
  }

  // обробляємо кожне натискання в полі "фільтр"
  const handleInputFilter = e => {
    setFilter(e.currentTarget.value);
  }

  // обробляємо натискання "видалити контакт"
  const deleteContact = (contactId) => {
    setContacts(prev => (prev.filter(contact => contact.id !== contactId))) 
  }

  return (
      <div>
{/* форма им'я-телефон */}
        <ContactForm
          onSubmit={addContact}
          contacts={contacts}
        />
 
        <h2>Contacts</h2>
{/* форма фільтру */}
        <Filter
          value={filter}
          onChange={handleInputFilter}
        />

{/* виводить повний список або отфільтровані контакти */}
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        />
        
      </div>
    )
}
