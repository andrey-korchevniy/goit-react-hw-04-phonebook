import React, { Component } from "react";
import  {ContactForm}  from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  // завантажуємо масив контактів з локал сториз
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState({ contacts: contacts })
    };
  }

  // записуємо змінені контакти до локал сторіз
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  // обробляємо додавання нового контакту
  addContact = (formName, formNumber) => {
    this.setState(prevState => ({
    contacts: [{ id: nanoid(), name: formName, number: formNumber }, ...prevState.contacts],
    }));
  }

  // обробляємо кожне натискання в полі "фільтр"
  handleInputFilter = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }

  // обробляємо натискання "видалити контакт"
  deleteContact = (contactId) => {
    this.setState(prevState => (
      {contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    )) 
  }

  render() {
    const { filter, contacts } = this.state;

    return (
      <div>
{/* форма им'я-телефон */}
        <ContactForm
          onSubmit={this.addContact}
          contacts={contacts}
        />
 
        <h2>Contacts</h2>
{/* форма фільтру */}
        <Filter
          value={filter}
          onChange={this.handleInputFilter}
        />

{/* виводить повний список або отфільтровані контакти */}
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
        
      </div>
    )
  }
}

export default App;