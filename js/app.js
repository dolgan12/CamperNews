$(document).ready(function(){
  var url = 'http://www.freecodecamp.com/news/hot';
  var userUrl = 'http://www.freecodecamp.com';
  var nyheter = Rx.DOM.get(url)
    .subscribe(function(data){
      var news = JSON.parse(data.response);
      news.forEach(function(item){
        var link = encodeURI(item.link);
        var image = item.author.picture;
        var userPage = userUrl +'/' + item.author.username;
        var likes = item.upVotes.length;
        var daysSincePost = function (){
          var days = Math.round(Math.abs((Date.now() - item.timePosted) / (86400 * 1000)));
          switch (days) {
            case 0:
              return "Today";
            case 1:
                return "Yesterday";
            default:
                return days + " days ago";
          }
        };

        var rubrik = (item.headline.length > 20) ? item.headline.substr(0, 20) + "..." : item.headline;
        //  Generate the html
        var html =
         '<div class="card">' +
          '<div class="authImg">' +
          '<a target="_blank" href="' + link + '"><img src="' + image + '" title="' + item.headline + '"/></a>' +
          '</div>' +
          '<div class="textArea">' +
          '<div class="rubrik"><a href="' + link + '" target="_blank" title="' + item.headline + '">' + rubrik + '</a></div>' +
          '<div class="author"><a href="' + userPage + '" target="_blank">By: ' + item.author.username + '</a></div>' +
          '<div class="likes">&#10084; ' + likes + '</div>' +
          '<div class="datePosted">Posted: ' + daysSincePost() + '</div>' +
          '</div>' +
          '</div>';
        $('.container').append(html);
      });
    });
});
