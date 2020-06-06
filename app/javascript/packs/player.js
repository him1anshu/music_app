$(document).ready(function() {

  var audio = $("#player");

  $('.play').click(function() {
    var url = $(this).attr('href');
    audio[0].src = url;
    audio[0].pause();
    audio[0].load();
    audio[0].oncanplaythrough = audio[0].play();
    return false;
  });

  $('#play').click(function() {
    audio[0].play();
  });

  $('#pause').click(function() {
    audio[0].pause();
   });

  $('#stop').click(function() {
    audio[0].pause();
    document.querySelector(".progress-bar").style.width = 0;
    audio[0].load();
   });

  $('#backward').click(function() {
    audio[0].currentTime -= 5;
  });

  $('#forward').click(function() {
    audio[0].currentTime += 5;
   });
  
  audio[0].addEventListener("timeupdate", function() {
    document.querySelector(".progress-bar").style.width = parseFloat(((audio[0].currentTime / audio[0].duration) * 100), 10) + "%";
  });

  var slider = document.getElementById("myRange");

  slider.oninput = function() {
    audio[0].volume = parseFloat(slider.value)/100;
  }

  var progressBar = document.getElementById("seek-bar");
  progressBar.addEventListener("click", seek);

  function seek(e) {
    var percent = e.offsetX / this.offsetWidth;
    audio[0].currentTime = percent * audio[0].duration;
    progressBar.value = percent / 100;
  }

  $('#play-playlist').click(function() {
    
    var i = 0;
    audio[0].src = files[i];
    document.querySelector(".progress-bar").style.width = 0;
    audio[0].play();

    $('#prev').click(function() {
      if (i != 0) {
        i--;
        audio[0].src = files[i];
        document.querySelector(".progress-bar").style.width = 0;
        audio[0].play();
      }
    });

    $('#next').click(function() {
    if (i === files.length - 1) {
      i = 0;
    } 
    else {
      i++;
    }
    audio[0].src = files[i];
    document.querySelector(".progress-bar").style.width = 0;
    audio[0].play();
    });

    audio[0].addEventListener("ended", function() {
    if (i === files.length - 1) {
    i = 0;
    } 
    else {
    i++;
    }
    audio[0].src = files[i];
    document.querySelector(".progress-bar").style.width = 0;
    audio[0].play();
    });
  });

});

