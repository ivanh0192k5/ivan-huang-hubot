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
    return msg.send("26.4 PPG, 8.6 RPG, 8.7 APG, 1.2 SPG, 54.8 FG% 36.3 https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/05/17/lebron-james-cavaliers-isaiah-thomas-breeze.jpg");
  });
  

    }


/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

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