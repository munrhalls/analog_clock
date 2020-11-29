setInterval(function(){
  var time = new Date(); 
  var seconds = time.getSeconds();
  var minutes = time.getMinutes(); 
  var hours = time.getHours(); 

  var hour = document.getElementsByClassName('hour')[0];
  var minute = document.getElementsByClassName('minute')[0];
  var second = document.getElementsByClassName('second')[0];
  var marks = document.getElementsByClassName('marks')[0];

  hour.style.transform = 'rotate(' + (hours * 6) +'deg)';
  minute.style.transform = 'rotate(' + (minutes * 6) +'deg)';
  second.style.transform = 'rotate(' + (seconds * 6) +'deg)';
  
    var el = document.createElement('span');
    el.style.position = 'absolute'; 
    el.style.top = '0';
    el.style.left = 'calc(20rem - 0.75rem)';
    el.style.width = '1.5rem';
    el.style.height = '3rem'; 
    el.style.backgroundColor = '#000';
    marks.appendChild(el);

    var el2 = document.createElement('span');
    el2.style.position = 'absolute'; 
    el2.style.top = '100%';
    el2.style.left = 'calc(20rem - 0.75rem)';
    el2.style.width = '1.5rem';
    el2.style.height = '3rem'; 
    el2.style.backgroundColor = '#000';
    marks.appendChild(el2);


}, 1000);