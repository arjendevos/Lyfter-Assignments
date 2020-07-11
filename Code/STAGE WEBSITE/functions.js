
function cleanInput() {
    var inputnaam = document.getElementById('inputnaam');
    var inputemail = document.getElementById('inputemail');
    var inputnummer = document.getElementById('inputnummer');
    var outputtext = document.getElementById('outputtext');
    var outputtext2 = document.getElementById('outputtext2');
    var outputtext3 = document.getElementById('outputtext3');

    borderline = "2px solid #FF376E";
    

    if(inputnaam.value == '') {
        inputnaam.style.border = borderline;
        outputtext.innerHTML = "Vul een naam in";
        outputtext.style.color = "#FF376E";
        inputemail.style.marginTop = "-10px";

    } else {
        cleanednaam = cleaner(inputnaam.value);
        outputtext.innerHTML = cleanednaam;
        outputtext.style.color = "#333333";
        inputemail.style.marginTop = "-10px";

    }

    if(inputemail.value == '') {
        inputemail.style.border = borderline;
        outputtext2.innerHTML = "Vul een email in";
        outputtext2.style.color = "#FF376E";
        inputemail.style.marginTop = "-10px";

    } else {
        cleanedemail = cleaner(inputemail.value);
        outputtext2.innerHTML = cleanedemail;
        outputtext.style.color = "#333333";
        inputemail.style.marginTop = "-10px";

    }

    if(inputnummer.value == '') {
        inputnummer.style.border = borderline;
        outputtext3.innerHTML = "Vul een nummer in";
        outputtext3.style.color = "#FF376E";
        inputnummer.style.marginTop = "-10px";

    } else {
        cleanednummer = cleaner(inputnummer.value);
        outputtext3.innerHTML = cleanednummer;
        outputtext.style.color = "#333333";
        inputnummer.style.marginTop = "-10px";

    }
}


function cleaner(line) {
    rawCleaned = line.replace(/[^a-zA-Z]/g, ' ');
    cleanedLine = rawCleaned.replace(/ +/g, ' ');
    finishedLine = cleanedLine.trim();
    return finishedLine;
}


function replacer() {
    var inputbuzz = document.getElementById('inputbuzz');
    var inputfizz = document.getElementById('inputfizz');
    var outputtext4 = document.getElementById('outputtext4');
    var outputtext5 = document.getElementById('outputtext5');

    borderline = "2px solid #FF376E";

    if(inputbuzz.value == '') {
        inputbuzz.style.border = borderline;
        outputtext4.innerHTML = "Vul een nummer in";
        outputtext4.style.color = "#FF376E";
        inputfizz.style.marginTop = "-10px";

        if(inputfizz.value == '') {
            inputfizz.style.border = borderline;
            outputtext5.innerHTML = "Vul een nummer in";
            outputtext5.style.color = "#FF376E";
            inputfizz.style.marginTop = "-10px";
        }
    } else {
        if(inputfizz.value == '') {
            inputfizz.style.border = borderline;
            outputtext5.innerHTML = "Vul een nummer in";
            outputtext5.style.color = "#FF376E";
            inputfizz.style.marginTop = "-10px";
        } else {
            x = inputbuzz.value;
            y = inputfizz.value;
            output = looper(x, y);
            outputtext5.innerHTML = output;
        }
    }

}



function looper(x, y) {
    var out = '';
    var buzz = 'buzz';
    var fizz = "fizz";

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