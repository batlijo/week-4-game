  // QUESTIONS!!!!!
  //In the console log it says crystal.attr is not a function, I've googled and tried to figure out how to correct. No idea.
  //Why is my random # generating negative numbers?
  //It looks like my css file is not linking with my html...tried tinkering different things nothing worked. In same file path. and linked on HTML
  // It also looks like my jQuery isn't linking and I tried tinkering with that too and no luck

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
    var crystal = Math.floor(Math.random()*(12-1) +1);
    //imageCrystal.addClass("crystal-image"); 
    crystal.attr("1", "2","3","4");//these strings are the value
    crystal.attr("data-crystalvalue", numberOptions[i]);
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
  $( "crystal" ).click()
  crystal2(":button")
  $( "crystal" ).click()
  crystal3(":button")
  $( "crystal" ).click()
  crystal4(":button")
  $( "crystal" ).click()

    
    
    $(".ranNumBox").html(randNum);
    $(".scoreDisplayChild").html(finalScore);
  }
  finalScore = 0;

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