
var pokemonRepository = (function () {
var  repository= [];

   var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  // var $pokemonlist = document.querySelector('.pokemon-list')



    function add(pokemon) {
      repository.push(pokemon);
    }

    function getAll() {
      return repository;
    }

  function addListItem(pokemon){
     var $pokemonlist = document.querySelector('.pokemon-list');
  var $listItem = document.createElement('li');
  var $newButton = document.createElement('button');
   $listItem.classList.add('buttonstyle');
  // $pokemonlist.appendChild($listItem);
   $newButton.innerText = pokemon.name;
   $newButton.addEventListener('click', function(event) {
			showDetails(pokemon);
     		});

   $listItem.appendChild($newButton);
    $pokemonlist.appendChild($listItem);
   //$newButton.addEventListener('click', function(event) {
		//	showDetails(pokemon);
     //		});
  }
/*function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}*/
   function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (pokemon) {
        var pokemon = {
          name: pokemon.name,
          detailsUrl: pokemon.url
        };
        add(pokemon);
        console.log(pokemon)
        });
    }).catch(function (e) {
      console.error(e);
    })
  }
   function loadDetails(pokemon) {
    var url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      showDetails:showDetails,
      loadList:loadList,
      loadDetails:loadDetails,
    };

})();

//var $pokemonlist = document.querySelector('.pokemon-list')

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
