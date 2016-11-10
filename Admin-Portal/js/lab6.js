// this is how you can change CSS formatting with a button.

function linkChange() {

    document.getElementById("changeLink").className = "redLink";
}

//this is how you can change text on page with a button push.

function refresh() {


    document.getElementById("newWords").outerText = "hit the link above.";

}

//This is how you can dynamically change a <a href - with js

function changeHREF() {

    document.getElementById("changeLink").href = "index.html";

}


// Title Scoller 

var reps = 2;
var speed = 100;
var count = 0;
var s = 0;
var sTime = null;

if (reps < 1) reps = 1;

function jaysScroller() {
    A();
}

function A() {
    s++;
    if (s > 35) { s = 1; }

    if (s == 1) { document.title = '--------------------J'; }
    if (s == 2) { document.title = '-------------------Ja'; }
    if (s == 3) { document.title = '------------------Jay'; }
    if (s == 4) { document.title = '-----------------Jays'; }
    if (s == 5) { document.title = '----------------Jays '; }
    if (s == 6) { document.title = '---------------Jays J'; }
    if (s == 7) { document.title = '--------------Jays Ja'; }
    if (s == 8) { document.title = '-------------Jays Jav'; }
    if (s == 9) { document.title = '------------Jays Java'; }
    if (s == 10) { document.title = '-----------Jays Javas'; }
    if (s == 11) { document.title = '----------Jays Javasc'; }
    if (s == 12) { document.title = '---------Jays Javascr'; }
    if (s == 13) { document.title = '--------Jays Javascri'; }
    if (s == 14) { document.title = '------Jays Javascript'; }
    if (s == 15) { document.title = '-----Jays Javascript-'; }
    if (s == 16) { document.title = '----Jays Javascript--'; }
    if (s == 17) { document.title = '---Jays Javascript---'; }
    if (s == 18) { document.title = '--Jays Javascript----'; }
    if (s == 19) { document.title = '-Jays Javascript-----'; }
    if (s == 20) { document.title = 'Jays Javascript------'; }
    if (s == 21) { document.title = 'ays Javascript-------'; }
    if (s == 22) { document.title = 'ys Javascript--------'; }
    if (s == 23) { document.title = 's Javascript---------'; }
    if (s == 24) { document.title = ' Javascript----------'; }
    if (s == 25) { document.title = 'Javascript-----------'; }
    if (s == 26) { document.title = 'avascript------------'; }
    if (s == 27) { document.title = 'vascript-------------'; }
    if (s == 28) { document.title = 'ascript--------------'; }
    if (s == 29) { document.title = 'script---------------'; }
    if (s == 30) { document.title = 'cript----------------'; }
    if (s == 31) { document.title = 'ript-----------------'; }
    if (s == 32) { document.title = 'ipt------------------'; }
    if (s == 33) { document.title = 'pt-------------------'; }
    if (s == 34) { document.title = 't--------------------'; }
    if (s == 35) { document.title = '---------------------'; }
    if (count < (35 * reps)) {
        sTime = setTimeout("A()", speed);
        count++;
    }
    else {
        document.title = "Jays Javascript"
    }
}
jaysScroller();


// Header Scroll

function animate() {
    if (parseInt(crossheader.left) < 0)
        crossheader.left = parseInt(crossheader.left) + 20 + "px"
    else {
        crossheader.left = 0
        crossheader.fontStyle = "normal"
        clearInterval(start)
    }
}