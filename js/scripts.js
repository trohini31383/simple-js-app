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
    function addListItem(pokemon){
    var $listItem = document.createElement('li');
    var $newButton = document.createElement('button');
    $listItem.classList.add('buttonstyle');
    $pokemonlist.appendChild($listItem);
    $newButton.innerText = pokemon.Name;
    $listItem.appendChild($newButton);
    $newButton.addEventListener('click', function(event) {
			showDetails(pokemon);
     		});
  }
  function showDetails(pokemon){
     console.log(pokemon.Name)
 }


    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails:showDetails,
    };

  })();
$pokemonlist = document.querySelector('.pokemon-list');

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon)
})
