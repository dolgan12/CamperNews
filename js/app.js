$(document).ready(function(){
  var url = 'http://www.freecodecamp.com/news/hot';
  var userUrl = 'http://www.freecodecamp.com';
  var nyheter = Rx.DOM.get(url)
    .subscribe(function(data){
      var news = JSON.parse(data.response);
      news.forEach(function(item){
        var link = item.link;
        var image = item.author.picture;
        var userPage = userUrl + item.author.username;
        var likes = item.upVotes.length;
        var timePosted = new Date(item.timePosted);
        var rubrik = (item.headline.length > 20) ? item.headline.substr(0, 20) + "..." : item.headline;

        //  Generate the html
        $('.container').append();
        console.log(rubrik);
        console.log(timePosted.toDateString());
      });
    });
});
