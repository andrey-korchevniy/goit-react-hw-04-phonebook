import React from "react";
import PropTypes from 'prop-types';
import { Label, Button } from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    number: yup.number().required()
})

export const ContactForm = ({ onSubmit, contacts }) => {
    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        if (contacts.map(el => el = el.name).includes(name) ||
            contacts.map(el => el = el.number).includes(number)) {
            alert(`This contact is already in contacts`)
        }
        else {
            onSubmit(name, number);
            resetForm()
        }       
    };

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema = {validationSchema}
            onSubmit={handleSubmit}>
            <Form >
                <Label htmlFor='name'>
                    Name
                    <Field
                        type="text"
                        name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <ErrorMessage name="name" />
                </Label>
                <Label htmlFor='number'>
                    Number
                    <Field
                        type="tel"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <ErrorMessage name="number" />
                </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
        </Formik>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired
}
