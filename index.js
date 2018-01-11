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
      console.log(data);
    }
  }
} */

/* ------------------------------------- */

/* // for replying to new followers from T.stream
function tweetIt(txt) {
  let tweet = {
    status: txt
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong " + err);
    } else {
      console.log(data);
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
  tweetIt(`.@ ${screenName} do you like tacos?`);
} */
