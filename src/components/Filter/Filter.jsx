import React from "react";
import PropTypes from 'prop-types';
import { InputFilter } from "components/ContactForm/ContactForm.styled";

export const Filter = ({ value, onChange }) => {

    return (
        <label>
                Find Contacts by Name
            <InputFilter
                type="text"
                name="filter"
                onChange={onChange}
                value={value}
            />
        </label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}