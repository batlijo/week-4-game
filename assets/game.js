  
  //How do we get this to be a random number for each game? Do we do a reset function like I put at the bottom of this code?
  

  var randNum = Math.floor(Math.random()*120 - 19) +1
    console.log("randomNumber = " + randNum);

  
  //Creating multiple crystals each with their own unique number value. 
    var win = 0; //randomNum=finalScore
    var loss = 0;
    var finalScore = 0;

    //Global variables
    var crystal1 = Math.floor(Math.random()*(12-1) +1);
    var crystal2 = Math.floor(Math.random()*(12-1) +1);
    var crystal3 = Math.floor(Math.random()*(12-1) +1);
    var crystal4 = Math.floor(Math.random()*(12-1) +1);

  var numberOptions = [crystal1, crystal2,crystal3,crystal4];

    for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = "";
    imageCrystal.addClass("crystal-image"); 
    imageCrystal.attr("src", "bluecrystal.jpg", "orangecrystal.jpg", "purplecrystal.jpg", "whitecrystal.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(crystal-image);
    $(".crystal-image").on("click", function() {
      var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
    });
  }

  function start()
  {
    //reset
    randomNum = Math.floor(Math.random()*120 - 19) +1
    console.log("randomNumber = " + randNum);

//add buttons to image and on click event
  crystal1(":button")
  $( "crystal-image" ).click()
  crystal2(":button")
  $( "crystal-image" ).click()
  crystal3(":button")
  $( "crystal-image" ).click()
  crystal4(":button")
  $( "crystal-image" ).click()

    var crystal1 = Math.floor(Math.random()*(12-1) +1);
    // to actually click on crystal buttons:
    $( "#crystal-image" ).click(function() {
    $( "#crystal1" ).click();
    });

    var crystal2 = Math.floor(Math.random()*(12-1) +1);
    $( "#crystal-image" ).click(function() {
    $( "#crystal2" ).click();
    });

    var crystal3 = Math.floor(Math.random()*(12-1) +1);
    $( "#crystal-image" ).click(function() {
    $( "#crystal3" ).click();
    });

    var crystal4 = Math.floor(Math.random()*(12-1) +1)
    $( "#crystal-image" ).click(function() {
  $( "#crystal4" ).click();
});

    finalScore = 0;
    $(".ranNumBox").html(randNum);
    $(".scoreDisplayChild").html(finalScore);
  }

// to end the game
  if (finalScore === randNum)
  {
    win ++;
    $(".win").html(win);
    $(".scoreDisplayChild").html(0);
    start();
  }
  else if (finalScore > randNum)
  {
    loss ++;
    $(".loss").html(loss);
    $(".scoreDisplayChild").html(0);
    start();
  }