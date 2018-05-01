//alert("Welcome to the pandora box");
//alert("This box will give you anything you want");
//alert("That is created by Dequan");
function giphyURLWithSearchTerm(searchTerm) {
    
    return "https://api.giphy.com/v1/stickers/search?q="+searchTerm+"&api_key=dc6zaTOxFJmzC";
    

}

function appendImageToBody(srcURL) {

    $('body').append('<img src=' + srcURL + 'class= "api">');
}

function callGiphyAPIWithSearchTerm(searchTerm ) {

    var t = giphyURLWithSearchTerm(searchTerm);

    $.ajax({
      url: t,
      method: "GET",
      success: function(response) {
        var a = Math.floor((Math.random()*response.data.length)+0);
        var b = response.data.length-Math.floor((Math.random() * 10) + 1);
        var c = Math.floor((Math.random()*10)+1);
        for(var n=a; n <=b; n=n+c){
           var url = response.data[n].images.original.url;
           appendImageToBody(url);}
           console.log(a,b);
      },
    }); 
}
function imageclear(){
    $("img").hide();
}

function end(){
    alert("You just release the Monster!");
    window.close();
}



$("button").click(function(n){
    imageclear();
    var search = $("input").val();
    giphyURLWithSearchTerm(search);
    callGiphyAPIWithSearchTerm(search);
    setTimeout(end,480000)
});
