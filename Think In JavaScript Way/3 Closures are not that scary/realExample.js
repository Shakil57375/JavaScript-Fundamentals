function stopWatch() {
  var startTime = Date.now();
  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

for(var i = 0; i < 100000000; i++){
    var a = Math.random() * 1000000
}

timer()