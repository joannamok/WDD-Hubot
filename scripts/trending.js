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

var request = require('request');

module.exports = function (robot) {
    
    //the URL to twitter
    var URL = 'https://twitter.com/whatstrending';
    
    //whats trending?
    robot.respond(/whats trending?/i, function (msg) {
        
        //Make hubot respond with URL
        msg.send("URL");
        
       

//module.exports = function(robot) {
//    robot.hear(/trending$/i, function(msg) {
//        return msg.send('https://twitter.com/whatstrending');
//    });
//};
