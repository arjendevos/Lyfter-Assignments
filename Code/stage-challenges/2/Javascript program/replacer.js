
// Create the loop function

function looper(fizz, buzz) {
    var out = '';
    var x = 10;
    var y = 3;

    for (var i = 1; i <= 100; i++) {

    // xDiv and yDiv are true if i can be divided with x or y

        xDiv = i % x;
        yDiv = i % y;

        if (xDiv === 0) {
            if(yDiv === 0) {
                out += fizz + buzz;
                out += ' ';
            } else {
                out += buzz;
                out += ' ';
            }
        } else if (yDiv === 0) {
            out += fizz;
            out += ' ';
        } else {
            out += i;
            out += ' ';
        }
    }
    return out;
}
       

// Output the loop

fizz = 'F';
buzz = "B";

var output = looper(fizz, buzz);
console.log(output);