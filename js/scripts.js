
var  repository= [
    {
        name: 'Charizard',
        height: 5,
        types: ['Fire','Flying']
    },
    {
        name:'Mewtwo',
        height: 6,
        type: ['Psychic']
    },
    {
        name: 'Sceptile',
        height:5,
       type: ['Grass', 'poison']
    },
  ];
  for(var i = 0 ; i < repository.length ; i++){
    var pokemon= repository[i];
    if(pokemon.height>5){
    document.write('<p>' + pokemon.name +  ' (height : ' + pokemon.height + ') - Wow, that\'s big!' + '</p>');
  }
  else{
    document.write('<p>' + pokemon.name +  ' (height : ' + pokemon.height + ')' + '</p>');
  }
  }
