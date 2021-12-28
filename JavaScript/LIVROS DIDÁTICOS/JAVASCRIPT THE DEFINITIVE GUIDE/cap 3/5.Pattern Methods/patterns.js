// Explained in chapter 10!
var text = "testing: 1, 2, 3";                        // Sample text
var pattern = /\d+/g;                                 // Matches all instances of one or more digits
document.write(pattern.test(text)+'<br>')             // => true: a match exists
document.write(text.search(pattern)+'<br>')           // => 9: position of first match
document.write(text.match(pattern)+'<br>')            // => ["1", "2", "3"]: array of all matches
document.write(text.replace(pattern, "#")+'<br>');    // => "testing: #, #, #"
document.write(text.split(/\D+/)+'<br>');             // => ["","1","2","3"]: split on non-digits