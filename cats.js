$(document).ready(function () {
$('.summon-cats').on('click', function(event){
    $.ajax({
      url:'http://bitkittens.herokuapp.com/cats.json',
      method:'GET',
      data:{},
      dataType:'json'
    }).done(function(reponse){
    });
});
});

//
// $('#bb').click(function(){
//
//     $.ajax({
//       url: 'http://first-ajax-api.herokuapp.com/',
//       method: 'get',
//       data: {},
//       dataType:'text'
//     });
//   });
