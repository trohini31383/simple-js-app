
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
    document.write('<p>' +pokemon.name+ '</p>');
  }
