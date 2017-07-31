
const _base = 'https://swapi.co/api/';

export const LoginService = ( username, password ) => {
    const url = `${ _base }people/?search=${ username }`;

    fetch(url).then( response => response.json);
};