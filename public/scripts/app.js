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

const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
    <p>${escape(content)}</p>
  </div>
  <footer>
    <h6>${timestamp}</h6>
  </footer>
    `

  $newTweet.append(html)
  return $newTweet; 
}

function renderTweets (array) {
  $('.tweet-container').empty();
  for (tweet of array){
    var $tweet = createTweetElement(tweet);
    $('.tweet-container').prepend($tweet); 
  }
}

function loadTweets() {
  $.ajax('/tweets')
  .then(function(tweets){
    renderTweets(tweets);
  })
}


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}



// $(function postTweet() {
//   var $button = $('#submitbtn');
//   $button.on('submit', function () {
//     event.preventDefault();
//     $.ajax('/', { method: 'POST' })
//     .then(renderTweets (tweets) {
//       console.log('Success: ajax request ', postHTML);
//     });
//   });
// });

$(document).ready(function() {

  $(".new-tweet form").submit(function(e) {
    e.preventDefault();
     if($('textarea').val().length > 140 ) {
        $( "#error-message" ).show( "slow", function() {
         });
     } else if ($('textarea').val().length === 0 ) {
      alert('message cannot be empty')
     }
     else 
    $.ajax({
      url: $(this).attr("action"), 
      method: 'POST', 
      data: $(this).serialize()
    })
      .then(function(){
        $( "#error-message" ).hide( "slow", function() {
        });
        loadTweets()
        $('textarea').val('')
      });
  })
});
