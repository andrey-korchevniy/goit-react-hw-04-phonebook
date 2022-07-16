import React from "react";
import {ContactElement} from "components/ContactList/ContactElement/ContactElement.jsx";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
    const contactForRender = contacts.filter(contact => ((contact.name).includes(filter) || (contact.number).includes(filter)));

    if (contactForRender.length !== 0) {
        return (
            <ul>
                {contactForRender.map(contact =>
                    <ContactElement
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                    />)
                }
            </ul>
        )
    } 
    else return (
        <h3> There is no contacts</h3>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
}