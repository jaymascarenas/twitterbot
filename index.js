console.log("The bot is starting");
let Twit = require("twit");
let TwitConfig = require("./twitconfig");

let T = new Twit(TwitConfig);

/* // gets latest tweets on your feed
let params = {
  q: "tacos",
  count: 2
};

T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  let tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
} */

/* ------------------------------------- */

/* // posts a tweet to twitter
tweetIt();

// T.post at an interval
setInterval(tweetIt, 1000 * 60 * 60);

function tweetIt() {
  let r = Math.floor(Math.random() * 100);

  let tweet = {
    status: `Here is a random number ${r} from node.js`
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong " + err);
    } else {
      console.log("This worked");
    }
  }
} */

/* ------------------------------------- */

// for replying to new followers from T.stream
function tweetIt(txt) {
  let tweet = {
    status: txt
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong " + err);
    } else {
      console.log("This worked");
    }
  }
}

// Setting up a user stream
let stream = T.stream("user");

// Anytime someone follows me
stream.on("follow", followed);

function followed(eventMsg) {
  let name = eventMsg.source.name;
  let screenName = eventMsg.source.screen_name;
  tweetIt(`@ ${screenName} Hey! Thanks for the follow!`);
}

/* ------------------------------------- */

/* // for tweeting a thank you to people who mention me in their tweet 
function tweetIt(txt) {
  let tweet = {
    status: txt
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong " + err);
    } else {
      console.log("This worked");
    }
  }
}

// Setting up a user stream
let stream = T.stream("user");

// Anytime someone follows me
stream.on("follow", tweetEvent);

function tweetEvent(eventMsg) {

  // this writes a file to your server with tweet JSON
  let fs = require("fs");
  let json = JSON.stringify(eventMsg, null, 2);
  fs.writeFile("tweet.json", json);

  // pulls data from JSON object in tweet.json
  let replyTo = eventMsg.in_reply_to_screen_name;
  let text = eventMsg.text;
  let from = eventMsg.user.screen_name;

  console.log(`${replyTo} ${from}`);

  if(replyTo === 'yourtwitterscreenname') {
    let newTweet = `@ ${from} thank you for tweeting me!`;
    tweetIt(newTweet);
  }
} */
