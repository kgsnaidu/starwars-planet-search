
const _base = 'https://swapi.co/api/';

export const LoginService = ( username, password ) => {
    const url = `${ _base }people/?search=${ username }`;

    return fetch(url).then( 
        response => response.json()
    );
};

export const PlanetSearchService = ( searchString ) => {
    const url = `${ _base }planets/?search=${ searchString }`;

     
    return fetch(url).then( 
        response => response.json()
    );
};