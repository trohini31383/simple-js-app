var pokemonRepository = (function () {
var  repository= [
    {
        Name: 'Charizard',
        Height: 5,
        Type: ['Fire','Flying']
    },
    {
        Name:'Mewtwo',
        Height: 6,
        Type: ['Psychic']
    },
    {
        Name: 'Sceptile',
        Height:5,
        Type: ['Grass', 'poison']
    },
  ];

    function add(pokemon) {
      repository.push(pokemon);
    }

    function getAll() {
      return repository;
    }

    return {
      add: add,
      getAll: getAll
    };

  })();
document.write('<h1>List of Pokemons</h1> ')
pokemonRepository.add({ Name: 'Pikachu' })
pokemonRepository.getAll().forEach(pokemon);



function pokemon(item, index) {
  for (var key in item) {
  document.write( key +  ":"  + item[key] + '<br>' + '<br>'  );
  }
}
