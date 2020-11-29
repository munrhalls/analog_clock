setInterval(function(){
  var time = new Date(); 
  var seconds = time.getSeconds();
  var minutes = time.getMinutes(); 
  var hours = time.getHours(); 
  console.log(seconds)
}, 1000);