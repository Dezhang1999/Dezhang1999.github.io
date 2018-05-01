$("#Enter").click(function(){
   alert("you about to enter pandora box");
});

$("#leave").click(function(){
   window.close(); 
});
var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function () {
    $('#basicUsage').html(timer.getTimeValues().toString());
});