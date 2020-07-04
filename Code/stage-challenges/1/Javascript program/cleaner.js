
// Start program

const fs = require('fs');

// Read the data in the file

fs.readFile('../input.txt', 'utf-8', (error, data) => {
    if (error) throw error;

// For every line in the file execute the function cleaner

    var lines = data.split('\n');
    for (var i=0; i < lines.length; i++) {

        cleaned = cleaner(lines[i]);
        console.log(cleaned);
    }

})

// Replace all symbols and numbers with space
// Replace the multiple spaces with 1 space
// Trim the string

function cleaner(line) {
    rawCleaned = line.replace(/[^a-zA-Z]/g, ' ');
    cleanedLine = rawCleaned.replace(/ +/g, ' ');
    finishedLine = cleanedLine.trim();
    return finishedLine;
}