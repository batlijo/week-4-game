  
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
    var imageCrystal = $("#img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }


  function start()
  {
    //reset
    randomNum = Math.floor(Math.random()*120 - 19) +1
    console.log("randomNumber = " + randNum);
    var crystal1 = Math.floor(Math.random()*(12-1) +1);
    var crystal2 = Math.floor(Math.random()*(12-1) +1);
    var crystal3 = Math.floor(Math.random()*(12-1) +1);
    var crystal4 = Math.floor(Math.random()*(12-1) +1)
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