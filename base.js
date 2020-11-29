setInterval(function(){
  var time = new Date(); 
  var seconds = time.getSeconds();
  var minutes = time.getMinutes(); 
  var hours = time.getHours(); 

  var hour = document.getElementsByClassName('hour')[0];
  var minute = document.getElementsByClassName('minute')[0];

  var second = document.getElementsByClassName('second')[0];

  hour.style.transform = 'rotate(' + (hours * 6) +'deg)';
  minute.style.transform = 'rotate(' + (minutes * 6) +'deg)';
  second.style.transform = 'rotate(' + (seconds * 6) +'deg)';
  
}, 1000);