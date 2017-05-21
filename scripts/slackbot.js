// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

module.exports = function(robot) {
  // YOUR CODE HERE
  //  Example
    robot.hear(/food/i, function(msg) {
    return msg.send("I love food!");
  });
  robot.hear(/hello/i, function(msg) {
    return msg.send("Hello there young lad");
  });
  robot.hear(/bye/i, function(msg) {
    return msg.send("https://cdn.tinybuddha.com/wp-content/uploads/2015/07/Woman-Waving-Goodbye.png");
  });
  robot.hear(/lebron james/i, function(msg) {
    return msg.send("26.4 PPG, 8.6 RPG, 8.7 APG, 1.2 SPG, 54.8 FG% 36.3 3PT% https://i.ytimg.com/vi/gKK6iynG6os/maxresdefault.jpg");
  });
  robot.hear(/stephen curry/i, function(msg) {
    return msg.send("25.3 PPG, 4.5 RPG, 6.6 APG, 1.8 SPG, 46.8 FG% 41.1 3PT% https://usatftw.files.wordpress.com/2015/11/usp-nba_-toronto-raptors-at-golden-state-warriors.jpg?w=1000&h=600&crop=1");
  });
  robot.hear(/kevin durant/i, function(msg) {
    return msg.send("25.1 PPG, 8.3 RPG, 4.8 APG, 1.1 SPG, 53.7 FG% 37.3 3PT% http://www.mercurynews.com/wp-content/uploads/2017/02/warriorsthunder-04.jpg?w=620");
  });
  robot.hear(/kyrie irving/i, function(msg) {
    return msg.send("25.2 PPG, 3.2 RPG, 5.8 APG, 1.2 SPG, 47.3 FG% 40.1 3PT% http://i.cdn.turner.com/nba/nba/dam/assets/151225191923-kyrie-irving-cc-alt-golden-state-warriors-v-cleveland-cavaliers.1200x672.jpeg");
  });
  robot.hear(/lonzo ball/i, function(msg) {
    return msg.send(" He's the GOAT! 20.2 PPG, 10.2 RPG, 10.8 APG, 12.2 SPG, 47.3 FG% 45.1 3PT% http://www.slamonline.com/wp-content/uploads/2017/04/lonzo_magic.jpg");
  });
  robot.hear(/shoes/i, function(msg) {
    return msg.send("https://pbs.twimg.com/media/C_AbEwrUIAAAUQx.jpg")

  });
  robot.hear(/nba finals/i, function(msg) {
    return msg.send("The NBA finals starts on June 1st. With the likely matchup of Warriors vs Cavs.");
  });
  robot.respond(/Is (.*) a good basketball player/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "lebron james"){
    return msg.send("Yes");
  } else {
    return msg.reply("No");
  }
  robot.respond(/who is your favorite (.*)/, function(msg) {
  var fav;
  fav = msg.match[1];
  console.log(fav);
  switch (fav) {
    case "basketball player":
      return msg.reply("My favorite player is kobe bryant");
      break;
    case "football player":
      return msg.reply("None, I only know about basketball");
      break;
    case "baseball player":
      return msg.reply("Michael Jordan");
      break;
    default:
      return msg.reply("I don't know what that is. Is it related to basketball? Because, that is all I know.");
  }
});

});
  
  


    }


/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

  robot.respond(/lebron james/i, function(msg) {
    return msg.send("26.4 PPG, 8.6 RPG, 8.7 APG, 1.2 SPG, 54.8 FG% 36.3 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.hear(/stephen curry/i, function(msg) {
    return msg.send("25.3 PPG, 4.5 RPG, 6.6 APG, 1.8 SPG, 46.8 FG% 41.1 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.respond(/stephen curry/i, function(msg) {
    return msg.send("25.3 PPG, 4.5 RPG, 6.6 APG, 1.8 SPG, 46.8 FG% 41.1 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.hear(/kevin durant/i, function(msg) {
    return msg.send("25.1 PPG, 8.3 RPG, 4.8 APG, 1.1 SPG, 53.7 FG% 37.3 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.respond(/kevin durant/i, function(msg) {
    return msg.send("25.1 PPG, 8.3 RPG, 4.8 APG, 1.1 SPG, 53.7 FG% 37.3 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.hear(/kyrie irving/i, function(msg) {
    return msg.send("25.2 PPG, 3.2 RPG, 5.8 APG, 1.2 SPG, 47.3 FG% 40.1 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.respond(/kyrie irving/i, function(msg) {
    return msg.send("25.2 PPG, 3.2 RPG, 5.8 APG, 1.2 SPG, 47.3 FG% 40.1 3PT% https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  robot.hear(/nba finals/i, function(msg) {
    return msg.send("The NBA finals starts on June 1st. With the likely matchup of Warriors vs Cavs.");
  });
  robot.respond(/Is (.*) a good basketball player/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "lebron james"){
    return msg.send("Yes");
  } else {
    return msg.reply("No");
  }
  robot.hear(/who is your favorite (.*)/, function(msg) {
  var fav;
  fav = msg.match[1];
  console.log(fav);
  switch (fav) {
    case "basketball player":
      return msg.reply("My favorite player is kobe bryant");
      break;
    case "football player":
      return msg.reply("None, I only know about basketball");
      break;
    case "baseball player":
      return msg.reply("Michael Jordan");
      break;
    default:
      return msg.reply("I don't know what that is. Is it related to basketball? Because, that is all I know.");
  }
});

});
  

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/