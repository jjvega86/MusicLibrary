$(document).ready(function () {});
$.ajax({
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type: "get",
    success: function (data, textStatus, jQxhr) {
        //runs if API is successful
        console.log(data);
        $(".music").html("");
        for(let i = 0; i < data.length; i++){
            $(".music").append("<tr>"
                +"<td>" + data[i].title + "</td>"
                +"<td>" + data[i].album + "</td>"
                +"<td>" + data[i].artist + "</td>"
                +"<td>" + data[i].genre + "</td>"
                +"<td>" + data[i].releaseDate + "</td>"
            +"</tr>");
        }
    },
    error: function (jQxhr, textStatus, errorThrown) {
        //if API fails, console errorThrown
        console.log(errorThrown);
    }
});




