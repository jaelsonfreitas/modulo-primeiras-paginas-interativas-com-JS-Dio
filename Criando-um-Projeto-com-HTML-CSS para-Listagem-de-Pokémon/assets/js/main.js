

const offset = 0
const limit = 0
const url = `https://pokeapi.com/api/v2/pokemon?offset=${offset}&${limit}`

fetch(url).then(function(response){
    console.log(response);
})