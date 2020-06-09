$(document).ready(function() {

  var audio = $("#player");

  $('.play').click(function() {
    var url = $(this).attr('href');
    audio[0].src = url;
    audio[0].play();
    $('.first, .second').toggle();
    return false;
  });



  $('#play').click(function() {
    audio[0].play();
  });

  $('#pause').click(function() {
    audio[0].pause();
   }); 

  $('#play').on('click', function() {
  $('.first, .second').toggle();
  });

  $('#pause').on('click', function() {
  $('.first, .second').toggle();
  });

  audio[0].onended = function(e) {
  $('.first, .second').toggle();
  };


  // $('#stop').click(function() {
  //   audio[0].pause();
  //   document.querySelector(".progress-bar").style.width = 0;
  //   audio[0].load();
  //  });

  $('#backward').click(function() {
    audio[0].currentTime -= 5;
  });

  $('#forward').click(function() {
    audio[0].currentTime += 5;
   });


  $('#mute').on('click', function() {
    audio[0].muted = true;
    $('.mute-first, .mute-second').toggle();
  });

  $('#unmute').on('click', function() {
    audio[0].muted = false;
    $('.mute-first, .mute-second').toggle();
  });

  function timerFunction() {
    var duration = audio[0].duration;
    var currentTime = audio[0].currentTime;
    var sec1= new Number();
    var min1= new Number();
    var sec2= new Number();
    var min2= new Number();
    
    sec1 = Math.floor( duration );    
    min1 = Math.floor( sec1 / 60 );
    min1 = min1 >= 10 ? min1 : '0' + min1;    
    sec1 = Math.floor( sec1 % 60 );
    sec1 = sec1 >= 10 ? sec1 : '0' + sec1;

    sec2 = Math.floor( currentTime );    
    min2 = Math.floor( sec2 / 60 );
    min2 = min2 >= 10 ? min2 : '0' + min2;    
    sec2 = Math.floor( sec2 % 60 );
    sec2 = sec2 >= 10 ? sec2 : '0' + sec2;

    document.getElementById("timer").innerHTML = min2 + ":"+ sec2 + "/" + min1 + ":"+ sec1; 
  }
  
  audio[0].addEventListener("timeupdate", function() {
    timerFunction();
    document.querySelector(".progress-bar").style.width = parseFloat(((audio[0].currentTime / audio[0].duration) * 100), 10) + "%";
  });

  var slider = document.getElementById("myRange");

  slider.oninput = function() {
    audio[0].volume = parseFloat(slider.value)/100;
    if (slider.value == 0)
      $('.mute-first, .mute-second').toggle();
    else {     
      $('.mute-second').style.display = none;
      $('.mute-first').style.display = block;
    }
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

