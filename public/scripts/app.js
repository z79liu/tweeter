/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement (data) {
  let $newTweet = $('<article>').addClass('tweet');

  let name = data.user.name;
  let avatars = data.user.avatars.small;
  let handle = data.user.handle;
  let content = data.content.text
  let timestamp = data.created_at

  var html = `
  <header>
    <img src =${avatars}>
    <h3>${name}</h3>
    <h6>${handle}</h6>
  </header>
  <div class = "tweet body">
    <p>${content}</p>
  </div>
  <footer>
    <h6>${timestamp}</h6>
  </footer>
    `

  $newTweet.append(html)
  return $newTweet; 
}

$(document).ready(function() {
  var $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('.tweet-container').append($tweet); 
})

