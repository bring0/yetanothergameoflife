var i = 0;

function timedCount() {
    i=i+1;
    postMessage({
        "poo" : i,
        
        "pee" : "ee"
    });
    setTimeout("timedCount()", 500);
}

timedCount();