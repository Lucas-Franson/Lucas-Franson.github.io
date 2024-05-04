
function printNumbers(from, to) {
    let interval = setInterval(function(){
        console.log(from);
        if(from === to) clearInterval(interval);
        from++;
    },1000);
}

printNumbers(1, 5);