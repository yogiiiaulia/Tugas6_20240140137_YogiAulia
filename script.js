document.addEventListener("DOMContentLoaded", function() {

    var video = document.getElementById("video");
    var audio = document.getElementById("audio");
    var gambar = document.getElementById("gambar");

    video.addEventListener("click", function(){
        alert("ini video");
    });

    audio.addEventListener("click", function(){
        alert("ini audio");
    });

    gambar.addEventListener("click", function(){
        alert("ini gambar");
    });

});