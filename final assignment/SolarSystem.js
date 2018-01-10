$(window).ready(function(){

//Associate the click event to information, to the appropriate CONTAINER

var currClass;
var currPlanet;

//Find what was selected
var planetNum = 9;
for (var i=1; i<=planetNum; i++) {
  $(".text-"+[i]).click({value:i}, function(e) {
    //Show pop up box
    $(".pop-up-container").removeClass("hidden");
    //remove the previous class
    $(".planet-x").removeClass(currClass);
  //Clear planet photo classes
  currPlanet = $(".text-"+[e.data.value]).html();
  var descr = $(".descr-"+[e.data.value]).html();
  var planetImg = "planet-"+[e.data.value];
  $("#selPlanet").html(currPlanet);
  // add description to appropriate container
  $("#selPlanetDescr").html(descr);
  //add planet to appropriate container
  $(".planet-x").addClass(planetImg);
  currClass = planetImg;

  planetSize(currPlanet, currClass);
  })
}

// Change cursor on hover
for (var i=1; i<=planetNum; i++){
  $(".text-"+[i]).mouseover({value: i}, function(e){
    $(".text-"+[e.data.value]).css("cursor", "pointer");
  })
}

// Close the box
$(".pop-up-container p:first-child").click(function(){
  $(".pop-up-container").addClass("hidden");
})

$(".pop-up-container p:first-child").mouseover(function(){
  $(this).css("cursor", "pointer");
})


//check the current size of the planet
function planetSize(planetName, planetClass) {
  $("."+planetClass).css("fontSize", "10em");
}

})//END PAGE LOAD
