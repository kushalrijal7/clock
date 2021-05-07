var span = document.getElementById('time');

  function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var pe = "AM";
  if(h > 12){
  	h = h-12;
  	pe = "PM";
  }
  if(h < 10){
  	h = "0" +h;
  }
  if(m < 10){
  	m = "0" + m;
  }
  if(s < 10){
  	s = "0" + s;
  }
  
 span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + " "+ (pe);
}
setInterval(time, 0);