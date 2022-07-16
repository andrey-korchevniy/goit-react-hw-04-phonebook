import React from "react";
import PropTypes from 'prop-types';
import { Button } from "components/ContactForm/ContactForm.styled"

export const ContactElement = ({ contact, onDeleteContact }) => {
    const { name, number, id } = contact;
    return (
        <li>
            {name}: {number}
            <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </li>)
}

ContactElement.propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
