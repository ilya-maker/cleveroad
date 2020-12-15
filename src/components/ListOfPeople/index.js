// Core
import React from 'react';
import {
    arrayOf,
    shape,
    number
} from 'prop-types';

// Components
import CardPerson from '../CardPerson';

// Styles
import './ListOfPeople.scss';

const comp = 'ListOfPeople';

const ListOfPeople = ({listPeople}) => {
    return (
        <div className={comp}>
            {listPeople?.map((item, index) => (<CardPerson key={item.id} person={item} index={index} />))}
        </div>
    )
}

ListOfPeople.propTypes = {
    listPeople: arrayOf(shape({
        id: number.isRequired,
    }).isRequired).isRequired,
}

export default ListOfPeople;