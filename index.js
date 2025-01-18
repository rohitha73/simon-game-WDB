
var randomMath = Math.random();
randomMath = randomMath*4;
randomMath = Math.floor(randomMath) +1;

switch(randomMath) {
    case 1:
        var audio = new Audio('./sounds/red.mp3');
        audio.play();
        console.log("1")
        break;
    case 2:
        var audio = new Audio('./sounds/green.mp3');
        audio.play();
        console.log("2")
        break;
    case 3:
        var audio = new Audio('./sounds/blue.mp3');
        audio.play();
        console.log("3")
        break;
    case 4:
        var audio = new Audio('./sounds/yellow.mp3');
        audio.play();
        console.log("4")
        break;
}


/*$('.btn').click(function(event) {
    var buttonClass = event.target.classList[1];

    switch(buttonClass) {
        case 'red':
            setTimeout(function(){ $('.red').addClass('pressed');},0); 
            setTimeout(function(){ $('.red').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/red.mp3');
            audio.play();
            break;
        case 'green':
            setTimeout(function(){ $('.green').addClass('pressed');},0); 
            setTimeout(function(){ $('.green').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/green.mp3');
            audio.play();
            break;
        case 'blue':
            setTimeout(function(){ $('.blue').addClass('pressed');},0); 
            setTimeout(function(){ $('.blue').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/blue.mp3');
            audio.play();
            break;
        case 'yellow':
            setTimeout(function(){ $('.yellow').addClass('pressed');},0); 
            setTimeout(function(){ $('.yellow').removeClass('pressed');},200); 
            var audio = new Audio('/sounds/yellow.mp3');
            audio.play();
            break;
        default:
            break;
    }
});

*/