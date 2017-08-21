import React from 'react';
import Planet from './planet';

const SearchResults = (props) => {
    const { results = [] } = props;
    const planets = results.map( (planet, index) => <Planet key={index} {...planet} />);
    
    return (
        <div className='results col-md-10 col-md-offset-1'>
            <div className='row'>
                { planets }
            </div>
        </div>
    );
}

export default SearchResults;