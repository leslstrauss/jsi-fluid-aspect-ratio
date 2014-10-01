// $.ajaxSetup ({
//     cache: false
//   });
//   var ajax_load = "<img src='img/load.gif' alt='loading...' />";

// //  load() functions
//   var loadUrl = "ajax/load.php";
//   $("#load_basic").click(function(){
//     $("#result").html(ajax_load).load(loadUrl);
//   });

$.ajax({
   url: "package.json",
   dataType : "json",
   success: function( json ) {
       console.log(json);
     $( "<h1/>" ).text( json.name ).appendTo( "body" );
   }
});
