// Description:
//   Utility commands surrounding Hubot uptime.
//
// Hubot returns what's trending on twitter
//
// Commands
//   hubot what's trending
//
//  Dependencies
//      none
//
// author: Shye TG
// shye@fuillsail.edu

  var trend = [
    "http://https://twitter.com/hashtag/trending",
    "http://whatstrending.com/categories/trending-now",
    "https://www.google.com/trends/hottrends",
    ];
//Starts up the hubot interface
module.exports = function(robot) {
    return robot.respond(/whats trending$/i, function(msg) {
        //Picks a random trending site
        msg.send(msg.random(trend) + "Check it out!");
    });
};
