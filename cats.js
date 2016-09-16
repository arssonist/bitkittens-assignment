$(document).ready(function () {
  $('.summon-cats').on('click', function(event){
      $.ajax({
        url:'http://bitkittens.herokuapp.com/cats.json',
        method:'GET',
        data:{},
        dataType:'json'
      }).done(function(responseData){
        console.log(responseData);

        var catContainer1 = $('#cat1');
        var catContainer2 = $('#cat2');
        var catContainer3 = $('#cat3');
// get cat photo from server
        var catPhoto1 = responseData['cats'][0]['photo'];
        var catphoto2 = responseData['cats'][1]['photo'];
        var catphoto3 = responseData['cats'][2]['photo'];
// get cat name from server
        var catName1 = responseData['cats'][0]['name'];
        var catName2 = responseData['cats'][1]['name'];
        var catName3 = responseData['cats'][2]['name'];
      // append images to container
        var catImage1 = $('<img>').attr('src',
        catPhoto1).appendTo(catContainer1);

        var catImage2 = $('<img>').attr('src',
        catphoto2).appendTo(catContainer2);

        var catImage3 = $('<img>').attr('src', catphoto3).appendTo(catContainer3);

        $('#cat1 img').attr('alt', catName1).appendTo(catContainer1);
        $('#cat2 img').attr('alt', catName2).appendTo(catContainer2);
        $('#cat3 img').attr('alt', catName3).appendTo(catContainer3);

        // console.log(catName);
        // $(catContainer).appendTo(catImage, catName);
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
