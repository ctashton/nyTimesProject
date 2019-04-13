$("button").on("click", function() {
    

    var beginDate,
        endDate,
        limit,
        searchData,
        sortData=["newest","oldest","relevents"];
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" +
        beginDate + "&end_date=" + endDate + "&q=" + searchData + "&sort=" + sortData + 
        "&api-key=AFD5UT51kiqCZaBWgnvM7NM9kQjTU1Gf" ;

        $(".btn-submit").on("click", function(event) {
            event.preventDefault();
            searchData = $("#search-data").val();
            
            beginDate=$("#beginDate-data");

            endDate=$("#endDate-data");

            limit=$("#endDate-data");
            
          });
      
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            var results=response.response.docs;
            for (var i = 0; i <results.length ; i++) {
              var sending=result[i].lead_paragraph;
              var pageURL=result[i].web_url;

              $(".result-container")

              
              
              
                var animalDiv=$('<div />');
              var p=$("<p></p>");
              p.text=results[i].rating;
              console.log(results[i]);
              console.log(results[i].rating);
              var animalImage=$("<img>");
              animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#gifs-appear-here").prepend(animalDiv);
            }
          });
        });

















    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var results=response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv=$('<div />');
        var p=$("<p></p>");
        p.text=results[i].rating;
        console.log(results[i]);
        console.log(results[i].rating);
        var animalImage=$("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
      animalDiv.append(p);
      animalDiv.append(animalImage);
      $("#gifs-appear-here").prepend(animalDiv);
      }
    });
  });