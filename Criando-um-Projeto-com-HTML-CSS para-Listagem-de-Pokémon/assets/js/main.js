

const offset = 0
const limit = 0
const url = `https://pokeapi.com/api/v2/pokemon?offset=${offset}&${limit}`

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))