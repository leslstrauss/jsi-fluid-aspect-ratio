$.ajaxSetup ({
    cache: false
  });
  var ajax_load = "<img src='img/load.gif' alt='loading...' />";

//  load() functions
  var loadUrl = "ajax/load.php";
  $("#load_basic").click(function(){
    $("#result").html(ajax_load).load(loadUrl);
  });