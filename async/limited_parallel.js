function limited(limit, callbacks, last) {
  var results = [];
  var running = 1;
  var task = 0;
  function next(){
    running--;
    if(task == callbacks.length && running == 0) {
      last(results);
    }
    while(running < limit && callbacks[task]) {
      var callback = callbacks[task];
      (function(index) {
        callback(function() {
          results[index] = Array.prototype.slice.call(arguments)[0];
          next();
        });
      })(task);
      task++;
      running++;
    }
  }
  next();
}
// Example task
function async(arg, callback) {
  var delay = Math.floor(Math.random()  * 5e3); // random ms
  console.log('async with "', arg, '", return in ', delay, ' ms');
  setTimeout(CB, delay);

  function CB()   {
    var result = arg * 2;
    console.log('Return with "'+arg+'", result '+result);
    callback(result);
  }

}


function final(results) { console.log('Done', results); }

limited(3, [
  function(next) { async(1, next); },
  function(next) { async(2, next); },
  function(next) { async(3, next); },
  function(next) { async(4, next); },
  function(next) { async(5, next); },
  function(next) { async(6, next); }
], final);