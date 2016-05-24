window.onload = function() {
    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
        'api-key': "b71e715aa69145fd9d770f5df8b129c3"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        var today = new Date();

        var weekday = new Array(7);
        weekday[0] = "MONDAY";
        weekday[1] = "TUESDAY";
        weekday[2] = "WEDNESDAY";
        weekday[3] = "THURSDAY";
        weekday[4] = "FRIDAY";
        weekday[5] = "SATURDAY";
        weekday[6] = "SUNDAY";

        var month = new Array(12);
        month[0] = "JANUARY";
        month[1] = "FEBRUARY";
        month[2] = "MARCH";
        month[3] = "APRIL";
        month[4] = "MAY";
        month[5] = "JUNE";
        month[6] = "JULY";
        month[7] = "AUGUST";
        month[8] = "SEPTEMBER";
        month[9] = "OCTOBER";
        month[10] = "NOVEMBER";
        month[11] = "DECEMBER";


        document.getElementById('time').innerHTML = weekday[today.getDay()] + " " + month[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + " - " + result.num_results + " ARTICLES";
        //  var json = JSON.parse(result);
        for (var i = 0; i < result.num_results; i++) {
            var title = document.createElement("h3");
            title.id = "title" + (i + 1);
            document.body.appendChild(title);
            var abstract = document.createElement("p");
            abstract.id = "abstract" + (i + 1);
            document.body.appendChild(abstract);
            var byline = document.createElement("h6");
            byline.id = "byline" + (i + 1);
            byline.className = "byline";
            document.body.appendChild(byline);
            var news_div = document.createElement("div");
            news_div.id = "news_div_" + (i + 1);
            news_div.appendChild(title);
            news_div.appendChild(abstract);
            news_div.appendChild(byline);
            news_div.className = "news_div";
            document.body.appendChild(news_div);
            document.getElementById("title" + (i + 1)).innerHTML = (result.results[i]).title;
            document.getElementById("abstract" + (i + 1)).innerHTML = (result.results[i]).abstract;
            document.getElementById("byline" + (i + 1)).innerHTML = (result.results[i]).byline;

            var e = document.createElement('div');
            e.innerHTML = '<hr>';

            while (e.firstChild) {
                document.body.appendChild(e.firstChild);
            }
        }
    }).fail(function(err) {
        throw err;
    });
};
