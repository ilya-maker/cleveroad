// Core
import React from 'react';
import {
    shape,
    string,
    number,
} from 'prop-types';

// Styles
import './CardPerson.scss';

const comp = 'CardPerson';

const CardPerson = ({person, index}) => {
    return (
        <div className={comp}>
            <img src={`../../assets/avatar_${index}.png`} alt="person face"/>
            <p>
                {person.name}
            </p>
        </div>
    )
}

CardPerson.propTypes = {
    person: shape({
        name: string.isRequired,
    }).isRequired,
    index: number.isRequired
}

export default CardPerson;