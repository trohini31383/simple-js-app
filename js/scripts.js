var pokemonRepository = (function() {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }
  function addListItem(pokemon) {
    var $pokemonlist = document.querySelector('.pokemon-list');
    var $listItem = document.createElement('li');
    var $newButton = document.createElement('button');
    $listItem.classList.add('buttonstyle');
    $newButton.innerText = pokemon.name;
    $listItem.appendChild($newButton);
    $pokemonlist.appendChild($listItem);
    $newButton.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      //console.log(pokemon);
      showModal(pokemon);
    });
  }
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(pokemon) {
          var pokemon1 = {
            name: pokemon.name,
            detailsUrl: pokemon.url
          };
          add(pokemon1);
          //console.log(pokemon);
        });
      });
    //.catch(function(e) {
    //  console.error(e);
    //  });
  }
  function loadDetails(pokemon) {
    var url = pokemon.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        pokemon.types = Object.keys(details.types);
      });
    /*.catch(function(e) {
        console.error(e);
      });*/
  }
  function showModal(pokemon) {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.innerHTML = '';
    var modal = document.createElement('div');
    modal.classList.add('modal');
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
    var titleElement = document.createElement('h1');
    titleElement.innerText = 'Name : ' + pokemon.name;

    var contentElement = document.createElement('p');
    contentElement.innerText = 'Height:' + pokemon.height;
    var weightElement = document.createElement('w');
    weightElement.innerText = 'Weight:' + pokemon.weight;

    var imageElementFront = document.createElement('img');
    imageElementFront.classList.add('modal-img');
    imageElementFront.setAttribute('src', pokemon.imageUrlFront);

    var imageElementBack = document.createElement('img');
    imageElementBack.classList.add('modal-img');
    imageElementBack.setAttribute('src', pokemon.imageUrlBack);

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElementFront);
    modal.appendChild(imageElementBack);
    modal.appendChild(contentElement);
    modal.appendChild(weightElement);
    $modalContainer.appendChild(modal);
    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', e => {
    var $modalContainer = document.querySelector('#modal-container');

    if (
      e.key === 'Escape' &&
      $modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }
  });
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', e => {
    var target = e.target;

    if (target === $modalContainer) {
      hideModal();
    }
  });
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
