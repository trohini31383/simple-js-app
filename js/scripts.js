
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
  for(var i = 0 ; i < repository.length ; i++){
    var pokemon= repository[i];
    if(pokemon.Height>5){
    document.write('<p>' + pokemon.Name +  ' (Height : ' + pokemon.Height + ') - Wow, that\'s big!' + '</p>');
  }
  else{
    document.write('<p>' + pokemon.Name +  ' (Height : ' + pokemon.Height + ')' + '</p>');
  }
  }
  document.write('<h1> List of Pokemons with their height & type </h1>')
repository.forEach(myFunction);

function myFunction(item, index) {
  for (var key in item) {
    document.write( key +  ":"  + item[key] + '<br>' + '<br>'  );
  }
}
