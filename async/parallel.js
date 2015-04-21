function fullParallel(callbacks, last) {
  var results = [];
  var result_count = 0;
  callbacks.forEach(function(callback, index) {
    callback( function() {
      results[index] = Array.prototype.slice.call(arguments)[0];
      result_count++;
      if(result_count == callbacks.length) {
        last(results);
      }
    });
  });
}
// Example task
function async(arg, callback) {
  var delay = Math.floor(Math.random()  * 1e3); // random ms
  console.log('async with "', arg, '", return in ', delay, ' ms');
  setTimeout(function() { callback(arg * 2); }, delay);
}


function final(results) { console.log('Done', results); }

fullParallel([
  function(next) { async(1, next); },
  function(next) { async(2, next); },
  function(next) { async(3, next); },
  function(next) { async(4, next); },
  function(next) { async(5, next); },
  function(next) { async(6, next); }
], final);